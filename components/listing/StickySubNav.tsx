"use client";

import { motion } from "framer-motion";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const TABS = [
    { id: "photos", label: "Photos" },
    { id: "amenities", label: "Amenities" },
    { id: "reviews", label: "Reviews" },
    { id: "location", label: "Location" },
];

type StickySubNavProps = {
    price: string;
    nights: number;
    rating: number;
    reviewCount: number;
    onReserve: () => void;
};

export function StickySubNav({ price, nights, rating, reviewCount, onReserve }: StickySubNavProps) {
    const activeId = useScrollSpy(TABS.map((t) => t.id));

    function scrollTo(id: string) {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    return (
        <div className="w-full border-b border-neutral-200">
            <div className="mx-auto flex h-18 max-w-300 items-center justify-between px-10">
                {/* Tabs */}
                <div className="relative flex h-full items-center gap-8">
                    {TABS.map((tab) => {
                        const isActive = tab.id === activeId;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => scrollTo(tab.id)}
                                className={`relative flex h-full cursor-pointer items-center text-sm font-semibold transition-colors ${isActive ? "text-[#222222]" : "text-[#717171] hover:text-[#222222]"
                                    }`}
                            >
                                {tab.label}
                                {isActive && (
                                    <motion.span
                                        layoutId="subnav-underline"
                                        className="absolute inset-x-0 bottom-0 h-1 bg-[#222222]"
                                        transition={{ type: "spring", stiffness: 500, damping: 40 }}
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>

                <div className="flex items-center gap-6">
                    <div className="flex flex-col items-end text-sm text-[#222222]">
                        <span>
                            <span className="font-semibold decoration-1">
                                {price}
                            </span>
                            <span className="ml-1">for {nights} nights</span>
                        </span>
                        <span className="inline-flex items-center gap-1">
                            ★ {rating.toFixed(2)}
                            <span className="mx-1 font-normal">·</span>
                            <span className="decoration-1">{reviewCount} reviews</span>
                        </span>
                    </div>
                    <button
                        onClick={onReserve}
                        className="cursor-pointer rounded-full bg-rausch px-6 py-2.5 text-[14px] font-semibold text-white transition hover:bg-rausch-hover"
                    >
                        Reserve
                    </button>
                </div>
            </div>
        </div>
    );
}