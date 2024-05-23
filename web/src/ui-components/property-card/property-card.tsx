import {
  BathroomIcon,
  BedroomIcon,
  LocationIcon,
  PropertySizeIcon,
  SquartMetersIcon,
} from "../assets";
interface PropertyCardProps {
  image: string;
  location: string;
  title: string;
  description: string;
  price: string;
  dealType: "rent" | "sale";
  propertyDimensions: {
    size: number;
    bedrooms: number;
    bathrooms: number;
  };
}
export function PropertyCard({
  location,
  image,
  title,
  description,
  price,
  propertyDimensions: { size, bathrooms, bedrooms },
}: PropertyCardProps) {
  return (
    <div className="max-w-[450px] px-3 sm:px-0 flex flex-col gap-2">
      <img src={image} className="w-full max-h-[280px] rounded object-cover" />
      <div className="flex flex-row items-center gap-1">
        <LocationIcon />
        <h1 className="font-inter text-sm font-normal">{location}</h1>
      </div>
      <h1 className="font-inter text-2xl font-normal">{title}</h1>
      <h1 className="font-inter text-sm text-[#555555] font-normal pr-5">
        {description}
      </h1>
      <div className="w-full flex flex-row justify-between items-center pt-3 border-t border-[#E8E8E8]">
        <h1 className="text-[#0C4653] text-xl font-medium">{price}</h1>
        <div className="flex flex-row items-center 2sm:gap-3">
          <div className="flex flex-row items-center 2sm:gap-1">
            <PropertySizeIcon />
            <h1 className="flex flex-row items-center text-sm font-medium">
              {size}
              <SquartMetersIcon />
            </h1>
          </div>
          <div className="flex flex-row items-center 2sm:gap-1">
            <BedroomIcon />
            <h1 className="flex flex-row items-center text-sm font-medium">
              {bedrooms}
            </h1>
          </div>
          <div className="flex flex-row items-center 2sm:gap-1">
            <BathroomIcon />
            <h1 className="flex flex-row items-center text-sm font-medium">
              {bathrooms}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
