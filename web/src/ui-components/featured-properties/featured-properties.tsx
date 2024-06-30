import { InfoMessage, NewsCard, PropertyCard } from "..";
import { PrimaryButton } from "../button";

export function FeaturedProperties() {
  return (
    <div id="properties" className="w-full flex flex-col items-center">
      <h1 className="text-[#0C4653] font-inter text-4xl font-normal uppercase text-center py-11">
        featured properties
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-20">
        <PropertyCard
          location="APARTSMENTS - Queens"
          title="White Stylish Loft"
          description="Lorem ipsum dolor sit amet, wisi nemore fastidii at vis, eos
equidem admodum"
          dealType="rent"
          propertyDimensions={{ size: 250, bathrooms: 1, bedrooms: 3 }}
          price="550,000$"
          image="https://zilibera.ro/wp-content/uploads/2023/06/cluj-napoca.jpg"
        />
        <PropertyCard
          location="APARTSMENTS - Queens"
          title="White Stylish Loft"
          description="Lorem ipsum dolor sit amet, wisi nemore fastidii at vis, eos
equidem admodum"
          dealType="rent"
          propertyDimensions={{ size: 250, bathrooms: 1, bedrooms: 3 }}
          price="550,000$"
          image="https://zilibera.ro/wp-content/uploads/2023/06/cluj-napoca.jpg"
        />
        <PropertyCard
          location="APARTSMENTS - Queens"
          title="White Stylish Loft"
          description="Lorem ipsum dolor sit amet, wisi nemore fastidii at vis, eos
equidem admodum"
          dealType="rent"
          propertyDimensions={{ size: 250, bathrooms: 1, bedrooms: 3 }}
          price="550,000$"
          image="https://zilibera.ro/wp-content/uploads/2023/06/cluj-napoca.jpg"
        />
      </div>
      <PrimaryButton additionalStyle="my-[60px]">More Properties</PrimaryButton>
      <div className="w-full gap-11 md:gap-0 flex flex-col md:flex-row items-center justify-center">
        <div className="flex flex-col items-center gap-11">
          <InfoMessage
            title="Engagement"
            message="A premier asset and property management company, we’re proud to offer Northern California over 50 years’ experience
managing a diverse portfolio of commercial and multifamily properties.We’re renowned for our hands-on management approach, marketing know-how and in-depth knowledge of submarkets
throughout the region. It’s what’s allowed us to create unique strategies that are truly custom to each property."
          />
          <InfoMessage
            title="Mission"
            message="Our mission is to provide superior service, professionalism and respect to everyone who lives and works at the
        properties we manage. It’s just one of the many ways we are constantly working to exceed our clients’ expectations."
          />
        </div>
        <NewsCard
          previewNews={[
            { id: 1, title: "Spring 2023 Newsletter", date: "March 24, 2023" },
          ]}
        />
      </div>
    </div>
  );
}
