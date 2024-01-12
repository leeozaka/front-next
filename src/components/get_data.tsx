
export default async function GetStaticProps() {
  const _items = await fetch('https://dummyjson.com/products').then(res => res.json());  
  const products = _items.products;
  
  return {
    props: {
     products, 
    }
  };
};

