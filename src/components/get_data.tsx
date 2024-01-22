export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export default async function GetStaticProps() {
  const _items = await fetch("https://dummyjson.com/products").then((res) =>
    res.json(),
  );
  const products = _items.products;

  return {
    props: {
      products,
    },
  };
}
