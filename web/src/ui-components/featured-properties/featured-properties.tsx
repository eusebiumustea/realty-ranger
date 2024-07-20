import { useNavigate } from "react-router-dom";
import { PropertiesList } from "..";
import { PrimaryButton } from "../button";
import { propertiesData } from "../../constants/data";

export function FeaturedProperties() {
  const nav = useNavigate();
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-[#0C4653] font-inter text-4xl font-normal uppercase text-center py-11">
        featured properties
      </h1>
      <PropertiesList data={propertiesData.slice(0, 3)} />
      <PrimaryButton additionalStyle="my-12" onClick={() => nav("/properties")}>
        More Properties
      </PrimaryButton>
      <div className=" w-[80%] mt-4 self-center h-[1px] bg-[#555555]" />
    </div>
  );
}
