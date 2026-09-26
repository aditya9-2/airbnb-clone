import type { ReactNode } from "react";
import { CalendarXIcon, ShieldIcon } from "@/components/icons/HostIcons";
import { CheckInIcon } from "@/components/icons/RatingCategoryIcons"; 
import type { ThingsToKnow } from "@/types/listing";

type Column = {
    icon: ReactNode;
    title: string;
    lines: string[];
};

export function ThingsToKnowSection({ thingsToKnow }: { thingsToKnow: ThingsToKnow }) {
    const columns: Column[] = [
        { icon: <CalendarXIcon />, title: "Cancellation policy", lines: thingsToKnow.cancellationPolicy },
        { icon: <CheckInIcon />, title: "House rules", lines: thingsToKnow.houseRules },
        { icon: <ShieldIcon />, title: "Safety & property", lines: thingsToKnow.safetyProperty },
    ];

    return (
        <section className="border-t border-neutral-200 py-8">
            <h2 className="mb-6 text-xl font-semibold text-neutral-900">Things to know</h2>

            <div className="grid grid-cols-3 gap-10">
                {columns.map((col) => (
                    <div key={col.title}>
                        <span className="mb-3 block h-6 w-6 text-neutral-900">{col.icon}</span>
                        <h3 className="mb-3 text-base font-semibold text-neutral-900">{col.title}</h3>
                        <div className="flex flex-col gap-2">
                            {col.lines.map((line, i) => (
                                <p key={i} className="text-sm text-neutral-900">
                                    {line}
                                </p>
                            ))}
                        </div>
                        <button type="button" className="mt-3 cursor-pointer text-sm font-semibold text-neutral-900 underline">
                            Learn more
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}