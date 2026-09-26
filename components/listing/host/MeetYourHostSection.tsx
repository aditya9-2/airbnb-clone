import { HostCard } from "./HostCard";
import { CoHostsGrid } from "./CoHostsGrid";
import { HostDetailsPanel } from "./HostDetailsPanel";

import type { Host, CoHost } from "@/types/listing";

type MeetYourHostSectionProps = {
    host: Host;
    coHosts: CoHost[];
};

export function MeetYourHostSection({
    host,
    coHosts,
}: MeetYourHostSectionProps) {
    return (
        <section className="border-t border-neutral-200 py-8">
            <h2 className="mb-6 text-xl font-semibold text-neutral-900">
                Meet your host
            </h2>

            <div className="grid grid-cols-3 gap-16">
                <HostCard host={host} />

                <div className="flex flex-col gap-8">
                    <CoHostsGrid coHosts={coHosts} />

                    <HostDetailsPanel host={host} />
                </div>
            </div>
        </section>
    );
}