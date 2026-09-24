import { ListingClientRoot } from "@/components/listing/ListingClientRoot";
import { listing } from "@/lib/data/listing";

export default function Home() {
  return (
    <ListingClientRoot listing={listing} />
  );
}
