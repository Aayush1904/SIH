import Image from "next/image";
import Hero from '@/Components/Hero';
import Camp from "@/Components/Camp";
import Features from "@/Components/Features";
import Guide from "@/Components/Guide";
import PriceModel from "@/Components/PriceModel";
export default function Home() {
  return (
    <>
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <PriceModel />
    </>
  );
}
