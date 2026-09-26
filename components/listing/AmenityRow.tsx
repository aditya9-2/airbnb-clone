import type { Amenity } from "@/types/amenity";

export function AmenityRow({ icon: Icon, label, available }: Amenity) {
    return (
        <div className="flex items-center gap-4 border-b border-neutral-200 py-4 last:border-b-0">
            <span className="h-6 w-6 shrink-0 text-neutral-900">
                <Icon />
            </span>
            <span
                className={
                    available
                        ? "text-sm text-neutral-900"
                        : "text-sm text-neutral-500 line-through"
                }
            >
                {label}
            </span>
        </div>
    );
}