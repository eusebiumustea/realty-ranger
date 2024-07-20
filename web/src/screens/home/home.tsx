import { useNavigate } from "react-router-dom";
import {
  About,
  FeaturedProperties,
  FilterSection,
  PrimaryButton,
  ScreenOverlay,
} from "../../ui-components";

export function Home() {
  const nav = useNavigate();
  return (
    <>
      <ScreenOverlay
        subtitle="Over 50 years of reliable property management experience."
        image="https://www.momondo.ro/rimg/dimg/81/ee/e112fbd1-city-27633-1656c96ae00.jpg?width=1366&height=768&xhint=1395&yhint=650&crop=true"
        title="THE PLACES PEOPLE CALL HOME"
      >
        <PrimaryButton theme="light" onClick={() => nav("/about")}>
          learn more
        </PrimaryButton>
        <FilterSection />
      </ScreenOverlay>
      <FeaturedProperties />
      <About />
    </>
  );
}
