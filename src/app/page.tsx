import HeroSection from "@/components/homepage/HeroSection";
import InfoSection from "@/components/homepage/InfoSection";
import ProductList from "@/components/homepage/ProductList";
import Story from "@/components/homepage/Story";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-8xl">
        <HeroSection />
        <ProductList />
        <InfoSection />
        <Story />
      </div>
    </div>
  );
}
