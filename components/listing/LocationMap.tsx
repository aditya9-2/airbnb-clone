import { MapSearchIcon, MapZoomInIcon, MapZoomOutIcon, MapHousePinIcon } from "@/components/icons/MapIcons";

export function LocationMap() {
    return (
        <div className="relative h-100 w-full overflow-hidden rounded-xl border border-neutral-300 bg-[#f2f2f2]">
            {/* Grid line overlay — exact pattern/values from the reference CSS */}
            <div
                className="pointer-events-none absolute inset-0 opacity-50"
                style={{
                    backgroundImage:
                        "linear-gradient(90deg, rgba(180,180,170,.5) 1px, transparent 1px), linear-gradient(0deg, rgba(180,180,170,.35) 1px, transparent 1px)",
                    backgroundSize: "90px 90px, 90px 90px",
                }}
            />

            {/* Approximated decorative shapes — not extracted from source, just visually matching the screenshot */}
            <div
                className="pointer-events-none absolute inset-0 bg-[#cfe4ee]"
                style={{ clipPath: "polygon(0 0, 45% 0, 0 65%)" }}
            />
            <div className="pointer-events-none absolute left-[38%] top-[42%] h-24 w-24 rounded-full bg-[#d6e8d1] blur-[2px]" />
            <div className="pointer-events-none absolute left-[58%] top-[52%] h-28 w-28 rounded-full bg-[#d6e8d1] blur-[2px]" />

            {/* Center pin */}
            <div className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-neutral-900 text-white shadow-md">
                <span className="h-5 w-5">
                    <MapHousePinIcon />
                </span>
            </div>

            {/* Search button */}
            <button
                type="button"
                aria-label="Search"
                className="absolute left-4 top-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white shadow-md hover:bg-neutral-50"
            >
                <span className="h-4 w-4">
                    <MapSearchIcon />
                </span>
            </button>

            {/* Zoom controls */}
            <div className="absolute right-4 top-4 flex flex-col overflow-hidden rounded-lg bg-white shadow-md">
                <button
                    type="button"
                    aria-label="Zoom in"
                    className="flex h-10 w-10 cursor-pointer items-center justify-center border-b border-neutral-200 hover:bg-neutral-50"
                >
                    <span className="h-4 w-4">
                        <MapZoomInIcon />
                    </span>
                </button>
                <button
                    type="button"
                    aria-label="Zoom out"
                    className="flex h-10 w-10 cursor-pointer items-center justify-center hover:bg-neutral-50"
                >
                    <span className="h-4 w-4">
                        <MapZoomOutIcon />
                    </span>
                </button>
            </div>
        </div>
    );
}