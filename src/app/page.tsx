import { ProductType } from "./types/ProductType";
import Product from "./Components/Product";

async function getProducts() {
  const url = "https://api-frontend-test.orbesoft.com.br/api/products?limit=10&page=1&order=DESC";
  const res = await fetch(url);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data.content; // Acessando a propriedade `content` que contém a lista de produtos
}

export default async function Home() {
  const products: ProductType[] = await getProducts(); // Typo da variável products

  return (
    <div className="max-w-[1120px] mx-auto pt-8 px-8 xl:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6">
      {products.map((product: ProductType) => (
          <Product key={product.id} product={product}>
            
          </Product>
        ))}
      </div>
    </div>
  );
}