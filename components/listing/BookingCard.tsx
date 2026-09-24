"use client";

import { ChevronDown, Flag } from "lucide-react";

type BookingCardProps = {
    price: string;
    nights: number;
    checkIn: string;
    checkOut: string;
    guests: number;
    onReserve: () => void;
};

export function BookingCard({ price, nights, checkIn, checkOut, guests, onReserve }: BookingCardProps) {
    return (
        <div className="flex flex-col gap-4">
            <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-[0_6px_16px_rgba(0,0,0,0.12)]">
                {/* Pricing Header */}
                <div className="mb-6 flex items-baseline gap-1 text-[#222222]">
                    <span className="text-[22px] font-semibold underline decoration-1 underline-offset-2">
                        {price}
                    </span>
                    <span className="text-[16px]">for {nights} nights</span>
                </div>

                {/* Inputs Grid */}
                <div className="mb-4 rounded-lg border border-neutral-400 overflow-hidden">
                    <div className="flex border-b border-neutral-400">
                        <div className="flex-1 cursor-pointer border-r border-neutral-400 p-3 hover:bg-neutral-50 transition">
                            <div className="text-[10px] font-bold uppercase text-[#222222]">Check-in</div>
                            <div className="text-sm text-[#222222] mt-0.5">{checkIn}</div>
                        </div>
                        <div className="flex-1 cursor-pointer p-3 hover:bg-neutral-50 transition">
                            <div className="text-[10px] font-bold uppercase text-[#222222]">Checkout</div>
                            <div className="text-sm text-[#222222] mt-0.5">{checkOut}</div>
                        </div>
                    </div>
                    <div className="flex cursor-pointer items-center justify-between p-3 hover:bg-neutral-50 transition">
                        <div>
                            <div className="text-[10px] font-bold uppercase text-[#222222]">Guests</div>
                            <div className="text-sm text-[#222222] mt-0.5">{guests} guests</div>
                        </div>
                        <ChevronDown size={20} className="text-[#222222]" />
                    </div>
                </div>

                {/* Free Cancellation Banner */}
                <div className="mb-4 rounded-lg bg-[#f7f7f7] py-2 text-center text-[14px] text-[#222222]">
                    Free cancellation before <span className="font-semibold">17 October</span>
                </div>

                {/* Reserve Button */}
                <button
                    type="button"
                    onClick={onReserve}
                    className="w-full cursor-pointer rounded-full bg-rausch py-3.5 text-[16px] font-semibold text-white transition hover:bg-rausch-hover"
                >
                    Reserve
                </button>

                {/* Subtext */}
                <div className="mt-4 text-center text-[14px] text-[#222222]">
                    You won't be charged yet
                </div>
            </div>

            {/* Report Listing */}
            <button className="mx-auto flex cursor-pointer items-center gap-2 text-[14px] text-[#717171] underline transition hover:text-[#222222]">
                <Flag size={14} />
                Report this listing
            </button>
        </div>
    );
}