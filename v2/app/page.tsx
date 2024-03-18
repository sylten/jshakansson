import Image from "next/image";
import { useEffect } from "react";
import { getPortfolioItems } from "./portfolio/getPortfolioItems";

export default function Home() {
  // useEffect(() => {
    getPortfolioItems().then((items) => {
      console.log(items);
    });
  // });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Test
    </main>
  );
}
