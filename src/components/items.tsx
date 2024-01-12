async function getItems () {
  const unresolvedData = await fetch('localhost:3001/products/get');
  const data = unresolvedData.json();
  return data;
}   

export default getItems;
// export const items = [
//
//   {
//     id: 1,
//     photo:
//       "https://www.comprecimed.com.br/cdn/shop/files/136126.png?v=1687548792&width=1000",
//     name: "Loira",
//     price: 10,
//     description: "Teste de 1",
//     stock: 1,
//   },
//   {
//     id: 2,
//     photo:
//       "https://www.drogariaminasbrasil.com.br/media/product/47f/hidratante-labial-carmed-maca-do-amor-com-cor-efeito-gloss-10g-cimed-914.jpg",
//     name: "Morena",
//     price: 20,
//     description: "Esse é o brabo",
//     stock: 10,
//   },
//   {
//     id: 3,
//     photo:
//       "https://lojaslivia.fbitsstatic.net/img/p/hidratante-labial-carmed-10-gr-beijinho-105260/290428.jpg?w=800&h=800&v=no-change&qs=ignore",
//     name: "Ruiva",
//     price: 30,
//     description: "Esse mais ou menos",
//     stock: 0,
//   },
//   {
//     id: 4,
//     photo:
//       "https://http2.mlstatic.com/D_NQ_NP_863994-MLU72748568155_112023-O.webp",
//     name: "Item 4",
//     price: 40,
//     description: "Description for Item 4",
//     stock: 5,
//   },
//   {
//     id: 5,
//     photo:
//       "https://http2.mlstatic.com/D_NQ_NP_940760-MLA51458358915_092022-O.webp",
//     name: "Item 5",
//     price: 50,
//     description: "Description for Item 5",
//     stock: 2,
//   },
//   {
//     id: 6,
//     photo:
//       "https://http2.mlstatic.com/D_NQ_NP_947480-MLU72636575455_112023-O.webp",
//     name: "Item 6",
//     price: 60,
//     description: "Description for Item 6",
//     stock: 8,
//   },
//   {
//     id: 7,
//     photo:
//       "https://http2.mlstatic.com/D_NQ_NP_709359-MLU48307282941_112021-O.webp",
//     name: "Item 7",
//     price: 70,
//     description: "Description for Item 7",
//     stock: 3,
//   },
//   {
//     id: 8,
//     photo:
//       "https://http2.mlstatic.com/D_NQ_NP_796869-MLA72574114814_112023-O.webp",
//     name: "Item 8",
//     price: 80,
//     description: "Description for Item 8",
//     stock: 0,
//   },
//   {
//     id: 9,
//     photo:
//       "https://http2.mlstatic.com/D_NQ_NP_836238-MLU72557834180_112023-O.webp",
//     name: "Item 9",
//     price: 90,
//     description: "Description for Item 9",
//     stock: 6,
//   },
//   {
//     id: 10,
//     photo:
//       "https://http2.mlstatic.com/D_NQ_NP_720349-MLU72748460351_112023-O.webp",
//     name: "Item 10",
//     price: 100,
//     description: "Description for Item 10",
//     stock: 4,
//   },
// ];
