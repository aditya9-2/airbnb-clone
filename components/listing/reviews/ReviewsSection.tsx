import { GuestFavouriteHero } from "./GuestFavouriteHero";
import { RatingBreakdown } from "./RatingBreakdown";
import { ReviewHighlightPills } from "./ReviewHighlightPills";
import { ReviewCard } from "./ReviewCard";
import { OutlineButton } from "@/components/ui/OutlineButton";
import { REVIEWS } from "@/lib/data/reviews";

export function ReviewsSection({ rating, reviewCount }: { rating: number; reviewCount: number }) {
    return (
        <section id="reviews" className="py-8">
            <GuestFavouriteHero rating={rating} />
            <RatingBreakdown />
            <ReviewHighlightPills />

            <div className="grid grid-cols-1 gap-x-10 gap-y-10 py-8 sm:grid-cols-2">
                {REVIEWS.map((review) => (
                    <ReviewCard key={review.id} review={review} />
                ))}
            </div>

            {/* Intentionally does nothing on click, per spec */}
            <OutlineButton label={`Show all ${reviewCount} reviews`} />
        </section>
    );
}