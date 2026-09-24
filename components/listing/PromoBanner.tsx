"use client";

import { PromoTagIcon } from "@/components/icons/PromoTagIcon";

export function PromoBanner() {
    return (
        <div className="flex items-center justify-between rounded-xl border border-neutral-300 px-6 py-5">
            <div className="flex items-start gap-4">
                <PromoTagIcon className="mt-1 h-8 w-8 shrink-0" />
                <div className="flex flex-col">
                    {/* Added whitespace-nowrap to prevent text from wrapping */}
                    <span className="whitespace-nowrap text-[16px] text-[#222222]">
                        Get 10% off your next stay.
                    </span>
                    <button
                        type="button"
                        className="self-start cursor-pointer text-[16px] font-medium underline text-[#222222] hover:text-black mt-0.5"
                    >
                        Terms apply
                    </button>
                </div>
            </div>

            <button
                type="button"
                className="ml-4 cursor-pointer rounded-lg bg-neutral-100 px-5 py-2.5 text-sm font-semibold text-[#222222] transition hover:bg-neutral-200"
                onClick={() => { }}
            >
                Claim
            </button>
        </div>
    );
}