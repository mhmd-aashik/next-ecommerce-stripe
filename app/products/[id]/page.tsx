// Import necessary components and utilities
import BreadCrumbs from "@/components/single-product/BreadCrumbs";
import Image from "next/image";
import { formatCurrency } from "@/utils/format";
import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";
import AddToCart from "@/components/single-product/AddToCart";
import ProductRating from "@/components/single-product/ProductRating";
import { fetchSingleProduct } from "@/lib/actions/fetchProduct.action";

// Define the async function that renders the single product page
async function SingleProductPage({ params }: { params: { id: string } }) {
  // Fetch the product data based on the product ID
  const product = await fetchSingleProduct(params.id);

  // Destructure the necessary fields from the product data
  const { name, image, company, description, price } = product;

  // Format the price to a currency format
  const dollarsAmount = formatCurrency(price);

  // Return the JSX to render the product page
  return (
    <section>
      {/* Render the breadcrumb navigation with the product name */}
      <BreadCrumbs name={product.name} />

      {/* Main grid layout with two columns on large screens */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* IMAGE FIRST COLUMN */}
        <div className="relative h-full">
          {/* Render the product image with next/image component for optimization */}
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
            priority
            className="w-full rounded-md object-cover"
          />
        </div>
        {/* PRODUCT INFO SECOND COLUMN */}
        <div>
          {/* Render the product name and favorite toggle button */}
          <div className="flex gap-x-8 items-center">
            <h1 className="capitalize text-3xl font-bold">{name}</h1>
            <FavoriteToggleButton productId={params.id} />
          </div>

          {/* Render the product rating */}
          <ProductRating productId={params.id} />

          {/* Render the company name */}
          <h4 className="text-xl mt-2">{company}</h4>

          {/* Render the product price */}
          <p className="mt-3 text-md bg-muted inline-block p-2 rounded-md">
            {dollarsAmount}
          </p>

          {/* Render the product description */}
          <p className="mt-6 leading-8 text-muted-foreground">{description}</p>

          {/* Render the Add to Cart button */}
          <AddToCart productId={params.id} />
        </div>
      </div>
    </section>
  );
}

// Export the SingleProductPage component as the default export
export default SingleProductPage;
