import Category from "@/components/category";
import Hero from "@/components/hero";
import LogoFeature from "@/components/logoFeature";
import OurProduct from "@/components/ourProduct";

export default function Home() {
  return (
    <div className=" md:px-[300px]">
        <Hero/>
        <LogoFeature/>
        <Category/>
        <OurProduct/>

    </div>
  );
}
