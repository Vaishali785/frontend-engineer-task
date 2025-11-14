"use client";

import dynamic from "next/dynamic";
import { PropertyListingType } from "@/types/types";

// To avoid "window is not defined" errors , SSR needs to be disabled, and then to run this component on browswer it should be a client component.
const DiscoveryMap = dynamic(() => import("@/components/discovery-map"), {
  ssr: false,
});

interface DiscoveryMapWrapperProps {
  allFilteredData: PropertyListingType;
}

export default function DiscoveryMapWrapper({
  allFilteredData,
}: DiscoveryMapWrapperProps) {
  return <DiscoveryMap allFilteredData={allFilteredData} />;
}

