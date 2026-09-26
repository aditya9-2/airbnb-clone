import { RATING_CATEGORIES, STAR_DISTRIBUTION } from "@/lib/data/reviews";
import { CleaningIcon } from "@/components/icons/Amineties";
import {
    AccuracyIcon,
    CheckInIcon,
    CommunicationIcon,
    LocationIcon,
    ValueIcon,
} from "@/components/icons/RatingCategoryIcons";
import type { ComponentType } from "react";

const CATEGORY_ICONS: Record<string, ComponentType> = {
    cleanliness: CleaningIcon,
    accuracy: AccuracyIcon,
    checkin: CheckInIcon,
    communication: CommunicationIcon,
    location: LocationIcon,
    value: ValueIcon,
};

export function RatingBreakdown() {
    return (
        <div className="grid grid-cols-2 gap-x-10 border-b border-neutral-200 py-10 sm:grid-cols-4 lg:grid-cols-7">
            <div className="pr-8">
                <h3 className="mb-3 text-base text-neutral-900">Overall rating</h3>
                <div className="flex flex-col gap-1.5">
                    {STAR_DISTRIBUTION.map((row) => (
                        <div key={row.stars} className="flex items-center gap-2">
                            <span className="w-2 shrink-0 text-xs text-neutral-500">{row.stars}</span>
                            <div className="h-1 w-32 shrink-0 rounded-full bg-neutral-200">
                                <div className="h-1 rounded-full bg-neutral-900" style={{ width: `${row.percentage}%` }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {RATING_CATEGORIES.map((category) => {
                const Icon = CATEGORY_ICONS[category.id];
                return (
                    <div key={category.id} className="flex flex-col gap-1.5 border-l border-neutral-200 pl-8">
                        <span className="text-base text-neutral-900">{category.label}</span>
                        <span className="text-base font-medium text-neutral-900">{category.value.toFixed(1)}</span>
                        <div className="mt-1 h-7 w-7 text-neutral-900">
                            <Icon />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}