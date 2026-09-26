"use client";

import { useState } from "react";
import Image from "next/image";
import type { Review } from "@/types/review";

function StarIcon() {
    return (
        <svg viewBox="0 0 32 32" className="h-2.5 w-2.5 fill-neutral-900" aria-hidden="true">
            <path d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z" />
        </svg>
    );
}

export function ReviewCard({ review }: { review: Review }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
                {review.avatarSrc ? (
                    <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
                        <Image src={review.avatarSrc} alt={review.name} fill className="object-cover" />
                    </div>
                ) : (
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-semibold text-neutral-900">
                        {review.name.charAt(0)}
                    </div>
                )}
                <div className="flex flex-col">
                    <span className="text-sm font-semibold text-neutral-900">{review.name}</span>
                    <span className="text-xs text-neutral-500">{review.memberSince}</span>
                </div>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-neutral-500">
                <div className="flex items-center gap-0.5">
                    {Array.from({ length: review.rating }).map((_, i) => (
                        <StarIcon key={i} />
                    ))}
                </div>
                <span>·</span>
                <span>{review.postedAt}</span>
            </div>

            <p className={`text-sm text-neutral-900 ${expanded ? "" : "line-clamp-3"}`}>{review.text}</p>

            {review.truncated && (
                <button
                    type="button"
                    onClick={() => setExpanded((v) => !v)}
                    className="w-fit cursor-pointer text-sm font-semibold text-neutral-900 underline"
                >
                    {expanded ? "Show less" : "Show more"}
                </button>
            )}
        </div>
    );
}