import Image from "next/image";

export function GuestFavouriteHero({ rating }: { rating: number }) {
    return (
        <div className="flex flex-col items-center py-10 text-center">
            <div className="flex items-center gap-4">
                <Image
                    src="/images/laurel-left.png"
                    alt=""
                    width={70}
                    height={100}
                    className="-rotate-12 drop-shadow-md"
                />
                <span className="text-7xl font-semibold text-neutral-900">{rating}</span>
                <Image
                    src="/images/laurel-right.png"
                    alt=""
                    width={70}
                    height={100}
                    className="rotate-12 drop-shadow-md"
                />
            </div>

            <h2 className="mt-4 text-2xl font-semibold text-neutral-900">Guest favourite</h2>
            <p className="mt-2 max-w-md text-sm text-neutral-900">
                This home is a guest favourite based on ratings, reviews and reliability
            </p>

            <button type="button" className="mt-4 cursor-pointer text-sm font-semibold text-neutral-900 underline">
                How reviews work
            </button>
        </div>
    );
}