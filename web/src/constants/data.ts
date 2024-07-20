import { PropertyCardProps } from "../ui-components";

export const propertiesData: PropertyCardProps[] = new Array(500).fill({
  location: "APARTSMENTS - Queens",
  price: "550,000$",
  image: "https://zilibera.ro/wp-content/uploads/2023/06/cluj-napoca.jpg",
  title: "White Stylish Loft",
  description:
    "Lorem ipsum dolor sit amet, wisi nemore fastidii at vis, eos equidem admodum",
  dealType: "rent",
  propertyDimensions: { size: 250, bathrooms: 1, bedrooms: 3 },
});
