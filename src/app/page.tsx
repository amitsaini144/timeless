import HeroSection from "@/components/homepage/HeroSection";
import ProductList from "@/components/homepage/ProductList";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-8xl">
        <HeroSection />
        <ProductList />
      </div>
    </div>
  );
}
