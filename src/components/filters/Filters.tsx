import { FiltersType } from "@/hooks/useURLFilters";
import { Input } from "../ui/input";
import BudgetRangeSlider from "./BudgetRangeSlider";
import TypeCheckbox from "./TypeCheckbox";

type FiltersProps = {
    filters: FiltersType;
    updateFilter: <K extends keyof FiltersType>(key: K, value: FiltersType[K]) => void;
    resetFilters: () => void;
  };


function Filters({filters, updateFilter, resetFilters} : FiltersProps) { 
    return (
        <div className="w-full p-4">
            <div className="flex items-center justify-between pb-4 border-b-2 border-accent">
                <h3 className="font-semibold ">Filters</h3>
                <button type="reset" onClick={resetFilters} className="text-primary text-xs cursor-pointer hover:underline">Reset</button>
            </div>

            <div className="flex flex-col gap-4 py-6 border-b-2 border-accent">
                <span className="text-sm font-semibold">Budget</span>
                <BudgetRangeSlider value={filters.budget} onChange={(value) => updateFilter("budget", value)} />
            </div>
            <div className="flex flex-col gap-4 py-6 border-b-2 border-accent">
                <span className="text-sm font-semibold">Type</span>
                <TypeCheckbox value={filters.type} onChange={(value) => updateFilter('type', value)} />
            </div>
            <div className="flex flex-col gap-4 py-6 ">
                <span className="text-sm font-semibold">Min Plot Area</span>
                <Input 
                    type="text" 
                    id="plotArea" 
                    placeholder="Plot Area (in sqft)" 
                    className="cursor-pointer" 
                    onChange={(e) => updateFilter('minArea', e.target.value)} 
                />
            </div>
            
        </div>
    );
}

export default Filters;