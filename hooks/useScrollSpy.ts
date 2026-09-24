"use client";

import { useEffect, useState } from "react";

export function useScrollSpy(sectionIds: string[], offset = 96) {
    const [activeId, setActiveId] = useState(sectionIds[0]);

    useEffect(() => {
        function onScroll() {
            let current = sectionIds[0];
            for (const id of sectionIds) {
                const el = document.getElementById(id);
                if (!el) continue;
                const top = el.getBoundingClientRect().top;
                if (top - offset <= 0) current = id;
            }
            setActiveId(current);
        }
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, [sectionIds, offset]);

    return activeId;
}