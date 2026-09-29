import { useState, useEffect } from "react";
import type { NavId } from "../content/types";

export function useActiveSection(sectionIds: NavId[], defaultSection: NavId = "home"): NavId {
  const [activeId, setActiveId] = useState<NavId>(defaultSection);

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      // Find the entry that has the highest intersection ratio or is currently in the trigger area
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);
      if (visibleEntries.length > 0) {
        visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const bestEntry = visibleEntries[0];
        const currentId = bestEntry.target.id as NavId;
        if (currentId && sectionIds.includes(currentId)) {
          setActiveId(currentId);
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: "-10% 0px -40% 0px",
      threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
