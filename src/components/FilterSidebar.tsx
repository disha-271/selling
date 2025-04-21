import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FilterIcon, XIcon } from "lucide-react";

interface FilterSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
  onApplyFilters?: (filters: FilterState) => void;
}

interface FilterState {
  priceRange: [number, number];
  condition: string[];
  datePosted: string;
  categories: string[];
}

const FilterSidebar = ({
  isOpen = true,
  onClose = () => {},
  onApplyFilters = () => {},
}: FilterSidebarProps) => {
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [0, 1000],
    condition: [],
    datePosted: "any",
    categories: [],
  });

  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const handlePriceChange = (value: number[]) => {
    setFilters({
      ...filters,
      priceRange: [value[0], value[1] || filters.priceRange[1]],
    });
  };

  const handleConditionChange = (condition: string, checked: boolean) => {
    if (checked) {
      setFilters({
        ...filters,
        condition: [...filters.condition, condition],
      });
    } else {
      setFilters({
        ...filters,
        condition: filters.condition.filter((c) => c !== condition),
      });
    }
  };

  const handleDatePostedChange = (value: string) => {
    setFilters({
      ...filters,
      datePosted: value,
    });
  };

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setFilters({
        ...filters,
        categories: [...filters.categories, category],
      });
    } else {
      setFilters({
        ...filters,
        categories: filters.categories.filter((c) => c !== category),
      });
    }
  };

  const handleApplyFilters = () => {
    onApplyFilters(filters);
    setIsMobileFilterOpen(false);
  };

  const handleResetFilters = () => {
    setFilters({
      priceRange: [0, 1000],
      condition: [],
      datePosted: "any",
      categories: [],
    });
  };

  const filterContent = (
    <div className="flex flex-col space-y-6 p-4 bg-white dark:bg-gray-900">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Filters</h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="md:hidden"
        >
          <XIcon className="h-5 w-5" />
        </Button>
      </div>

      <Separator />

      {/* Price Range */}
      <div className="space-y-4">
        <h3 className="font-medium">Price Range</h3>
        <Slider
          defaultValue={[filters.priceRange[0], filters.priceRange[1]]}
          max={1000}
          step={10}
          onValueChange={handlePriceChange}
          className="mt-2"
        />
        <div className="flex justify-between text-sm">
          <span>${filters.priceRange[0]}</span>
          <span>${filters.priceRange[1]}</span>
        </div>
      </div>

      <Separator />

      {/* Item Condition */}
      <div className="space-y-4">
        <h3 className="font-medium">Item Condition</h3>
        <div className="space-y-2">
          {["New", "Like New", "Good", "Fair", "Poor"].map((condition) => (
            <div key={condition} className="flex items-center space-x-2">
              <Checkbox
                id={`condition-${condition}`}
                checked={filters.condition.includes(condition)}
                onCheckedChange={(checked) =>
                  handleConditionChange(condition, checked === true)
                }
              />
              <Label htmlFor={`condition-${condition}`}>{condition}</Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Date Posted */}
      <div className="space-y-4">
        <h3 className="font-medium">Date Posted</h3>
        <Select
          value={filters.datePosted}
          onValueChange={handleDatePostedChange}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select timeframe" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any time</SelectItem>
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="week">This week</SelectItem>
            <SelectItem value="month">This month</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Separator />

      {/* Categories */}
      <div className="space-y-4">
        <h3 className="font-medium">Categories</h3>
        <div className="space-y-2">
          {[
            "Electronics",
            "Furniture",
            "Clothing",
            "Vehicles",
            "Real Estate",
            "Books",
            "Sports",
            "Toys",
          ].map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={`category-${category}`}
                checked={filters.categories.includes(category)}
                onCheckedChange={(checked) =>
                  handleCategoryChange(category, checked === true)
                }
              />
              <Label htmlFor={`category-${category}`}>{category}</Label>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col space-y-2 pt-4">
        <Button onClick={handleApplyFilters} className="w-full">
          Apply Filters
        </Button>
        <Button
          variant="outline"
          onClick={handleResetFilters}
          className="w-full"
        >
          Reset
        </Button>
      </div>
    </div>
  );

  // Desktop view
  const desktopFilter = isOpen && (
    <aside className="hidden md:block w-full max-w-[300px] h-full overflow-y-auto border-r">
      {filterContent}
    </aside>
  );

  // Mobile view
  const mobileFilter = (
    <Sheet open={isMobileFilterOpen} onOpenChange={setIsMobileFilterOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="md:hidden fixed bottom-20 right-4 z-10 rounded-full p-3"
        >
          <FilterIcon className="h-5 w-5" />
          <span className="sr-only">Open filters</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[350px] p-0">
        {filterContent}
      </SheetContent>
    </Sheet>
  );

  return (
    <>
      {desktopFilter}
      {mobileFilter}
    </>
  );
};

export default FilterSidebar;
