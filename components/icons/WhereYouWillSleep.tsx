"use client";

import Image from "next/image";

export function WhereYouWillSleep() {
    return (
        <div className="py-12">
            <h2 className="mb-6 text-[22px] font-semibold text-[#222222]">
                Where you'll sleep
            </h2>

            <div className="grid grid-cols-2 gap-4">
                {/* Bedroom Card */}
                <div className="flex flex-col gap-3">
                    <div className="relative aspect-3/2 w-full overflow-hidden rounded-xl">
                        <Image
                            src="/images/prop-0.jpeg"
                            alt="Bedroom"
                            fill
                            className="object-cover transition hover:brightness-95"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[16px] font-semibold text-[#222222]">Bedroom</span>
                        <span className="text-[14px] text-[#717171]">1 double bed</span>
                    </div>
                </div>

                {/* Living Room Card */}
                <div className="flex flex-col gap-3">
                    <div className="relative aspect-3/2 w-full overflow-hidden rounded-xl">
                        <Image
                            src="/images/prop-10.jpeg"
                            alt="Living room"
                            fill
                            className="object-cover transition hover:brightness-95"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[16px] font-semibold text-[#222222]">Living room</span>
                        <span className="text-[14px] text-[#717171]">1 sofa</span>
                    </div>
                </div>
            </div>
        </div>
    );
}