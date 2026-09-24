"use client";

import Image from "next/image";
import { Search } from "lucide-react";

export function SearchPill() {
    return (
        <div role="search" className="flex h-12 items-center rounded-full border border-neutral-200 py-1 pl-2 pr-1 shadow-sm transition-shadow hover:shadow-md">
            <button type="button" className="flex items-center gap-3 border-r border-neutral-300 px-5 text-sm font-semibold text-neutral-800">
                <Image
                    src="/searchbar-house.png"
                    alt="house"
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                />
                Anywhere
            </button>

            <button type="button" className="border-r border-neutral-300 px-5 text-sm font-semibold text-neutral-800">
                Anytime
            </button>

            <button type="button" className="px-5 text-sm text-neutral-500 hover:text-neutral-800 transition-colors">
                Add guests
            </button>

            <button
                type="button"
                aria-label="Search"
                className="ml-2 flex h-10 w-10 items-center justify-center rounded-full bg-rausch text-white transition hover:bg-rose-600"
            >
                <Search size={14} strokeWidth={3} />
            </button>
        </div>
    );
}