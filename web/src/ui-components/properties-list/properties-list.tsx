import { CSSProperties, forwardRef, LegacyRef, PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import { GridComponents, VirtuosoGrid } from "react-virtuoso";
import { PropertyCard, PropertyCardProps } from "../property-card";
interface GridComponentsProps {
  style: CSSProperties;
}
interface PropertiesListProps {
  data: PropertyCardProps[];
  additionalAction?: () => void;
}
const gridComponents = {
  List: forwardRef(
    (
      { style, children, ...props }: PropsWithChildren<GridComponentsProps>,
      ref: LegacyRef<HTMLDivElement>
    ) => (
      <div
        ref={ref}
        {...props}
        className="gap-4"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          ...style,
        }}
      >
        {children}
      </div>
    )
  ),
};
export function PropertiesList({
  data,
  additionalAction,
}: PropertiesListProps) {
  const nav = useNavigate();
  return (
    <VirtuosoGrid
      useWindowScroll
      style={{ width: "100%" }}
      totalCount={data.length}
      data={data}
      components={gridComponents as GridComponents}
      itemContent={(i, item) => (
        <PropertyCard
          onClick={() => {
            nav(`/property/${i + 1}`);
            additionalAction && additionalAction();
          }}
          key={i}
          {...item}
        />
      )}
    />

    // <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:gap-9 sm:p-4">
    //   {data.map((item, i) => (
    // <PropertyCard
    //   onClick={() => {
    //     nav(`/property/${i + 1}`);
    //     additionalAction && additionalAction();
    //   }}
    //   key={i}
    //   {...item}
    // />
    //   ))}
    // </div>
  );
}
