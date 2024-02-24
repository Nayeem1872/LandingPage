import Carousel from "@/components/ui/carousel";
import FirstSection from "./first-section/page";
import Navbar from "./navbar/page";
import SecondSection from "./second-section/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <FirstSection/>
      <Carousel/>
      <SecondSection/>
    </>
  );
}
