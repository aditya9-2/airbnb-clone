"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TopNavbar } from "./TopNavbar";
import { StickySubNav } from "../listing/StickySubNav";

type ListingNavbarProps = {
    price: string;
    nights: number;
    rating: number;
    reviewCount: number;
    onReserve: () => void;
    // switchOffset is kept as a fallback if the gallery isn't found
    switchOffset?: number;
};

export function ListingNavbar({
    price,
    nights,
    rating,
    reviewCount,
    onReserve,
    switchOffset = 360,
}: ListingNavbarProps) {
    const [showSubNav, setShowSubNav] = useState(false);

    useEffect(() => {
        function onScroll() {
            const gallery = document.getElementById("photo-gallery");

            if (gallery) {
                const rect = gallery.getBoundingClientRect();

                const threshold = rect.height * 0.08;
                setShowSubNav(rect.bottom <= threshold);
            } else {
                setShowSubNav(window.scrollY > switchOffset);
            }
        }

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();

        return () => window.removeEventListener("scroll", onScroll);
    }, [switchOffset]);

    return (
        <>
            <TopNavbar />

            <AnimatePresence>
                {showSubNav && (
                    <motion.div
                        className="fixed left-0 top-0 z-50 w-full bg-white shadow-sm"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                        <StickySubNav
                            price={price}
                            nights={nights}
                            rating={rating}
                            reviewCount={reviewCount}
                            onReserve={onReserve}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}