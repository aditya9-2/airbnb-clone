"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

export function ListingDescription({ text }: { text: string }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="py-8">
            {/* Translation Banner */}
            <div className="mb-6 flex flex-wrap gap-1 rounded-lg bg-neutral-100 px-4 py-3 text-[16px] text-[#222222]">
                <span>Some info has been automatically translated.</span>
                <button type="button" className="font-semibold underline hover:text-black">
                    Show original
                </button>
            </div>

            <div
                className={`relative text-[16px] leading-6 text-[#222222] transition-all duration-300 ${isExpanded ? "h-auto" : "max-h-28 overflow-hidden"
                    }`}
            >
                <p className="whitespace-pre-line">{text}</p>

                {/* Stronger fade overlay to completely wash out the bottom text */}
                {!isExpanded && (
                    <div className="pointer-events-none absolute bottom-0 left-0 h-12 w-full bg-linear-to-t from-white via-white/80 to-transparent"></div>
                )}
            </div>

            <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-1 flex cursor-pointer items-center gap-1 text-[16px] font-normal text-[#222222] underline transition hover:text-black"
            >
                {isExpanded ? (
                    <>
                        Show less <ChevronRight size={16} strokeWidth={2.5} className="mt-0.5" />
                    </>
                ) : (
                    <>
                        Show more <ChevronRight size={16} strokeWidth={2.5} className="mt-0.5" />
                    </>
                )}
            </button>
        </div>
    );
}