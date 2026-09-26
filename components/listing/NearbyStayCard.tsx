import Image from "next/image";
import { StarIcon } from "@/components/icons/StarIcon";
import type { NearbyStay } from "@/types/nearbyStay";

export function NearbyStayCard({ stay }: { stay: NearbyStay }) {
    return (
        <div className="flex w-full shrink-0 snap-start flex-col gap-2 basis-[calc((100%-4*1rem)/5)]">
            <div className="relative aspect-square w-full overflow-hidden rounded-xl">
                <Image src={stay.image} alt={stay.title} fill className="object-cover" />
            </div>
            <h3 className="line-clamp-2 text-sm font-medium text-neutral-900">{stay.title}</h3>
            <div className="flex items-center gap-1.5 text-sm text-neutral-900">
                <span>₹{stay.price.toLocaleString("en-IN")}</span>
                <span className="flex items-center gap-1">
                    <span className="h-3 w-3">
                        <StarIcon />
                    </span>
                    {stay.rating.toFixed(2)}
                </span>
            </div>
        </div>
    );
}