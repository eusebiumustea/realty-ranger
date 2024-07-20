import { Title } from "../title";

interface DescriptionProps {
  title: string;
  description: string;
  titleProps?: any;
  descriptionClass?: string;
}
export function DescriptionTypography({
  title,
  description,
  titleProps,
  descriptionClass,
}: DescriptionProps) {
  return (
    <div className={"flex flex-col items-start gap-6 p-4 2xl:p-0"}>
      <Title {...titleProps}>{title}</Title>
      <p
        className={
          "font-inter text-[15px] font-normal text-[#555555] " +
          descriptionClass
        }
      >
        {description}
      </p>
    </div>
  );
}
