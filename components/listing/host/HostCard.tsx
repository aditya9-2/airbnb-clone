import Image from "next/image";

import {
    VerifiedCheckIcon,
    BornIcon,
    SchoolIcon,
} from "@/components/icons/HostIcons";

import type { Host } from "@/types/listing";

export function HostCard({ host }: { host: Host }) {
    return (
        <div>
            {/* Main host card */}
            <div className="flex w-85 gap-6 rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_6px_16px_rgba(0,0,0,0.12)]">
                {/* Left column: avatar + name */}
                <div className="flex w-32.5 shrink-0 flex-col items-center text-center">
                    {/* Avatar */}
                    <div className="relative h-22.5 w-22.5 shrink-0">
                        <div className="relative h-full w-full overflow-hidden rounded-full bg-neutral-100">
                            <Image
                                src={host.avatarUrl}
                                alt={host.name}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {host.verified && (
                            <span
                                className="absolute z-10 flex h-6 w-6 items-center justify-center rounded-full bg-[#ff0a5b] text-white ring-2 ring-white"
                                style={{
                                    bottom: '9px',
                                    right: '-3px',
                                }}
                            >
                                <VerifiedCheckIcon />
                            </span>
                        )}
                    </div>

                    {/* Host name */}
                    <h3 className="mt-3 w-32.5 text-xl font-semibold leading-[1.45] text-neutral-900">
                        {host.name}
                    </h3>

                    <span className="mt-0.5 text-sm">
                        Host
                    </span>
                </div>

                {/* Right column: stats */}
                <div className="flex min-w-0 flex-1 flex-col border-l border-neutral-200 pl-5">
                    {/* Reviews */}
                    <div className="border-b border-neutral-200 pb-3">
                        <span className="block text-lg font-semibold leading-tight text-neutral-900">
                            {host.reviewCount?.toLocaleString("en-IN")}
                        </span>

                        <span className="text-xs text-neutral-500">
                            Reviews
                        </span>
                    </div>

                    {/* Rating */}
                    <div className="border-b border-neutral-200 py-3">
                        <span className="block text-lg font-semibold leading-tight text-neutral-900">
                            {host.rating}★
                        </span>

                        <span className="text-xs text-neutral-500">
                            Rating
                        </span>
                    </div>

                    {/* Years hosting */}
                    <div className="pt-3">
                        <span className="block text-lg font-semibold leading-tight text-neutral-900">
                            {host.yearsHosting}
                        </span>

                        <span className="text-xs text-neutral-500">
                            Years hosting
                        </span>
                    </div>
                </div>
            </div>

            {/* Host information */}
            <div className="mt-4 flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm text-neutral-900">
                    <span className="h-5 w-5 shrink-0">
                        <BornIcon />
                    </span>

                    <span>Born in the {host.bornDecade}</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-neutral-900">
                    <span className="h-5 w-5 shrink-0">
                        <SchoolIcon />
                    </span>

                    <span>
                        Where I went to school: {host.school}
                    </span>
                </div>
            </div>
        </div>
    );
}