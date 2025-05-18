import { axiosInstance } from "@/hooks/useAxios";
import { ProductInfoType } from "@/@types";
import ProductInfoComponent from "@/components/productInfoComponent/ProductInfoComponent";

const ProductInfo = async ({
  params,
}: {
  params: Promise<{ product_id: string }>;
}) => {
  const { product_id } = await params;

  try {
    const res = await axiosInstance.get(`/Zustand/${product_id}`);
    const product: ProductInfoType = res.data;

    return <ProductInfoComponent product={product} />;
  } catch (error) {
    console.error("Error fetching product:", error);
    return (
      <div className="container mx-auto p-4">
        <p className="text-red-500">
          Failed to load product information. Please try again later.
        </p>
      </div>
    );
  }
};

export default ProductInfo;
