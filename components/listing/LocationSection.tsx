import { LocationMap } from "./LocationMap";
import { ChevronRightSmallIcon } from "@/components/icons/MapIcons";

type LocationSectionProps = {
    fullLocation: string;
    neighbourhoodHighlights: string;
};

export function LocationSection({ fullLocation, neighbourhoodHighlights }: LocationSectionProps) {
    return (
        <section id="location" className="border-t border-neutral-200 py-8">
            <h2 className="mb-2 text-xl font-semibold text-neutral-900">Where you&apos;ll be</h2>
            <p className="mb-6 text-sm text-neutral-900">{fullLocation}</p>

            <LocationMap />

            <p className="mt-4 text-sm text-neutral-900">Exact location will be provided after booking.</p>

            <h3 className="mt-8 mb-2 text-lg font-semibold text-neutral-900">Neighbourhood highlights</h3>
            <p className="text-sm text-neutral-900">{neighbourhoodHighlights}</p>

            {/* Visual match only — no additional content to reveal, so this doesn't expand anything */}
            <button
                type="button"
                className="mt-4 flex cursor-pointer items-center gap-1 text-sm font-semibold text-neutral-900 underline"
            >
                Show more
                <span className="h-3.5 w-3.5">
                    <ChevronRightSmallIcon />
                </span>
            </button>
        </section>
    );
}