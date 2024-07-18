import { fetchFeaturedProducts } from "@/lib/actions/fetchProduct.action";
import React from "react";
import EmptyList from "../global/EmptyList";
import SectionTitle from "../global/SectionTitle";
import ProductsGrid from "../products/ProductsGrid";

const FeaturedProducts = async () => {
  const products = await fetchFeaturedProducts();
  if (products.length === 0) return <EmptyList />;

  return (
    <section className="p-24">
      <SectionTitle text="Featured Products" />
      <ProductsGrid products={products} />
    </section>
  );
};

export default FeaturedProducts;
