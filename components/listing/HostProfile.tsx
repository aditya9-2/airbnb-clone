"use client";

import Image from "next/image";
import type { Host } from "@/types/listing";

export function HostProfile({ host }: { host: Host }) {
    return (
        <div className="flex items-center gap-4 py-6">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-neutral-200">
                <Image
                    src="/host.jpeg"
                    alt={host.name}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex flex-col">
                <h3 className="text-[16px] font-semibold text-[#222222]">
                    Hosted by {host.name}
                </h3>
                <span className="text-[14px] text-[#717171]">
                    {host.yearsHosting} years hosting
                </span>
            </div>
        </div>
    );
}