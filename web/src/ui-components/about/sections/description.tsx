import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "../../button";

interface DescriptionProps {
  title: string;
  text: string;
}

export function Description({ title, text }: DescriptionProps) {
  const nav = useNavigate();
  return (
    <div className="flex flex-col items-start gap-y-7 mt-4 md:mt-0 mx-6 md:mx-12">
      <h1 className="font-inter text-2xl md:text-4xl font-light text-[#3E3E3E] uppercase">
        {title}
      </h1>
      <h1 className="text-[#3E3E3E] text-base font-normal max-w-[500px]">
        {text}
      </h1>
      <PrimaryButton
        onClick={() => nav("/properties")}
        additionalStyle="self-center md:mt-4"
      >
        Explore our properties
      </PrimaryButton>
    </div>
  );
}
