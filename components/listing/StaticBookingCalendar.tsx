"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export function StaticBookingCalendar() {
    // October 2026 starts on Thursday → 4 leading empties
    const octDays = [
        null, null, null, null, 1, 2, 3,
        4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17,
        18, 19, 20, 21, 22, 23, 24,
        25, 26, 27, 28, 29, 30, 31,
    ];

    // November 2026 starts on Sunday
    const novDays = [
        1, 2, 3, 4, 5, 6, 7,
        8, 9, 10, 11, 12, 13, 14,
        15, 16, 17, 18, 19, 20, 21,
        22, 23, 24, 25, 26, 27, 28,
        29, 30, null, null, null, null, null,
    ];

    const isInRange = (day: number | null) =>
        day !== null && day >= 18 && day <= 23;

    const isRangeStart = (day: number | null) => day === 18;
    const isRangeEnd = (day: number | null) => day === 23;

    const Weekdays = () => (
        <div className="grid grid-cols-7 mb-1">
            {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                <div
                    key={i}
                    className="flex h-8 w-10 items-center justify-center text-xs font-medium text-neutral-500"
                >
                    {d}
                </div>
            ))}
        </div>
    );

    const DayCell = ({
        day,
        isStart,
        isEnd,
        isMiddle,
    }: {
        day: number | null;
        isStart?: boolean;
        isEnd?: boolean;
        isMiddle?: boolean;
    }) => {
        if (day === null) {
            return <div className="h-10 w-10" />;
        }

        return (
            <div
                className={`
          relative flex h-10 w-10 items-center justify-center text-sm
          ${isMiddle ? "bg-neutral-100" : ""}
          ${isStart ? "rounded-l-full bg-neutral-100" : ""}
          ${isEnd ? "rounded-r-full bg-neutral-100" : ""}
        `}
            >
                <span
                    className={`
            flex h-10 w-10 items-center justify-center rounded-full text-sm
            ${isStart || isEnd
                            ? "bg-neutral-900 font-medium text-white"
                            : "text-neutral-900"
                        }
          `}
                >
                    {day}
                </span>
            </div>
        );
    };

    return (
        <section className="py-8">
            <div className="w-full max-w-160">
                {/* Header */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-neutral-900">
                        5 nights in Candolim
                    </h2>
                    <p className="mt-1 text-sm text-neutral-500">
                        18 Oct 2026 - 23 Oct 2026
                    </p>
                </div>

                {/* Calendars */}
                <div className="relative flex gap-12 md:gap-16">
                    {/* Navigation arrows */}
                    <button
                        type="button"
                        className="absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full hover:bg-neutral-100"
                        aria-label="Previous month"
                    >
                        <ChevronLeft size={16} className="text-neutral-700" />
                    </button>
                    <button
                        type="button"
                        className="absolute right-0 top-1 flex h-7 w-7 items-center justify-center rounded-full hover:bg-neutral-100"
                        aria-label="Next month"
                    >
                        <ChevronRight size={16} className="text-neutral-700" />
                    </button>

                    {/* October 2026 */}
                    <div className="flex flex-col">
                        <div className="mb-4 flex h-9 items-center justify-center text-base font-semibold text-neutral-900">
                            October 2026
                        </div>
                        <Weekdays />
                        <div className="grid grid-cols-7">
                            {octDays.map((day, i) => (
                                <DayCell
                                    key={i}
                                    day={day}
                                    isStart={isRangeStart(day)}
                                    isEnd={isRangeEnd(day)}
                                    isMiddle={
                                        isInRange(day) && !isRangeStart(day) && !isRangeEnd(day)
                                    }
                                />
                            ))}
                        </div>
                    </div>

                    {/* November 2026 */}
                    <div className="flex flex-col">
                        <div className="mb-4 flex h-9 items-center justify-center text-base font-semibold text-neutral-900">
                            November 2026
                        </div>
                        <Weekdays />
                        <div className="grid grid-cols-7">
                            {novDays.map((day, i) => (
                                <DayCell key={i} day={day} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer buttons */}
                <div className="mt-6 flex items-center justify-between">
                    <button
                        type="button"
                        aria-label="Switch to typing dates"
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-300 hover:bg-neutral-100"
                    >
                        <svg
                            viewBox="0 0 32 22"
                            width="20"
                            height="14"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.6"
                        >
                            <rect x="1" y="1" width="30" height="20" rx="3" />
                            <path d="M6 7h.01M11 7h.01M16 7h.01M21 7h.01M26 7h.01M6 12h.01M26 12h.01M9 16h14" />
                        </svg>
                    </button>

                    <button
                        type="button"
                        className="text-sm font-semibold text-neutral-900 underline"
                    >
                        Clear dates
                    </button>
                </div>
            </div>
        </section>
    );
}