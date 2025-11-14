import { SVGProps } from "react"

export interface projectListing {
  id: number
  name: string
  minPrice: number
  maxPrice: number
  typologies: string[]
  minSaleableArea: number
  maxSaleableArea: number
  micromarket: string
  possessionDate: string
  propscore: number
  city: string
  slug: string
  image: string
  isWishlisted?: boolean
  type: "Apartment" | "Villa" | "Plot" | "Row House"
  projectStatus: string
  alt: string
  latitude: number
  longitude: number
  developerId: number
  developerName: string
  landArea: number
  popularity: string
}

export type PropertyListingType = { 
    projects: projectListing[];
    developers?: [],
    micromarkets?: [],
    currentPage?: number,
    eoiProjects?: [],
    totalPages?: number,
    totalProjects?: number,
}

export interface LocationType {
  name: string
  lat: number
  lon: number
  distance: number
  duration: number
  googlePlaceId?: string
}

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number
}