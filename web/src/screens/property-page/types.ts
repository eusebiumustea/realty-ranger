export interface PropertyPageProps {
  images: string[];
  location: string;
  title: string;
  description: string;
  propertyType: string;
  price: string;
  status: "active" | "inactive";
  sqft: number;
  requirements: string[];
  dealType: "rent" | "sale";
  essentials: {
    size: number;
    bedrooms: number;
    bathrooms: number;
  };
}
