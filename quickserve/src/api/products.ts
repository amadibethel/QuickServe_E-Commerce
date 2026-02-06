export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  stock: number;
  category: string;
}

export const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch("https://api.oluwasetemi.dev/products");
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};
