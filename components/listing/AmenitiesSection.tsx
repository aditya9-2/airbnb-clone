"use client";

import { useState } from "react";
import { AmenityRow } from "./AmenityRow";
import { AmenitiesModal } from "./AmenitiesModal";
import { PREVIEW_AMENITIES, AMENITY_CATEGORIES } from "@/lib/data/amenities";
import { OutlineButton } from "../ui/OutlineButton";

export function AmenitiesSection() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <section id="amenities" className="py-8">
            <h2 className="mb-6 text-xl font-semibold text-neutral-900">
                What this place offers
            </h2>

            <div className="grid grid-cols-2 gap-x-6">
                {PREVIEW_AMENITIES.map((amenity) => (
                    <AmenityRow key={amenity.id} {...amenity} />
                ))}
            </div>

            <OutlineButton label="Show all 50 amenities" onClick={() => setModalOpen(true)} />

            <AmenitiesModal
                open={modalOpen}
                onOpenChange={setModalOpen}
                categories={AMENITY_CATEGORIES}
            />
        </section>
    );
}