
export default async function GetStaticProps() {
  const _items = await fetch('https://dummyjson.com/products').then(res => res.json());  
  const products = _items.products;
  console.log(products) 
  return {
    props: {
     products, 
    }
  };
};

