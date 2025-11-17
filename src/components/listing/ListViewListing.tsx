import { BudgetIcon } from "@/assets/budget-icon";
import { HouseIcon } from "@/assets/house-icon";
import { LocationIcon } from "@/assets/location-icon";
import {  ShortlistIcon,  UpChevronIcon } from "@/assets/utility";
import { projectListing } from "@/types/types";
import { cn, formatPrice, para } from "@/utils/helpers";
import Image from "next/image";

type Props = {
    property: projectListing;
    rowCount: number;
    pageNum: number;
    totalCount: number
}

function ListViewListing({property} : Props) {
    return (
        <div className="border border-foreground rounded-md p-4 mb-4 pb-2.5 hover:shadow hover:cursor-pointer">
            <div key={property.id} className="flex max-sm:flex-col mb-4 gap-4 overflow-hidden w-full">
                <Image src={property.image} width='150' height='100' className="max-sm:w-full max-sm:h-[250px]  w-[150px] h-[100px] rounded-md" alt={property.name}/>
                <div className="flex-1">
                    {/* <div className=" flex flex-col  gap-4 pr-4"> */}
                        <div className="flex flex-col gap-1 w-full mb-4">
                            <div className="flex justify-between">
                                <h3  className={cn(
                                    para({ size: "lg", color: "dark" }),
                                    "font-semibold"
                                )}>{property.name}</h3>
                                <ShortlistIcon size={20} color="#FF6D33" className="hover:scale-105" />

                            </div>
                            <div className="text-xs text-black ">
                                <span className="opacity-75">by {property.developerName}</span>
                                    
                            </div>
                        </div> 

                    <div className="flex gap-4 justify-between">
                        

                        <div className="flex flex-col justify-between  gap-1">
                            <div className="flex gap-1">
                                <LocationIcon width={14} height={14} color="#FF6D33"/>
                                <span className="text-[10px] text-primary">Location</span>
                            </div>
                            <span className="text-xs text-black ml-1">{property.micromarket}</span>
                        </div>
                        <div className="flex flex-col justify-between  gap-1">
                        <div className="flex gap-1">
                            <HouseIcon width={14} height={14} color="#FF6D33"/>
                            <span className="text-[10px] text-primary">Type</span>
                        </div>
                            <span className="text-xs text-black  ml-1">{Array.isArray(property.typologies) ? property.typologies.join(', ') : property.typologies}</span>
                        </div>
                        <div className="flex flex-col justify-between  gap-1">
                            <div className="flex gap-1">
                                <div className="flex gap-1">
                                    <UpChevronIcon width={14} height={14} color="#FF6D33"/>
                                    <span className="text-[10px] text-primary">Min. Floor Area</span>
                                </div>
                            </div>
                            <span className="text-xs text-black ml-1">{property.minSaleableArea + ' sqft'}</span>
                        </div>

                    </div>
                </div>
            </div>
            <div className="flex justify-between border-t border-foreground pt-2 items-center">
                <span className="text-xs text-black">Starting Price</span>
                <div className="text-sm text-primary flex">
                    <BudgetIcon width={20}height={20} color="#FF6D33"/>
                    <span className="font-semibold">
                        {formatPrice(property.minPrice,true)}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ListViewListing;