import { useRef, useState, useEffect, useCallback } from "react";

export function useDragScroll<T extends HTMLElement>() {
  const containerRef = useRef<T>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const startX = useRef(0);
  const startScrollLeft = useRef(0);
  const dragDistance = useRef(0);
  const isMouseDown = useRef(false);

  // Update scroll bounds and progress
  const updateScrollState = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScroll = scrollWidth - clientWidth;

    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft < maxScroll - 5);

    const progress = maxScroll > 0 ? Math.min(1, Math.max(0, scrollLeft / maxScroll)) : 0;
    setScrollProgress(progress);

    // Approximate active item index (cards are roughly 340-380px wide + 20px gap)
    const cardWidth = el.firstElementChild?.clientWidth || 340;
    const gap = 20;
    const index = Math.round(scrollLeft / (cardWidth + gap));
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  // Mouse Drag Listeners
  const onMouseDown = (e: React.MouseEvent) => {
    const el = containerRef.current;
    if (!el) return;

    isMouseDown.current = true;
    dragDistance.current = 0;
    startX.current = e.pageX - el.offsetLeft;
    startScrollLeft.current = el.scrollLeft;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown.current) return;
    const el = containerRef.current;
    if (!el) return;

    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    dragDistance.current = Math.abs(x - startX.current);

    if (dragDistance.current > 5) {
      if (!isDragging) {
        setIsDragging(true);
        el.style.scrollSnapType = "none";
        el.style.cursor = "grabbing";
        el.style.userSelect = "none";
      }
      el.scrollLeft = startScrollLeft.current - walk;
    }
  };

  const stopDragging = () => {
    const el = containerRef.current;
    if (!el) return;

    isMouseDown.current = false;
    if (isDragging) {
      setTimeout(() => setIsDragging(false), 50);
      el.style.scrollSnapType = "x mandatory";
      el.style.cursor = "grab";
      el.style.removeProperty("user-select");
    }
  };

  // Keyboard navigation on scroller
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollPrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollNext();
    }
  };

  const scrollPrev = () => {
    const el = containerRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild?.clientWidth || 340;
    el.scrollBy({ left: -(cardWidth + 20), behavior: "smooth" });
  };

  const scrollNext = () => {
    const el = containerRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild?.clientWidth || 340;
    el.scrollBy({ left: cardWidth + 20, behavior: "smooth" });
  };

  return {
    containerRef,
    isDragging,
    canScrollLeft,
    canScrollRight,
    scrollProgress,
    activeIndex,
    scrollPrev,
    scrollNext,
    bind: {
      onMouseDown,
      onMouseMove,
      onMouseUp: stopDragging,
      onMouseLeave: stopDragging,
      onKeyDown,
    },
  };
}
