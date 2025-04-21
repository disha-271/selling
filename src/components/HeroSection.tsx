import React, { useState } from "react";
import { Search, MapPin, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface HeroSectionProps {
  onSearch?: (query: string, location: string) => void;
  featuredCategories?: Array<{
    id: string;
    name: string;
    icon: string;
  }>;
}

const HeroSection = ({
  onSearch = () => {},
  featuredCategories = [
    { id: "1", name: "Electronics", icon: "📱" },
    { id: "2", name: "Vehicles", icon: "🚗" },
    { id: "3", name: "Furniture", icon: "🛋️" },
    { id: "4", name: "Real Estate", icon: "🏠" },
    { id: "5", name: "Fashion", icon: "👕" },
    { id: "6", name: "Books", icon: "📚" },
  ],
}: HeroSectionProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("All Locations");

  const handleSearch = () => {
    onSearch(searchQuery, location);
  };

  const handleCategoryClick = (categoryId: string) => {
    window.location.href = `/category/${categoryId}`;
  };

  return (
    <div className="relative w-full bg-background">
      {/* Hero Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=1200&q=80)",
          filter: "brightness(0.4)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Find Great Deals Near You
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-xl text-gray-200">
            Buy and sell second-hand items in your local community
          </p>

          {/* Search Bar */}
          <div className="mx-auto mt-10 max-w-3xl rounded-lg bg-white p-2 shadow-lg sm:flex">
            <div className="relative flex-grow">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                type="text"
                placeholder="What are you looking for?"
                className="w-full border-0 pl-10 focus-visible:ring-0 focus-visible:ring-offset-0"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="mt-3 sm:mt-0 sm:ml-3 sm:w-40">
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger className="border-0 focus:ring-0">
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4 text-gray-400" />
                    <SelectValue placeholder="All Locations" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All Locations">All Locations</SelectItem>
                  <SelectItem value="New York">New York</SelectItem>
                  <SelectItem value="Los Angeles">Los Angeles</SelectItem>
                  <SelectItem value="Chicago">Chicago</SelectItem>
                  <SelectItem value="Houston">Houston</SelectItem>
                  <SelectItem value="Phoenix">Phoenix</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              className="mt-3 w-full sm:mt-0 sm:ml-3 sm:w-auto"
              onClick={handleSearch}
            >
              Search
            </Button>
          </div>

          {/* Category Quick Links */}
          <div className="mt-10">
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
              {featuredCategories.map((category) => (
                <div
                  key={category.id}
                  className="flex cursor-pointer flex-col items-center rounded-lg bg-white/10 p-4 backdrop-blur-sm transition-all hover:bg-white/20"
                  onClick={() => handleCategoryClick(category.name)}
                >
                  <span className="text-3xl">{category.icon}</span>
                  <span className="mt-2 text-sm font-medium text-white">
                    {category.name}
                  </span>
                </div>
              ))}
            </div>

            <Button variant="link" className="mt-6 text-white">
              View all categories <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
