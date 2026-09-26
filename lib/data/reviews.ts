import type { Review, RatingCategory, StarDistributionRow, HighlightTag } from "@/types/review"

export const RATING_CATEGORIES: RatingCategory[] = [
    { id: "cleanliness", label: "Cleanliness", value: 5.0 },
    { id: "accuracy", label: "Accuracy", value: 5.0 },
    { id: "checkin", label: "Check-in", value: 5.0 },
    { id: "communication", label: "Communication", value: 5.0 },
    { id: "location", label: "Location", value: 4.8 },
    { id: "value", label: "Value", value: 4.8 },
];

export const STAR_DISTRIBUTION: StarDistributionRow[] = [
    { stars: 5, percentage: 95 },
    { stars: 4, percentage: 5 },
    { stars: 3, percentage: 0 },
    { stars: 2, percentage: 0 },
    { stars: 1, percentage: 0 },
];

// decor / indoor-spaces images exist in /public/images but no count is
// visible in the reference screenshots — add them once you have the numbers.
export const HIGHLIGHT_TAGS: HighlightTag[] = [
    { id: "comfort", image: "/images/comfort.png", label: "Comfort", count: 6 },
    { id: "accuracy", image: "/images/accuracy.png", label: "Accuracy", count: 5 },
    { id: "hot-tub", image: "/images/hot-tub.png", label: "Hot tub", count: 5 },
    { id: "condition", image: "/images/condition.png", label: "Condition", count: 4 },
    { id: "hospitality", image: "/images/hospitality.png", label: "Hospitality", count: 8 },
    { id: "cleanliness", image: "/images/cleanliness.png", label: "Cleanliness", count: 4 },
    { id: "amenities", image: "/images/amenities.png", label: "Amenities", count: 2 },
];

export const REVIEWS: Review[] = [
    {
        id: "amit",
        name: "Amit",
        avatarSrc: null,
        memberSince: "2 months on Airbnb",
        rating: 5,
        postedAt: "1 week ago",
        text: "Very helpful and responsive team. Safe and peaceful stay. loved everything about the property.",
        truncated: false,
    },
    {
        id: "aheesh",
        name: "Aheesh",
        avatarSrc: "/images/rev1.jpeg",
        memberSince: "3 years on Airbnb",
        rating: 5,
        postedAt: "2 weeks ago",
        text: "We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again.",
        truncated: true,
    },
    {
        id: "samiksha",
        name: "Samiksha",
        avatarSrc: "/images/rev2.jpeg",
        memberSince: "8 months on Airbnb",
        rating: 5,
        postedAt: "May 2026",
        text: "the host nitish was really great help",
        truncated: false,
    },
    {
        id: "vedant",
        name: "Vedant",
        avatarSrc: null,
        memberSince: "4 years on Airbnb",
        rating: 5,
        postedAt: "May 2026",
        text: "We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine.",
        truncated: true,
    },
    {
        id: "vaibhav",
        name: "Vaibhav S",
        avatarSrc: "/images/rev3.jpeg",
        memberSince: "3 years on Airbnb",
        rating: 5,
        postedAt: "May 2026",
        text: "Great great experience living out there , can't expect more , will always look for it in the future and will recommend my friends too.",
        truncated: false,
    },
    {
        id: "mohd",
        name: "Mohd",
        avatarSrc: "/images/rev4.jpeg",
        memberSince: "5 years on Airbnb",
        rating: 5,
        postedAt: "May 2026",
        text: "Great place. Exactly as described in the listing.",
        truncated: false,
    },
];