import { propertiesData } from "../../constants/data";
import {
  FilterSection,
  PropertiesList,
  ScreenOverlay,
} from "../../ui-components";

export function Properties() {
  return (
    <div className="flex flex-col justify-center items-center gap-1 sm:gap-4">
      <ScreenOverlay
        subtitle="Over 50 years of reliable property management experience."
        image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fd/61/cluj-napoca.jpg?w=1400&h=1400&s=1"
        title="THE PLACES PEOPLE CALL HOME"
      >
        <FilterSection />
      </ScreenOverlay>
      <PropertiesList data={propertiesData} />
    </div>
  );
}
