import Layout from "../../components/common/layout/Layout";
import { PortfolioItem, portfolioItems } from "../../components/Portfolio/portfolioItems";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import PortfolioItemShowcase from "../../components/Portfolio/PortfolioItemShowcase/PortfolioItemShowcase";

export default function PortfolioItemPage() {
  const router = useRouter();
  const { itemName } = router.query;
  const [item, setItem] = useState<PortfolioItem|null>(null);

  useEffect(() => {
    if (!itemName) {
      return;
    }

    const item = portfolioItems.find(item => item.uniqueName === itemName);
    setItem(item || null);
  }, [router, itemName]);

  if (!item) {
    return <Layout>Not found</Layout>;
  }

  return (
    <Layout>
      <PortfolioItemShowcase item={item} />
    </Layout>
  );
}
