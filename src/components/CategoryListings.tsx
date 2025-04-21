import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ListingGrid from "./ListingGrid";
import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

interface Item {
  id: string;
  title: string;
  price: number;
  location: string;
  postedDate: string;
  imageUrl: string;
  condition: "New" | "Like New" | "Good" | "Fair" | "Poor";
  category: string;
  isFeatured?: boolean;
  isSaved?: boolean;
}

// Mock data for different categories
const mockItemsByCategory: Record<string, Item[]> = {
  Electronics: [
    {
      id: "e1",
      title: "iPhone 13 Pro - Excellent Condition",
      price: 699,
      location: "New York, NY",
      postedDate: "2 days ago",
      imageUrl:
        "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=800&q=80",
      condition: "Good",
      category: "Electronics",
      isFeatured: true,
    },
    {
      id: "e2",
      title: 'MacBook Pro 16" 2021',
      price: 1200,
      location: "Staten Island, NY",
      postedDate: "2 days ago",
      imageUrl:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80",
      condition: "Like New",
      category: "Electronics",
    },
    {
      id: "e3",
      title: "Sony PlayStation 5",
      price: 450,
      location: "Manhattan, NY",
      postedDate: "5 hours ago",
      imageUrl:
        "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&q=80",
      condition: "Like New",
      category: "Electronics",
    },
    {
      id: "e4",
      title: "Canon EOS R5 Camera",
      price: 2800,
      location: "New York, NY",
      postedDate: "3 days ago",
      imageUrl:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80",
      condition: "Like New",
      category: "Electronics",
    },
  ],
  Vehicles: [
    {
      id: "v1",
      title: "2018 Tesla Model 3 - Low Mileage",
      price: 35000,
      location: "Brooklyn, NY",
      postedDate: "1 week ago",
      imageUrl:
        "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80",
      condition: "Good",
      category: "Vehicles",
    },
    {
      id: "v2",
      title: "Vespa Primavera 150cc Scooter",
      price: 3200,
      location: "Manhattan, NY",
      postedDate: "3 days ago",
      imageUrl:
        "https://images.unsplash.com/photo-1558981852-426c6c22a060?w=800&q=80",
      condition: "Good",
      category: "Vehicles",
    },
  ],
  Furniture: [
    {
      id: "f1",
      title: "Vintage Leather Sofa",
      price: 450,
      location: "Brooklyn, NY",
      postedDate: "1 day ago",
      imageUrl:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
      condition: "Good",
      category: "Furniture",
      isFeatured: true,
    },
    {
      id: "f2",
      title: "Wooden Dining Table with 4 Chairs",
      price: 280,
      location: "Bronx, NY",
      postedDate: "1 week ago",
      imageUrl:
        "https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=800&q=80",
      condition: "Fair",
      category: "Furniture",
    },
    {
      id: "f3",
      title: "Mid-Century Modern Bookshelf",
      price: 175,
      location: "Queens, NY",
      postedDate: "4 days ago",
      imageUrl:
        "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=800&q=80",
      condition: "Good",
      category: "Furniture",
    },
  ],
  "Real Estate": [
    {
      id: "r1",
      title: "Studio Apartment in Downtown",
      price: 1800,
      location: "Manhattan, NY",
      postedDate: "1 day ago",
      imageUrl:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
      condition: "Good",
      category: "Real Estate",
    },
  ],
  Fashion: [
    {
      id: "fa1",
      title: "Designer Handbag - Louis Vuitton",
      price: 890,
      location: "New York, NY",
      postedDate: "2 days ago",
      imageUrl:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80",
      condition: "Like New",
      category: "Fashion",
    },
    {
      id: "fa2",
      title: "Vintage Leather Jacket",
      price: 120,
      location: "Brooklyn, NY",
      postedDate: "5 days ago",
      imageUrl:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80",
      condition: "Good",
      category: "Fashion",
    },
  ],
  Books: [
    {
      id: "b1",
      title: "Vintage Book Collection",
      price: 95,
      location: "Brooklyn, NY",
      postedDate: "1 week ago",
      imageUrl:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80",
      condition: "Good",
      category: "Books",
    },
  ],
  Sports: [
    {
      id: "s1",
      title: "Mountain Bike - Trek",
      price: 350,
      location: "Queens, NY",
      postedDate: "3 days ago",
      imageUrl:
        "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&q=80",
      condition: "Good",
      category: "Sports",
    },
  ],
  Toys: [
    {
      id: "t1",
      title: "Vintage Record Player",
      price: 120,
      location: "Brooklyn, NY",
      postedDate: "1 week ago",
      imageUrl:
        "https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?w=800&q=80",
      condition: "Good",
      category: "Toys",
    },
  ],
};

const CategoryListings = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const navigate = useNavigate();
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    if (categoryName && mockItemsByCategory[categoryName]) {
      setItems(mockItemsByCategory[categoryName]);
    } else {
      setItems([]);
    }
  }, [categoryName]);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="container py-8">
      <div className="flex items-center mb-6">
        <Button variant="ghost" onClick={handleGoBack} className="mr-4">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back
        </Button>
        <h1 className="text-3xl font-bold">
          {categoryName || "Category"} Items
        </h1>
      </div>

      {items.length > 0 ? (
        <ListingGrid
          items={items.map((item) => ({
            id: item.id,
            title: item.title,
            price: item.price,
            location: item.location,
            postedDate: item.postedDate,
            imageUrl: item.imageUrl,
            condition: item.condition,
            isFeatured: item.isFeatured,
            isSaved: item.isSaved,
          }))}
          title={`${categoryName} Listings`}
          subtitle={`Browse all available ${categoryName?.toLowerCase()} items`}
        />
      ) : (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold mb-4">No items found</h2>
          <p className="text-muted-foreground">
            There are no items available in this category at the moment.
          </p>
        </div>
      )}
    </div>
  );
};

export default CategoryListings;
