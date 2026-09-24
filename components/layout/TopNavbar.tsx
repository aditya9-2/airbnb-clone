"use client";

import Link from "next/link";
import { AirbnbLogo } from "./AirbnbLogo";
import { House, Search } from "lucide-react";
import Image from "next/image";
import { SearchPill } from "./SearchPill";

export function TopNavbar() {
    return (
        <header className="sticky h-22 top-0 z-40 w-full border-b border-neutral-200 bg-white">
            <nav className="mx-auto flex h-22 max-w-[1750px] items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-rausch" aria-label="Airbnb homepage">
                    <AirbnbLogo />
                </Link>

                {/* Search pill */}
                <div className="pl-24">
                    <SearchPill />
                </div>

                {/* Right cluster */}
                <div className="flex items-center gap-2">
                    <Link
                        href="#"
                        className="hidden rounded-full px-3 py-2 text-sm font-medium hover:bg-neutral-100 md:block"
                    >
                        Become a host
                    </Link>

                    <button
                        type="button"
                        className="rounded-full p-3 hover:bg-neutral-100"
                        aria-label="Choose a language and currency"
                    >
                        <svg
                            viewBox="0 0 16 16"
                            aria-hidden="true"
                            style={{ display: "block", height: 16, width: 16, fill: "currentColor" }}
                        >
                            <path d="M8 .25a7.77 7.77 0 0 1 7.75 7.78 7.75 7.75 0 0 1-7.52 7.72h-.25A7.75 7.75 0 0 1 .25 8.24v-.25A7.75 7.75 0 0 1 8 .25zm1.95 8.5h-3.9c.15 2.9 1.17 5.34 1.88 5.5H8c.68 0 1.72-2.37 1.93-5.23zm4.26 0h-2.76c-.09 1.96-.53 3.78-1.18 5.08A6.26 6.26 0 0 0 14.17 9zm-9.67 0H1.8a6.26 6.26 0 0 0 3.94 5.08 12.59 12.59 0 0 1-1.16-4.7l-.03-.38zm1.2-6.58-.12.05a6.26 6.26 0 0 0-3.83 5.03h2.75c.09-1.83.48-3.54 1.06-4.81zm2.25-.42c-.7 0-1.78 2.51-1.94 5.5h3.9c-.15-2.9-1.18-5.34-1.89-5.5h-.07zm2.28.43.03.05a12.95 12.95 0 0 1 1.15 5.02h2.75a6.28 6.28 0 0 0-3.93-5.07z" />
                        </svg>
                    </button>

                    <button
                        type="button"
                        className="rounded-full border border-neutral-200 p-3 shadow-sm hover:shadow-md"
                        aria-label="Main navigation menu"
                    >
                        <svg
                            viewBox="0 0 32 32"
                            aria-hidden="true"
                            style={{
                                display: "block",
                                height: 16,
                                width: 16,
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: 3,
                            }}
                        >
                            <path d="M2 16h28M2 24h28M2 8h28" />
                        </svg>
                    </button>
                </div>
            </nav>
        </header>
    );
}