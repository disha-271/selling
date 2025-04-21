import React, { useState } from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import ListingGrid from "./ListingGrid";
import FilterSidebar from "./FilterSidebar";
import { Button } from "./ui/button";
import { Menu, X, Bell, MessageSquare, User, Plus } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const HomePage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock state for authentication
  const [searchQuery, setSearchQuery] = useState("");
  const [searchLocation, setSearchLocation] = useState("All Locations");
  const [filteredListings, setFilteredListings] = useState<any[]>([]);
  const [isSearchActive, setIsSearchActive] = useState(false);

  // Mock categories for quick navigation
  const categories = [
    { id: 1, name: "Electronics", icon: "📱" },
    { id: 2, name: "Vehicles", icon: "🚗" },
    { id: 3, name: "Furniture", icon: "🛋️" },
    { id: 4, name: "Real Estate", icon: "🏠" },
    { id: 5, name: "Fashion", icon: "👕" },
    { id: 6, name: "Books", icon: "📚" },
    { id: 7, name: "Sports", icon: "⚽" },
    { id: 8, name: "Toys", icon: "🧸" },
  ];

  // Mock featured listings
  const featuredListings = [
    {
      id: "1",
      title: "iPhone 13 Pro - Excellent Condition",
      price: 699,
      location: "New York, NY",
      imageUrl:
        "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=800&q=80",
      postedDate: "2 days ago",
      condition: "Like New",
      category: "Electronics",
    },
    {
      id: "2",
      title: "Vintage Leather Sofa",
      price: 450,
      location: "Brooklyn, NY",
      imageUrl:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
      postedDate: "1 day ago",
      condition: "Good",
      category: "Furniture",
    },
    {
      id: "3",
      title: "Mountain Bike - Trek",
      price: 350,
      location: "Queens, NY",
      imageUrl:
        "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&q=80",
      postedDate: "3 days ago",
      condition: "Good",
      category: "Sports",
    },
    {
      id: "4",
      title: "Sony PlayStation 5",
      price: 450,
      location: "Manhattan, NY",
      imageUrl:
        "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&q=80",
      postedDate: "5 hours ago",
      condition: "Like New",
      category: "Electronics",
    },
    {
      id: "5",
      title: "Wooden Dining Table with 4 Chairs",
      price: 280,
      location: "Bronx, NY",
      imageUrl:
        "https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=800&q=80",
      postedDate: "1 week ago",
      condition: "Fair",
      category: "Furniture",
    },
    {
      id: "6",
      title: 'MacBook Pro 16" 2021',
      price: 1200,
      location: "Staten Island, NY",
      imageUrl:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80",
      postedDate: "2 days ago",
      condition: "Like New",
      category: "Electronics",
    },
    {
      id: "7",
      title: "Canon EOS R5 Camera",
      price: 2800,
      location: "New York, NY",
      imageUrl:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80",
      postedDate: "3 days ago",
      condition: "Like New",
      category: "Electronics",
    },
    {
      id: "8",
      title: "Vintage Record Player",
      price: 120,
      location: "Brooklyn, NY",
      imageUrl:
        "https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?w=800&q=80",
      postedDate: "1 week ago",
      condition: "Good",
      category: "Electronics",
    },
  ];

  // Mock trending listings
  const trendingListings = [
    {
      id: "9",
      title: "Electric Scooter - Xiaomi",
      price: 320,
      location: "Manhattan, NY",
      imageUrl:
        "https://images.unsplash.com/photo-1604868189265-219ba7ffc595?w=800&q=80",
      postedDate: "1 day ago",
      condition: "Good",
      category: "Vehicles",
    },
    {
      id: "10",
      title: "Designer Handbag - Louis Vuitton",
      price: 890,
      location: "New York, NY",
      imageUrl:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80",
      postedDate: "2 days ago",
      condition: "Like New",
      category: "Fashion",
    },
    {
      id: "11",
      title: "Nintendo Switch with Games",
      price: 250,
      location: "Queens, NY",
      imageUrl:
        "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=800&q=80",
      postedDate: "3 hours ago",
      condition: "Good",
      category: "Electronics",
    },
    {
      id: "12",
      title: "Acoustic Guitar - Taylor",
      price: 550,
      location: "Brooklyn, NY",
      imageUrl:
        "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?w=800&q=80",
      postedDate: "4 days ago",
      condition: "Good",
      category: "Music",
    },
  ];

  // All listings combined for search
  const allListings = [...featuredListings, ...trendingListings];

  // Handle search from hero section
  const handleSearch = (query: string, location: string) => {
    setSearchQuery(query);
    setSearchLocation(location);

    // Filter listings based on search query and location
    const filtered = allListings.filter((item) => {
      const matchesQuery =
        query === "" ||
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase());

      const matchesLocation =
        location === "All Locations" || item.location.includes(location);

      return matchesQuery && matchesLocation;
    });

    setFilteredListings(filtered);
    setIsSearchActive(true);
  };

  // Handle filter application
  const handleApplyFilters = (filters: any) => {
    // Start with current search results or all listings if no search
    const baseListings = isSearchActive ? filteredListings : allListings;

    const filtered = baseListings.filter((item) => {
      // Filter by price range
      const priceInRange =
        item.price >= filters.priceRange[0] &&
        item.price <= filters.priceRange[1];

      // Filter by condition
      const conditionMatches =
        filters.condition.length === 0 ||
        filters.condition.includes(item.condition);

      // Filter by category
      const categoryMatches =
        filters.categories.length === 0 ||
        filters.categories.includes(item.category);

      return priceInRange && conditionMatches && categoryMatches;
    });

    setFilteredListings(filtered);
    setIsSearchActive(true);
  };

  // Handle category click
  const handleCategoryClick = (categoryName: string) => {
    const filtered = allListings.filter(
      (item) => item.category.toLowerCase() === categoryName.toLowerCase(),
    );

    setFilteredListings(filtered);
    setIsSearchActive(true);
    setSearchQuery(categoryName);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <nav className="flex flex-col gap-4 mt-8">
                  <h2 className="text-lg font-semibold mb-2">Categories</h2>
                  {categories.map((category) => (
                    <a
                      key={category.id}
                      href={`/category/${category.name}`}
                      className="flex items-center gap-2 py-2 hover:text-primary"
                      onClick={(e) => {
                        e.preventDefault();
                        handleCategoryClick(category.name);
                      }}
                    >
                      <span className="text-xl">{category.icon}</span>
                      <span>{category.name}</span>
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <a href="/" className="flex items-center gap-2">
              <span className="font-bold text-xl">SecondHand</span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <Button variant="ghost" size="icon">
                  <Bell className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <MessageSquare className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Post Ad
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" onClick={() => setIsLoggedIn(true)}>
                  Login
                </Button>
                <Button onClick={() => setIsLoggedIn(true)}>Sign Up</Button>
              </>
            )}
          </div>
        </div>
      </header>

      <main className="container py-6">
        {/* Hero Section */}
        <HeroSection onSearch={handleSearch} />

        {/* Search Results */}
        {isSearchActive && (
          <section className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">
                {searchQuery ? `Results for "${searchQuery}"` : "All Listings"}
                {searchLocation !== "All Locations" && ` in ${searchLocation}`}
              </h2>
              <Button
                variant="outline"
                onClick={() => {
                  setIsSearchActive(false);
                  setSearchQuery("");
                  setSearchLocation("All Locations");
                }}
              >
                Clear Search
              </Button>
            </div>
            {filteredListings.length > 0 ? (
              <ListingGrid items={filteredListings} title="" subtitle="" />
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No results found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filters to find what you're
                  looking for.
                </p>
              </div>
            )}
          </section>
        )}

        {/* Quick Category Navigation - Only show if not searching */}
        {!isSearchActive && (
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Browse Categories</h2>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
              {categories.map((category) => (
                <motion.a
                  key={category.id}
                  href={`/category/${category.name}`}
                  className="flex flex-col items-center justify-center p-4 rounded-lg bg-card hover:bg-accent transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleCategoryClick(category.name);
                  }}
                >
                  <span className="text-3xl mb-2">{category.icon}</span>
                  <span className="text-sm text-center">{category.name}</span>
                </motion.a>
              ))}
            </div>
          </section>
        )}

        {/* Main Content - Only show if not searching */}
        {!isSearchActive && (
          <div className="mt-12 flex flex-col md:flex-row gap-6">
            {/* Filter Sidebar - Desktop */}
            <div className="hidden md:block w-full md:w-1/4 lg:w-1/5">
              <FilterSidebar onApplyFilters={handleApplyFilters} />
            </div>

            {/* Filter Sidebar - Mobile */}
            <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <FilterSidebar onApplyFilters={handleApplyFilters} />
              </SheetContent>
            </Sheet>

            {/* Listings */}
            <div className="w-full md:w-3/4 lg:w-4/5">
              {/* Mobile Filter Button */}
              <div className="md:hidden mb-4">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setIsFilterOpen(true)}
                >
                  Filters
                </Button>
              </div>

              {/* Featured Listings */}
              <section>
                <h2 className="text-2xl font-bold mb-4">Featured Listings</h2>
                <ListingGrid items={featuredListings} />
              </section>

              {/* Trending Listings */}
              <section className="mt-12">
                <h2 className="text-2xl font-bold mb-4">Trending Now</h2>
                <ListingGrid items={trendingListings} />
              </section>
            </div>
          </div>
        )}
      </main>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t py-2 px-4 z-40">
        <div className="flex justify-around items-center">
          <a
            href="/"
            className="flex flex-col items-center text-muted-foreground hover:text-primary"
          >
            <span className="text-xl">🏠</span>
            <span className="text-xs">Home</span>
          </a>
          <a
            href="/search"
            className="flex flex-col items-center text-muted-foreground hover:text-primary"
          >
            <span className="text-xl">🔍</span>
            <span className="text-xs">Search</span>
          </a>
          <Button className="rounded-full h-14 w-14 flex flex-col items-center justify-center">
            <Plus className="h-6 w-6" />
            <span className="text-xs mt-1">Sell</span>
          </Button>
          <a
            href="/messages"
            className="flex flex-col items-center text-muted-foreground hover:text-primary"
          >
            <span className="text-xl">💬</span>
            <span className="text-xs">Messages</span>
          </a>
          <a
            href="/account"
            className="flex flex-col items-center text-muted-foreground hover:text-primary"
          >
            <span className="text-xl">👤</span>
            <span className="text-xs">Account</span>
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-muted py-12 mt-16 border-t md:pb-6 pb-24">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">About</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/about"
                    className="text-muted-foreground hover:text-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "/about";
                    }}
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/careers"
                    className="text-muted-foreground hover:text-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "/about";
                    }}
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="/press"
                    className="text-muted-foreground hover:text-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "/about";
                    }}
                  >
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/help"
                    className="text-muted-foreground hover:text-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "/about";
                    }}
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="/safety"
                    className="text-muted-foreground hover:text-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "/about";
                    }}
                  >
                    Safety Center
                  </a>
                </li>
                <li>
                  <a
                    href="/guidelines"
                    className="text-muted-foreground hover:text-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "/about";
                    }}
                  >
                    Community Guidelines
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/terms"
                    className="text-muted-foreground hover:text-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "/about";
                    }}
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy"
                    className="text-muted-foreground hover:text-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "/about";
                    }}
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/cookies"
                    className="text-muted-foreground hover:text-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "/about";
                    }}
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Install App</h3>
              <div className="flex flex-col space-y-2">
                <a
                  href="/ios"
                  className="text-muted-foreground hover:text-primary"
                >
                  iOS App
                </a>
                <a
                  href="/android"
                  className="text-muted-foreground hover:text-primary"
                >
                  Android App
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t">
            <p className="text-center text-muted-foreground">
              &copy; {new Date().getFullYear()} SecondHand Marketplace. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
