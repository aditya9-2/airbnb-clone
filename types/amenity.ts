import type { ComponentType } from "react";

export type Amenity = {
    id: string;
    label: string;
    icon: ComponentType;
    available: boolean;
};

export type AmenityCategory = {
    title: string;
    items: Amenity[];
};