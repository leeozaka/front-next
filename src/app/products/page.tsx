"use client";
import { items } from "@/components/items";
import { usePathname } from "next/navigation";

const ProductPage: React.FC = () => {
  const router = usePathname();

  //const { productId } = router.itoa().params;

  const product = items.find((item) => item.id == Number(router));

  return (
    <div>
      {product ? (
        <div>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <img src={product.photo} alt={product.name} />
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ProductPage;
