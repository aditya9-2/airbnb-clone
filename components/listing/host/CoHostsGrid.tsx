import Image from "next/image";
import type { CoHost } from "@/types/listing";

function CoHostAvatar({ coHost }: { coHost: CoHost }) {
    return (
        <div className="flex items-center gap-3">
            {coHost.avatarUrl ? (
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
                    <Image src={coHost.avatarUrl} alt={coHost.name} fill className="object-cover" />
                </div>
            ) : (
                <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-neutral-900 ${coHost.fallbackColor ?? "bg-neutral-200"}`}
                >
                    {coHost.name.charAt(0)}
                </div>
            )}
            <span className="text-sm font-medium text-neutral-900">{coHost.name}</span>
        </div>
    );
}

export function CoHostsGrid({ coHosts }: { coHosts: CoHost[] }) {
    return (
        <div>
            <h3 className="mb-4 text-xl font-semibold text-neutral-900">Co-Hosts</h3>
            <div className="grid grid-cols-3 gap-x-72 gap-y-4">
                {coHosts.map((coHost) => (
                    <CoHostAvatar key={coHost.id} coHost={coHost} />
                ))}
            </div>
        </div>
    );
}