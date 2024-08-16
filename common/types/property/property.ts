import { AgentProfile } from "./agent-profile";
import { Feature } from "./feature";
import { PropertyEssentials } from "./property-essentials";
import { PropertyReview } from "./property-review";

export interface Property {
  id: number;
  title: string;
  description: string;
  agentProfile: AgentProfile;
  propertyType: string;
  dealType: string;
  reviewScore: number;
  reviews: PropertyReview[];
  price: string;
  essentials: PropertyEssentials;
  features: Feature[];
  images: string[];
  location: string;
  address: string;
  active: boolean;
}
