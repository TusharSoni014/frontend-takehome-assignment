import Features from "@/components/Features/Features";
import Header from "@/components/Hero/Header";
import Hero from "@/components/Hero/Hero";
import Partners from "@/components/Partners/Partners";
import Pattern from "@/components/Pattern";

export default function Home() {
  return (
    <div className="p-3 md:p-5">
      <Header />
      <Hero />
      <Features />
      <div className="relative">
        <Pattern />
        <Partners />
      </div>
    </div>
  );
}
