const BASE_URL = "https://fakestoreapi.com/products";

export async function getCategory() {
  const res = await fetch(`${BASE_URL}/categories`);

  if (!res.ok) throw new Error("Failed to fetch Categories");

  return res;
}

export async function getJewellery() {
  const res = await fetch(`${BASE_URL}/category/jewelery`);
  if (!res.ok) throw new Error("failed to fetch Jewellery");
  return res;
}

export async function getElectronic() {
  const res = await fetch(`${BASE_URL}/category/electronics`);
  if (!res.ok) throw new Error("failed to fetch electronics");
  return res;
}
export async function getMen() {
  const res = await fetch(`${BASE_URL}/category/men's clothing`);
  if (!res.ok) throw new Error("failed to fetch mens clothing");
  return res;
}
export async function getWomen() {
  const res = await fetch(`${BASE_URL}/category/women's clothing`);
  if (!res.ok) throw new Error("failed to fetch womens clothing");
  return res;
}

export async function getProduct(id) {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) throw new Error("failed to fetch the product");
  return res;
}
