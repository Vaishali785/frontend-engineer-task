import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

const types = [
    { id: "1", label: "Studio" },
    { id: "2", label: "1BHK" },
    { id: "3", label: "1.5BHK" },
    { id: "4", label: "2BHK" },
    { id: "5", label: "2.5BHK" },
    { id: "6", label: "3BHK" },
    { id: "7", label: "3.5BHK" },
    { id: "8", label: "4BHK" },
    { id: "9", label: "4.5BHK" },
    { id: "10", label: "5BHK" },
  ]
  
  type TypeCheckboxProps = {
    value: string[];
    onChange: (val: string[]) => void;
  };

function TypeCheckbox({value,onChange}: TypeCheckboxProps) {
    const selectedValues = Array.isArray(value) ? value : [];

    const toggleValue = (label: string) => {
      let updated: string[];
  
      if (selectedValues.includes(label)) {
        // remove
        updated = selectedValues.filter((v) => v !== label);
      } else {
        // add
        updated = [...selectedValues, label];
      }
  
      onChange(updated); // send updated selection to parent
    };
    return (
        <>
                {types.map(type=>(
                    <div className="flex gap-2 items-center" key={type.label}>
                        
                        <Checkbox
                            id={`checkbox-${type.id}`}
                            checked={selectedValues.includes(type.label)}
                            onCheckedChange={() => toggleValue(type.label)}
                            className="data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-white dark:data-[state=checked]:border-primary dark:data-[state=checked]:bg-primary"
                        />
                        <Label
                            htmlFor={`checkbox-${type.id}`}
                            className="text-sm leading-none font-medium cursor-pointer"
                        >
                            {type.label}
                        </Label>
                        {/* <span className="text-sm leading-none font-medium">
                            {type.label}
                        </span>  */}
                    </div>
                ))}
        </>
    );
}

export default TypeCheckbox;