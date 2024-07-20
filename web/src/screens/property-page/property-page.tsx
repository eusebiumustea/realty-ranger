import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { propertiesData } from "../../constants/data";
import {
  DescriptionTypography,
  FeaturesTypography,
  FilledButton,
  Gallery,
  Line,
  PrimaryButton,
  ProfileInfo,
  PropertiesList,
  PropertyEssensials,
  Title,
} from "../../ui-components";
import { PropertyPageProps } from "./types";

export function PropertyPage() {
  const nav = useNavigate();
  const [property, setProperty] = useState<PropertyPageProps | null>(null);
  function getProperty() {
    setProperty({
      price: "550,000$",
      title: "West Side Garden House",
      sqft: 5000,
      dealType: "sale",
      propertyType: "Apartment",
      location: "Texas",
      status: "active",
      essentials: {
        bedrooms: 4,
        bathrooms: 4,
        size: 4,
      },
      requirements: new Array(5).fill(
        "Lorem ipsum dolor sit amet, wisi nemore"
      ),
      description:
        "Lorem ipsum dolor sit amet, wisi nemore fastidii at vis, eos equidem admodum disputando ea. An duis dolor appellantur mea, est id zril nobis appellantur. Ei sea duis senserit qualisque, te facilisis appellantur pri. Id aperiri aliquam interesset mel. Contentiones vituperatoribus id est, per prima nihil scripta no. No semper forensibus adipiscing quo. Amet deleniti lobortis et eam. In oporteat pertinacia quo, cu qui antiopam intellegebat, ei alii paulo has. In alia eros ornatus pri, graeci accusata pericula an vix.Lorem ipsum dolor sit amet, wisi nemore fastidii at vis, eos equidem admodum disputando ea. An duis dolor appellantur mea, est id zril nobis appellantur. Ei sea duis senserit qualisque, te facilisis appellantur pri. Id aperiri aliquam interesset mel. Contentiones vituperatoribus id est, per prima nihil scripta no. No semper forensibus adipiscing quo. Amet deleniti lobortis et eam. In oporteat pertinacia quo, cu qui antiopam intellegebat, ei alii paulo has. In alia eros ornatus pri, graeci accusata pericula an vix.",
      images: [
        "https://cyu.ro/wp-content/uploads/2023/06/cluj-napoca.jpg",
        "https://farm5.staticflickr.com/4462/37576372521_6e7d65abef_b.jpg",
        "https://booktoursromania.com/wp-content/uploads/cluj-napoca-2.jpg",
        "https://cdn.cluj.com/cluj/Recensamant-cluj-2023.jpg",
        "https://cdn.g4media.ro/wp-content/uploads/2023/10/cluj-napoca.jpeg",
        "https://www.dentaturism.com/images/headers/cluj-photo.jpg",
        "https://gazetadecluj.ro/wp-content/uploads/2024/07/cluj-napoca.jpg",
      ],
    });
  }
  useEffect(() => {
    getProperty();
  }, []);
  if (!property) {
    return null;
  }
  return (
    <>
      <PrimaryButton onClick={() => nav(-1)} additionalStyle="m-3">
        back
      </PrimaryButton>

      <Gallery images={property?.images} />
      <div className="w-full py-4 gap-4 2xl:px-24 flex flex-col justify-center items-start">
        <h1 className="bg-[#EEEEEE] mx-2 py-3 px-6 font-sans text-[#0C4653] uppercase self-start">
          for {property.dealType}
        </h1>
        <div className="w-full flex flex-col sm:flex-row justify-between">
          <h1 className="font-inter uppercase text-[#0C4653] text-3xl md:text-5xl font-semibold p-2">
            {property.title}
          </h1>
          <h1 className="font-inter uppercase text-[#0C4653] text-2xl md:text-4xl font-semibold p-2">
            price: {property.price}
          </h1>
        </div>
        <div className="w-full flex items-center flex-col md:flex-row justify-between md:items-start">
          <PropertyEssensials
            status={property.status}
            essentials={property.essentials}
          />
          <div className="flex flex-col gap-2 items-end p-4 xl:border border-[#555555] max-w-[600px]">
            <ProfileInfo />
            <FilledButton>Contact me</FilledButton>
          </div>
        </div>
        <DescriptionTypography
          description="Lorem ipsum dolor sit amet, wisi nemore fastidii at vis, eos equidem admodum disputando ea. An duis dolor appellantur mea, est id zril nobis appellantur. Ei sea duis senserit qualisque, te facilisis appellantur pri. Id aperiri aliquam interesset mel. Contentiones vituperatoribus id est, per prima nihil scripta no. No semper forensibus adipiscing quo. Amet deleniti lobortis et eam. In oporteat pertinacia quo, cu qui antiopam intellegebat, ei alii paulo has. In alia eros ornatus pri, graeci accusata pericula an vix.Lorem ipsum dolor sit amet, wisi nemore fastidii at vis, eos equidem admodum disputando ea. An duis dolor appellantur mea, est id zril nobis appellantur. Ei sea duis senserit qualisque, te facilisis appellantur pri. Id aperiri aliquam interesset mel. Contentiones vituperatoribus id est, per prima nihil scripta no. No semper forensibus adipiscing quo. Amet deleniti lobortis et eam. In oporteat pertinacia quo, cu qui antiopam intellegebat, ei alii paulo has. In alia eros ornatus pri, graeci accusata pericula an vix."
          title="description"
        />
        <DescriptionTypography
          description={property.sqft.toString()}
          title="sqft"
        />
        <FeaturesTypography title="requirements" list={property.requirements} />
      </div>
      <Line className="mb-8" />
      <Title className="text-center mb-3">similar properties</Title>
      <div className="w-full flex justify-center">
        <PropertiesList
          additionalAction={() => window.scrollTo({ top: 0 })}
          data={propertiesData.slice(0, 3)}
        />
      </div>
    </>
  );
}
