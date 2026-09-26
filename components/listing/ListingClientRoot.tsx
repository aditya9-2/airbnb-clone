"use client";

import { useState } from "react";
import Image from "next/image";
import { Share, Heart, LayoutGrid } from "lucide-react";
import { ListingNavbar } from "@/components/layout/ListingNavbar";
import { PromoBanner } from "@/components/listing/PromoBanner";
import { BookingCard } from "@/components/listing/BookingCard";
import { GuestFavouriteBadge } from "@/components/icons/GuestFavouriteBadge";
import { HostProfile } from "@/components/listing/HostProfile";
import { ListingHighlights } from "@/components/listing/ListingDetails";
import { ListingDescription } from "@/components/listing/ListingDescription";
import { WhereYouWillSleep } from "@/components/icons/WhereYouWillSleep";
import { useToast } from "@/hooks/useToast";
import type { Listing } from "@/types/listing";
import { AmenitiesSection } from "./AmenitiesSection";
import { StaticBookingCalendar } from "./StaticBookingCalendar";
import { ReviewsSection } from "./reviews/ReviewsSection";
import { LocationSection } from "./LocationSection";
import { MeetYourHostSection } from "./host/MeetYourHostSection";
import { ThingsToKnowSection } from "./host/ThingsToKnowSection";
import { NearbyStaysCarousel } from "./NearbyStaysCarousel";

export function ListingClientRoot({ listing }: { listing: Listing }) {
    const [isSaved, setIsSaved] = useState(false);
    const { showToast, ToastComponent } = useToast();

    function formatDate(isoString: string) {
        const date = new Date(isoString);
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    }

    function handleReserve() {
        showToast("You won't be charged yet", 2500);
    }

    function handleShare() {
        showToast("Share options");
    }

    function handleSave() {
        const newState = !isSaved;
        setIsSaved(newState);
        showToast(newState ? "Saved to wishlist" : "Removed from wishlist");
    }

    return (
        <main>
            <ListingNavbar
                price={`₹${listing.price.toLocaleString("en-IN")}`}
                nights={listing.nights}
                rating={listing.rating}
                reviewCount={listing.reviewCount}
                onReserve={() => document.getElementById("booking-card")?.scrollIntoView({ behavior: "smooth" })}
            />

            <div className="mx-auto max-w-300 px-10 py-6">

                {/* Title & Actions Header */}
                <div className="mb-6 flex items-end justify-between gap-6">
                    <h1 className="text-[26px] font-bold leading-8 text-[#222222]">
                        {listing.title}
                    </h1>

                    <div className="flex shrink-0 items-center gap-4 text-sm font-semibold text-[#222222] underline">
                        <button
                            type="button"
                            onClick={handleShare}
                            className="flex cursor-pointer items-center gap-2 rounded-lg p-2 transition hover:bg-neutral-100"
                        >
                            <Share size={16} strokeWidth={2.5} />
                            Share
                        </button>
                        <button
                            type="button"
                            onClick={handleSave}
                            className="flex cursor-pointer items-center gap-2 rounded-lg p-2 transition hover:bg-neutral-100"
                        >
                            <Heart
                                size={16}
                                strokeWidth={isSaved ? 0 : 2.5}
                                fill={isSaved ? "#FF385C" : "none"}
                                className={isSaved ? "text-[#FF385C]" : "text-[#222222]"}
                            />
                            {isSaved ? "Saved" : "Save"}
                        </button>
                    </div>
                </div>

                {/* Photo Gallery Grid */}
                <div id="photo-gallery" className="relative mb-12 grid h-115 grid-cols-4 grid-rows-2 gap-2 overflow-hidden rounded-xl">
                    <div className="group relative col-span-2 row-span-2 h-full w-full cursor-pointer">
                        <Image src={listing.images[0]?.url || ""} alt={listing.images[0]?.alt || ""} fill className="object-cover transition duration-300 group-hover:brightness-90" priority />
                    </div>
                    <div className="group relative h-full w-full cursor-pointer">
                        <Image src={listing.images[1]?.url || ""} alt={listing.images[1]?.alt || ""} fill className="object-cover transition duration-300 group-hover:brightness-90" />
                    </div>
                    <div className="group relative h-full w-full cursor-pointer">
                        <Image src={listing.images[2]?.url || ""} alt={listing.images[2]?.alt || ""} fill className="object-cover transition duration-300 group-hover:brightness-90" />
                    </div>
                    <div className="group relative h-full w-full cursor-pointer">
                        <Image src={listing.images[3]?.url || ""} alt={listing.images[3]?.alt || ""} fill className="object-cover transition duration-300 group-hover:brightness-90" />
                    </div>
                    <div className="group relative h-full w-full cursor-pointer">
                        <Image src={listing.images[4]?.url || ""} alt={listing.images[4]?.alt || ""} fill className="object-cover transition duration-300 group-hover:brightness-90" />
                    </div>
                    <button
                        type="button"
                        onClick={() => console.log("Open gallery modal")}
                        className="absolute bottom-6 right-6 z-10 flex cursor-pointer items-center gap-2 rounded-lg border border-black bg-white px-4 py-1.5 text-sm font-semibold text-[#222222] shadow-md transition hover:bg-neutral-100"
                    >
                        <LayoutGrid size={16} strokeWidth={2} />
                        Show all photos
                    </button>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-5 gap-20">

                    {/* Left Column (Details) */}
                    <div className="col-span-3">
                        <div className="mb-6 flex flex-col gap-1">
                            <h2 className="text-[22px] font-normal text-[#222222]">
                                {listing.propertyType}
                            </h2>
                            <ol className="flex flex-wrap items-center gap-1 text-[16px] font-normal text-[#222222]">
                                <li>{listing.guests} guests</li>
                                <li><span>·</span></li>
                                <li>{listing.bedrooms} bedroom{listing.bedrooms > 1 ? 's' : ''}</li>
                                <li><span>·</span></li>
                                <li>{listing.beds} bed{listing.beds > 1 ? 's' : ''}</li>
                                <li><span>·</span></li>
                                <li>{listing.bathrooms} bathroom{listing.bathrooms > 1 ? 's' : ''}</li>
                            </ol>
                        </div>

                        <GuestFavouriteBadge rating={listing.rating} reviews={listing.reviewCount} />

                        <div className="border-b border-neutral-200">
                            <HostProfile host={listing.host} />
                        </div>

                        <div className="border-b border-neutral-200">
                            <ListingHighlights highlights={listing.highlights} />
                        </div>

                        {/* Text Description Component */}
                        <div className="border-b border-neutral-200">
                            <ListingDescription text={listing.description} />
                        </div>

                        {/* Rooms Component */}
                        <div className="border-b border-neutral-200">
                            <WhereYouWillSleep />
                        </div>

                        {/* Amenities Component */}
                        <div className="border-b border-neutral-200">
                            <AmenitiesSection />
                        </div>

                        {/* Calendar component */}
                        <StaticBookingCalendar />
                    </div>

                    {/* Right Column (Promo + Booking Card) */}
                    <div className="col-span-2 relative">
                        <div className="sticky top-32 flex flex-col gap-6" id="booking-card">
                            <PromoBanner />
                            <BookingCard
                                price={`₹${listing.price.toLocaleString("en-IN")}`}
                                nights={listing.nights}
                                checkIn={formatDate(listing.checkIn)}
                                checkOut={formatDate(listing.checkOut)}
                                guests={listing.guestsSelected}
                                onReserve={handleReserve}
                            />
                        </div>
                    </div>
                </div>
                {/* Reviews Component */}
                <ReviewsSection rating={listing.rating} reviewCount={listing.reviewCount} />

                {/* Location Component */}
                <LocationSection
                    fullLocation={listing.fullLocation}
                    neighbourhoodHighlights={listing.neighbourhoodHighlights}
                />

                {/* Meet Your Host Component */}
                <MeetYourHostSection host={listing.host} coHosts={listing.coHosts} />

                {/* Things to Know Component */}
                <ThingsToKnowSection thingsToKnow={listing.thingsToKnow} />

                {/* Nearby Stays Component */}
                <NearbyStaysCarousel />

            </div>

            {ToastComponent}
        </main>
    );
}