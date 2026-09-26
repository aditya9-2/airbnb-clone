export type Review = {
    id: string;
    name: string;
    avatarSrc: string | null;
    memberSince: string;
    rating: number;
    postedAt: string;
    text: string;
    truncated: boolean;
};

export type RatingCategory = {
    id: string;
    label: string;
    value: number;
};

export type StarDistributionRow = {
    stars: number;
    percentage: number;
};

export type HighlightTag = {
    id: string;
    image: string;
    label: string;
    count: number;
};