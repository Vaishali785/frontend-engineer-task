import DiscoveryMapWrapper from "@/components/discovery-map-wrapper";
import { PropertyListing } from "@/data/property-listing";
import { PropertyListingType } from "@/types/types";

// TODO (done) : Add meta data for this page
// Page should serve via SSR
// Do not add "use client" declarative
export const metadata = {
    title: "Property for Sale in Bengaluru | Propsoch",
    description: "Find property for sale in Bengaluru. Explore verified listings, photos, prices, and amenities. Shortlist and contact sellers on Propsoch.",
    openGraph: {
      title: "Propsoch - Bangalore - Real Estate - Search/Buy/Sell Properties",
      description: "Buy your dream home confidently with Propsoch - Bangalore's smartest real estate service for home buyers to get expert advice, property insights & reports.",
      url: "https://www.propsoch.com",
      siteName: "Propsoch",
      images: [
        {
          url: "https://d1zk2x7mtoyb2b.cloudfront.net/websiteAssets/OG-Image.png",
          width: 1200,
          height: 630,
        },
      ],
      type: "website",
    }
  };
  


// TODO (done): Create a List view for these properties.
// Use your own imagination while designing, please don't copy Propsoch's current UI.
// We don't like it either.
// Add pagination
// You can modify the Property Listing however you want. If you feel like creating an API and implementing pagination via that, totally your call.

export default async function Page() {
  return (
    <div className="w-screen h-screen">
      <DiscoveryMapWrapper allFilteredData={PropertyListing as PropertyListingType} />
    </div>
  );
}
