import { ShieldIcon } from "@/components/icons/HostIcons";
import type { Host } from "@/types/listing";

export function HostDetailsPanel({ host }: { host: Host }) {
    return (
        <div>
            <h3 className="mb-3 text-xl font-semibold text-neutral-900">Host details</h3>
            <p className="text-sm text-neutral-900">Response rate: {host.responseRate}%</p>
            <p className="text-sm text-neutral-900">Responds within {host.respondsWithin}</p>

            <button
                type="button"
                className="mt-4 cursor-pointer rounded-lg bg-neutral-100 px-6 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-200"
            >
                Message host
            </button>

            <div className="mt-6 flex items-center gap-2 text-sm text-neutral-500 whitespace-nowrap">
                <span className="h-5 w-5 shrink-0">
                    <ShieldIcon />
                </span>
                To help protect your payment, always use Airbnb to send money and communicate with hosts.
            </div>
        </div>
    );
}