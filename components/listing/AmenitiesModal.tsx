"use client";

import { X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { AmenityRow } from "./AmenityRow";
import type { AmenityCategory } from "@/types/amenity";

type AmenitiesModalProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    categories: AmenityCategory[];
};

export function AmenitiesModal({ open, onOpenChange, categories }: AmenitiesModalProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent
                showCloseButton={false}
                className="max-h-[85vh] w-[90vw] max-w-187.5 sm:max-w-187.5 overflow-y-auto p-12 pt-16"
            >
                <button
                    type="button"
                    onClick={() => onOpenChange(false)}
                    aria-label="Close"
                    className="absolute left-6 top-6 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full hover:bg-neutral-100"
                >
                    <X size={20} />
                </button>

                <DialogTitle className="mb-6 text-2xl font-semibold text-neutral-900">
                    What this place offers
                </DialogTitle>

                <div className="flex flex-col">
                    {categories.map((category) => (
                        <div key={category.title} className="border-b border-neutral-200 py-6 last:border-b-0">
                            <h3 className="mb-2 text-lg font-medium text-neutral-900">
                                {category.title}
                            </h3>
                            <div className="flex flex-col">
                                {category.items.map((item) => (
                                    <AmenityRow key={item.id} {...item} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    );
}