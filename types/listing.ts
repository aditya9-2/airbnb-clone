export type ListingImage = {
    id: string;
    url: string;
    alt: string;
};

export type Host = {
    name: string;
    avatarUrl: string;
    yearsHosting: number;
};

export type Highlight = {
    icon: string; // lucide icon name
    title: string;
    description: string;
};

export type Listing = {
    id: string;
    title: string;
    propertyType: string; // "Entire serviced apartment in Candolim, India"
    guests: number;
    bedrooms: number;
    beds: number;
    bathrooms: number;
    rating: number;
    reviewCount: number;
    isGuestFavourite: boolean;
    price: number; // per stay, in the listed currency
    currency: string; // "₹"
    nights: number;
    checkIn: string; // ISO date
    checkOut: string; // ISO date
    guestsSelected: number;
    freeCancellationDate: string;
    host: Host;
    images: ListingImage[];
    highlights: Highlight[];
    description: string;
};