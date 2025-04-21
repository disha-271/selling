import React from "react";
import { motion } from "framer-motion";
import ItemCard from "./ItemCard";

interface Item {
  id: string;
  title: string;
  price: number;
  location: string;
  postedDate: string;
  imageUrl: string;
  condition: "New" | "Like New" | "Good" | "Fair" | "Poor";
  isFeatured?: boolean;
  isSaved?: boolean;
}

interface ListingGridProps {
  items?: Item[];
  title?: string;
  subtitle?: string;
  isLoading?: boolean;
  columns?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
}

interface ListingGridProps {
  items?: Item[];
  title?: string;
  subtitle?: string;
  isLoading?: boolean;
  columns?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  onItemClick?: (id: string) => void;
}

const ListingGrid: React.FC<ListingGridProps> = ({
  items = defaultItems,
  title = "Featured Listings",
  subtitle = "Discover unique items from sellers in your area",
  isLoading = false,
  columns = { sm: 2, md: 3, lg: 4, xl: 5 },
  onItemClick = (id) => {
    // Find the item by id to pass as state
    const item = items.find((item) => item.id === id);
    if (item) {
      window.location.href = `/item/${id}`;
      // Store the item in sessionStorage to retrieve it on the details page
      sessionStorage.setItem("selectedItem", JSON.stringify(item));
    }
  },
}) => {
  // Determine grid columns based on props
  const gridColsClasses = `grid-cols-${columns.sm || 2} md:grid-cols-${columns.md || 3} lg:grid-cols-${columns.lg || 4} xl:grid-cols-${columns.xl || 5}`;

  // Animation variants for staggered grid items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  if (isLoading) {
    return (
      <div className="w-full bg-background p-4">
        <div className="mb-6">
          <div className="h-8 w-48 bg-muted/50 rounded animate-pulse mb-2"></div>
          <div className="h-4 w-72 bg-muted/30 rounded animate-pulse"></div>
        </div>
        <div className={`grid ${gridColsClasses} gap-4`}>
          {Array(8)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="h-80 bg-muted/20 rounded-lg animate-pulse"
              ></div>
            ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-background p-4">
      {(title || subtitle) && (
        <div className="mb-6">
          {title && (
            <h2 className="text-2xl font-semibold text-foreground mb-1">
              {title}
            </h2>
          )}
          {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
        </div>
      )}

      <motion.div
        className={`grid ${gridColsClasses} gap-4`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {items.map((item) => (
          <motion.div key={item.id} variants={itemVariants}>
            <ItemCard
              id={item.id}
              title={item.title}
              price={item.price}
              location={item.location}
              postedDate={item.postedDate}
              imageUrl={item.imageUrl}
              condition={item.condition}
              isFeatured={item.isFeatured}
              isSaved={item.isSaved}
              onClick={onItemClick}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

// Default items for demonstration
const defaultItems: Item[] = [
  {
    id: "1",
    title: "Vintage Leather Sofa",
    price: 450,
    location: "Brooklyn, NY",
    postedDate: "2023-09-15",
    imageUrl:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80",
    condition: "Good",
    isFeatured: true,
  },
  {
    id: "2",
    title: "MacBook Pro 2021",
    price: 1200,
    location: "Manhattan, NY",
    postedDate: "2023-09-18",
    imageUrl:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80",
    condition: "Like New",
  },
  {
    id: "3",
    title: "Mountain Bike - Trek",
    price: 350,
    location: "Queens, NY",
    postedDate: "2023-09-10",
    imageUrl:
      "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=500&q=80",
    condition: "Good",
  },
  {
    id: "4",
    title: "Dining Table Set",
    price: 280,
    location: "Bronx, NY",
    postedDate: "2023-09-05",
    imageUrl:
      "https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=500&q=80",
    condition: "Fair",
  },
  {
    id: "5",
    title: "Sony PlayStation 5",
    price: 450,
    location: "Staten Island, NY",
    postedDate: "2023-09-20",
    imageUrl:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500&q=80",
    condition: "New",
    isFeatured: true,
  },
  {
    id: "6",
    title: "Vintage Camera Collection",
    price: 200,
    location: "Brooklyn, NY",
    postedDate: "2023-09-12",
    imageUrl:
      "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?w=500&q=80",
    condition: "Good",
  },
  {
    id: "7",
    title: "Electric Guitar - Fender",
    price: 550,
    location: "Manhattan, NY",
    postedDate: "2023-09-08",
    imageUrl:
      "https://images.unsplash.com/photo-1550291652-6ea9114a47b1?w=500&q=80",
    condition: "Like New",
  },
  {
    id: "8",
    title: "Designer Handbag",
    price: 180,
    location: "Queens, NY",
    postedDate: "2023-09-17",
    imageUrl:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&q=80",
    condition: "Good",
    isSaved: true,
  },
];

export default ListingGrid;
