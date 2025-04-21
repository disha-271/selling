import React from "react";
import { Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ItemCardProps {
  id?: string;
  title?: string;
  price?: number;
  location?: string;
  postedDate?: string;
  condition?: "New" | "Like New" | "Good" | "Fair" | "Poor";
  imageUrl?: string;
  isFeatured?: boolean;
  isSaved?: boolean;
  onSave?: (id: string) => void;
  onClick?: (id: string) => void;
}

const ItemCard = ({
  id = "1",
  title = "Vintage Leather Sofa",
  price = 299.99,
  location = "Brooklyn, NY",
  postedDate = "2 days ago",
  condition = "Good",
  imageUrl = "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80",
  isFeatured = false,
  isSaved = false,
  onSave = () => {},
  onClick = () => {},
}: ItemCardProps) => {
  const handleSaveClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSave(id);
  };

  const handleCardClick = () => {
    onClick(id);
  };

  return (
    <Card
      className={cn(
        "overflow-hidden transition-all duration-200 hover:shadow-md cursor-pointer bg-white",
        isFeatured && "ring-2 ring-primary ring-offset-2",
      )}
      onClick={handleCardClick}
    >
      <div className="relative h-40 overflow-hidden bg-gray-100">
        {isFeatured && (
          <Badge
            variant="secondary"
            className="absolute top-2 left-2 z-10 bg-primary text-primary-foreground"
          >
            Featured
          </Badge>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 z-10 bg-white/80 hover:bg-white rounded-full"
          onClick={handleSaveClick}
        >
          <Heart
            className={cn(
              "h-5 w-5",
              isSaved ? "fill-red-500 text-red-500" : "text-gray-500",
            )}
          />
        </Button>
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium text-lg line-clamp-1">{title}</h3>
          <p className="font-bold text-lg">${price.toFixed(2)}</p>
        </div>
        <div className="flex justify-between items-center text-sm text-muted-foreground">
          <p className="truncate">{location}</p>
          <p>{postedDate}</p>
        </div>
        <Badge variant="outline" className="mt-2">
          {condition}
        </Badge>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
