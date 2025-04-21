import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Heart,
  Share2,
  Flag,
  MapPin,
  Calendar,
  Tag,
  MessageSquare,
} from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Card, CardContent } from "./ui/card";

interface Item {
  id: string;
  title: string;
  price: number;
  location: string;
  postedDate: string;
  imageUrl: string;
  condition: "New" | "Like New" | "Good" | "Fair" | "Poor";
  category: string;
  description?: string;
  sellerName?: string;
  sellerRating?: number;
  sellerJoined?: string;
  sellerAvatar?: string;
  isFeatured?: boolean;
  isSaved?: boolean;
  additionalImages?: string[];
}

// Mock data for item details
const mockItems: Record<string, Item> = {
  "1": {
    id: "1",
    title: "Vintage Leather Sofa",
    price: 450,
    location: "Brooklyn, NY",
    postedDate: "1 day ago",
    imageUrl:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    condition: "Good",
    category: "Furniture",
    description:
      'Beautiful vintage leather sofa in excellent condition. This piece features genuine leather upholstery with minimal wear. The frame is solid hardwood and has been well-maintained. Perfect for a living room, office, or studio apartment. Dimensions: 72" width x 36" depth x 32" height. No pets, non-smoking home.',
    sellerName: "Alex Johnson",
    sellerRating: 4.8,
    sellerJoined: "March 2020",
    sellerAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    additionalImages: [
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80",
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&q=80",
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&q=80",
    ],
    isFeatured: true,
  },
  "2": {
    id: "2",
    title: "MacBook Pro 2021",
    price: 1200,
    location: "Manhattan, NY",
    postedDate: "2023-09-18",
    imageUrl:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80",
    condition: "Like New",
    category: "Electronics",
    description:
      "Apple MacBook Pro 2021 model with M1 Pro chip. 16GB RAM, 512GB SSD. Only used for a few months, in perfect condition with no scratches or dents. Comes with original charger and box. Battery health at 98%.",
    sellerName: "Jamie Smith",
    sellerRating: 4.9,
    sellerJoined: "January 2021",
    sellerAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jamie",
    additionalImages: [
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&q=80",
    ],
  },
  // Add more items as needed
};

// Add all items from CategoryListings mock data
import { useLocation } from "react-router-dom";

const ItemDetails = () => {
  const { itemId } = useParams<{ itemId: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const [item, setItem] = useState<Item | null>(null);
  const [isSaved, setIsSaved] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    // First check if the item exists in mockItems
    if (itemId && mockItems[itemId]) {
      const foundItem = mockItems[itemId];
      setItem(foundItem);
      setSelectedImage(foundItem.imageUrl);
      setIsSaved(foundItem.isSaved || false);
    } else {
      // Try to get the item from state if passed during navigation
      const stateItem = location.state?.item as Item;
      if (stateItem) {
        setItem(stateItem);
        setSelectedImage(stateItem.imageUrl);
        setIsSaved(stateItem.isSaved || false);
      } else {
        // Try to get the item from sessionStorage
        const storedItem = sessionStorage.getItem("selectedItem");
        if (storedItem) {
          try {
            const parsedItem = JSON.parse(storedItem) as Item;
            setItem(parsedItem);
            setSelectedImage(parsedItem.imageUrl);
            setIsSaved(parsedItem.isSaved || false);
            // Clear the sessionStorage after retrieving the item
            sessionStorage.removeItem("selectedItem");
          } catch (error) {
            console.error("Error parsing stored item:", error);
          }
        }
      }
    }
  }, [itemId, location.state]);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleSaveToggle = () => {
    setIsSaved(!isSaved);
  };

  const handleImageSelect = (image: string) => {
    setSelectedImage(image);
  };

  if (!item) {
    return (
      <div className="container py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Item not found</h2>
        <p className="text-muted-foreground mb-6">
          The item you're looking for doesn't exist or has been removed.
        </p>
        <Button onClick={handleGoBack}>Go Back</Button>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <Button variant="ghost" onClick={handleGoBack} className="mb-6">
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to listings
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div>
          <div className="rounded-lg overflow-hidden bg-muted mb-4 aspect-video">
            <img
              src={selectedImage || item.imageUrl}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>

          {item.additionalImages && item.additionalImages.length > 0 && (
            <div className="grid grid-cols-4 gap-2">
              <div
                className={`cursor-pointer rounded-md overflow-hidden ${selectedImage === item.imageUrl ? "ring-2 ring-primary" : ""}`}
                onClick={() => handleImageSelect(item.imageUrl)}
              >
                <img
                  src={item.imageUrl}
                  alt="Main"
                  className="w-full h-20 object-cover"
                />
              </div>

              {item.additionalImages.map((image, index) => (
                <div
                  key={index}
                  className={`cursor-pointer rounded-md overflow-hidden ${selectedImage === image ? "ring-2 ring-primary" : ""}`}
                  onClick={() => handleImageSelect(image)}
                >
                  <img
                    src={image}
                    alt={`Additional ${index + 1}`}
                    className="w-full h-20 object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Item Details */}
        <div>
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-3xl font-bold">{item.title}</h1>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={handleSaveToggle}
                className={isSaved ? "text-red-500" : ""}
              >
                <Heart className={`h-5 w-5 ${isSaved ? "fill-red-500" : ""}`} />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Flag className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <p className="text-3xl font-bold mb-4">${item.price.toFixed(2)}</p>

          <div className="flex flex-wrap gap-4 mb-6">
            <Badge variant="secondary" className="text-sm">
              <MapPin className="h-4 w-4 mr-1" />
              {item.location}
            </Badge>
            <Badge variant="secondary" className="text-sm">
              <Calendar className="h-4 w-4 mr-1" />
              {item.postedDate}
            </Badge>
            <Badge variant="secondary" className="text-sm">
              <Tag className="h-4 w-4 mr-1" />
              {item.condition}
            </Badge>
          </div>

          <Separator className="my-6" />

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3">Description</h2>
            <p className="text-muted-foreground whitespace-pre-line">
              {item.description}
            </p>
          </div>

          <Separator className="my-6" />

          {/* Seller Information */}
          {item.sellerName && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Seller Information</h2>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center">
                    {item.sellerAvatar && (
                      <img
                        src={item.sellerAvatar}
                        alt={item.sellerName}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                    )}
                    <div>
                      <p className="font-medium">{item.sellerName}</p>
                      {item.sellerRating && (
                        <div className="flex items-center">
                          <span className="text-yellow-500">★</span>
                          <span className="ml-1">
                            {item.sellerRating.toFixed(1)}
                          </span>
                        </div>
                      )}
                      {item.sellerJoined && (
                        <p className="text-sm text-muted-foreground">
                          Member since {item.sellerJoined}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="flex-1">
              <MessageSquare className="h-5 w-5 mr-2" />
              Contact Seller
            </Button>
            <Button variant="outline" className="flex-1">
              Make an Offer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
