import Navbar from "@/components/layout/Navbar";
import { Hero } from "@/components/layout/Hero";
import { HeroScroll } from "@/components/layout/Scroll";

export default function Home() {
  return (
    <main className="min-h-screen bg-background dark:bg-black">
      <Navbar />
      <Hero />
      <div className="-mt-60">
        <HeroScroll />
      </div>
    </main>
  );
}
