"use client";

import { useRef, useState } from "react";
import { NearbyStayCard } from "./NearbyStayCard";
import { CarouselLeftArrowIcon, CarouselRightArrowIcon } from "@/components/icons/CarouselArrowIcons";
import { NEARBY_STAYS } from "@/lib/data/nearbyStays";

const CARDS_PER_PAGE = 5;

export function NearbyStaysCarousel() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [page, setPage] = useState(0);

    const pageCount = Math.ceil(NEARBY_STAYS.length / CARDS_PER_PAGE);
    const atStart = page <= 0;
    const atEnd = page >= pageCount - 1;

    function goToPage(nextPage: number) {
        const el = scrollRef.current;
        if (!el) return;
        const clamped = Math.min(Math.max(nextPage, 0), pageCount - 1);
        setPage(clamped);
        el.scrollTo({ left: clamped * el.clientWidth, behavior: "smooth" });
    }

    return (
        <section className="border-t border-neutral-200 py-8">
            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-neutral-900">More stays nearby</h2>
                <div className="flex items-center gap-3">
                    <span className="text-sm text-neutral-500">
                        {page + 1} / {pageCount}
                    </span>
                    <button
                        type="button"
                        aria-label="Previous"
                        disabled={atStart}
                        onClick={() => goToPage(page - 1)}
                        className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-neutral-300 disabled:opacity-30"
                    >
                        <span className="h-3 w-3">
                            <CarouselLeftArrowIcon />
                        </span>
                    </button>
                    <button
                        type="button"
                        aria-label="Next"
                        disabled={atEnd}
                        onClick={() => goToPage(page + 1)}
                        className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-neutral-300 disabled:opacity-30"
                    >
                        <span className="h-3 w-3">
                            <CarouselRightArrowIcon />
                        </span>
                    </button>
                </div>
            </div>

            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-hidden scroll-smooth snap-x snap-mandatory"
            >
                {NEARBY_STAYS.map((stay) => (
                    <NearbyStayCard key={stay.id} stay={stay} />
                ))}
            </div>
        </section>
    );
}