'use client'
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useState, useEffect } from "react";

type Props = {
    rowCount:number;
    pageNum:number;
    setRowCount:(value: number) => void;
    setPageNum:(value: number) => void;
    totalCount: number;
}
function Pagination({rowCount, pageNum, setPageNum,totalCount}: Props) {
    const totalPageCount = Math.ceil(totalCount/rowCount);
    const searchParams = useSearchParams()
    const router = useRouter();
    const currentPageParam = searchParams.get('currentPage'); 
    const currentPage = currentPageParam ? Number(currentPageParam) : 1;
    const [inputValue,setInputValue] = useState<string>(pageNum.toString());
    
    // Sync inputValue with pageNum prop when it changes (e.g., when filters reset page to 1)
    useEffect(() => {
        setInputValue(pageNum.toString());
    }, [pageNum]);

    const handlePageNumUpdate = (newPage:number) => {
        const page = Math.min(Math.max(newPage, 1), totalPageCount);
        const params = new URLSearchParams(searchParams.toString());
        params.set("currentPage", page.toString());
        router.push("?" + params.toString());
        setInputValue(page.toString())
        setPageNum(page);
    }
    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        // const num = Number(e.target.value)
        // const clamped=Math.min(Math.max(num, 1), totalPageCount);
        setInputValue(e.target.value.toString());
    };

    const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>)=>{
        if(e.key!=='Enter') return 
        const num = Number(inputValue);
        
        // CASE 1: empty input, output = currentPage
        if (inputValue.trim() === "" || isNaN(num)) {
            setInputValue(pageNum.toString());
            return;
        }
        
        // Clamp the number (handles number < 1 & number > total pages)
        const clamped = Math.min(Math.max(num, 1), totalPageCount);
        setInputValue(clamped.toString())
        handlePageNumUpdate(clamped);
        
    }
    if(totalPageCount === 0) return <div className="w-full border border-primary text-center rounded-md py-6 bg-primary/30">No Match found</div>

    return (
        <div className="flex justify-center items-center gap-2">
                <button className="text-[10px] border py-1 px-2 border-accent text-normal cursor-pointer disabled:pointer-events-none disabled:cursor-default hover:bg-accent rounded-sm " disabled={Number(inputValue)==1} onClick={()=>handlePageNumUpdate(pageNum-1)}>
                    Prev
                    {/* <UpChevronIcon className="-rotate-90" width={24} height={24} onClick={()=>handlePageNumUpdate(pageNum-1)}/> */}
                </button>
            
            <div className="flex gap-1 items-center">
                <input type="text" name='pageNum' value={inputValue} className="w-[30px] rounded-sm bg-primary text-white text-center text-sm" onChange={onInputChange} onKeyDown={handleKeyDown} />
                <span className="text-sm text-normal">of</span>
                <span className="text-sm text-normal">{totalPageCount}</span>
            </div>

            
                <button className="text-[10px] border py-1 px-2 border-accent text-normal cursor-pointer disabled:pointer-events-none disabled:cursor-default hover:bg-accent rounded-sm" disabled={Number(inputValue)==totalPageCount} onClick={()=>handlePageNumUpdate(pageNum+1)}>
                    Next
                    {/* <UpChevronIcon className="rotate-90 " width={24} height={24} onClick={()=>handlePageNumUpdate(pageNum+1)} /> */}
                </button>
            
        </div>
    );
}

export default Pagination;