import { SINGLE_POST_QUERY } from "@/src/sanity/lib/queries";
import { sanityFetch } from "@/src/sanity/lib/live";

const ProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  // Fetch product data from Sanity
  const { data: sanityProductData } = await sanityFetch({
    query: SINGLE_POST_QUERY,
    params: { slug },
  });
  if (!sanityProductData) {
    return <div>Product not found</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-24 px-4">
      <h1 className="text-2xl font-bold">{sanityProductData.title}</h1>
    </div>
  );
};

export default ProductPage;
