import Image from "next/image";
import { HIGHLIGHT_TAGS } from "@/lib/data/reviews";

export function ReviewHighlightPills() {
    return (
        <div className="flex gap-3 overflow-x-auto py-6 scrollbar-none [&::-webkit-scrollbar]:hidden">
            {HIGHLIGHT_TAGS.map((tag) => (
                <div
                    key={tag.id}
                    className="flex shrink-0 items-center gap-2 rounded-md border border-neutral-300 p-4 text-sm text-neutral-900"
                >
                    <Image src={tag.image} alt="" width={20} height={20} />
                    <span>{tag.label}</span>
                    <span className="text-neutral-500">{tag.count}</span>
                </div>
            ))}
        </div>
    );
}