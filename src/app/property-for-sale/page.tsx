'use client'
import Filters from "@/components/filters/Filters";
import ListViewListing from "@/components/listing/ListViewListing";
import Navbar from "@/components/common/Navbar";
import Pagination from "@/components/common/Pagination";
import usePropertyFilters from "@/hooks/usePropertyFilters";
import {  useSearchParams } from "next/navigation";
import {  useState, useEffect } from "react";

function PropertyForSaleListView() {
    const {
        filters,
        updateFilter,
        resetFilters,
        showDataList,
        totalCount,
        pageNum,
        setPageNum,
        rowCount,
        setRowCount,
    } = usePropertyFilters();

    const [showMobileFilters, setShowMobileFilters] = useState(false)
    
    // Restore page number from URL on first load
    const searchParams = useSearchParams();
    useEffect(() => {
        const urlPage = Number(searchParams.get("currentPage"));

        // Only restore if valid
        if (!isNaN(urlPage) && urlPage > 0 && urlPage !== pageNum) {
            setPageNum(urlPage);
        }
    }, [searchParams]);
    return (
        <section className="">
            {/* Copied from Propsoch website DOM */}
            <Navbar setShowMobileFilters={setShowMobileFilters} />
            
            <div className="p-4 md:p-10 lg:p-14 pt-10">
                <h1 className="text-black font-semibold text-2xl">Property for Sale in Bengaluru</h1>
                <p className="text-sm text-normal">Browse real estate for sale in Bengaluru. Properties including flats, villas, and plots from trusted builders. Whether you&apos;re looking for luxurious or budget-friendly property in Bengaluru, Propsoch offers a wide range of options to suit every need.</p>
            

                <div className=" flex gap-6 mt-6">
                    <div className={`${showMobileFilters ? 'max-lg:w-full max-lg:fixed max-lg:top-12 max-lg:left-0 max-lg:z-20 max-lg:bg-white h-full overflow-scroll pb-14' : 'max-lg:hidden'} w-1/5 h-fit border sticky top-16  border-foreground rounded-md`}>
                        <Filters  filters={filters} updateFilter={updateFilter} resetFilters={resetFilters}/>
                    </div>
                    <div className="flex-1">
                        {showDataList.map(property=>(
                            <ListViewListing property={property} key={property.id} rowCount={rowCount} pageNum={pageNum} totalCount={totalCount}/>
                        ))}
                        <Pagination rowCount={rowCount} setRowCount={setRowCount} pageNum={pageNum} setPageNum={setPageNum} totalCount={totalCount} />
                    </div>
                    <div className="max-lg:hidden w-1/5 h-screen border border-foreground rounded-md sticky top-16 flex flex-col gap-4 justify-center items-center">
                        <p>Ads</p>
                        <p>Map Display</p>
                        <p>Remove</p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default PropertyForSaleListView;
