"use client"
import { Slider } from "@/components/ui/slider"
import { formatPrice } from "@/utils/helpers"
import { useState } from "react"

interface BudgetRangeSliderProps {
    value: number[];                // <-- controlled value
    onChange: (val: number[]) => void;
}

export default function BudgetRangeSlider({ value,onChange }: BudgetRangeSliderProps) {
    //   const [value, setValue] = useState([5000000, 100000000])
    const safeValue = value && value.length === 2
        ? value
        : [5000000, 100000000];
    const handleValueChange = (newValue: number[]) => {
        onChange(newValue);

        // setValue(newValue)
        // setFilters(newValue)
    }
  
  return (
    <div className="w-full space-y-3">
      <Slider
        value={safeValue}
        onValueChange={handleValueChange}
        min={5000000}
        max={100000000}
        step={2500000}
      />
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>Min: {formatPrice(safeValue[0],false)}</span>
        <span>Max: {formatPrice(safeValue[1],false)}</span>
      </div>
    </div>
  )
}