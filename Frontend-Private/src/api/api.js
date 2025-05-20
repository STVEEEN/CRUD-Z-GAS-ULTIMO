const BASE_URL = "http://localhost:4000/api"; 

export const fetchProducts = async () => {
  const response = await fetch(`${BASE_URL}/products`);
  return await response.json();
};

export const createProduct = async (newProduct) => {
  const response = await fetch(`${BASE_URL}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newProduct),
  });
  return await response.json();
};

export const updateProduct = async (id, updatedProduct) => {
  const response = await fetch(`${BASE_URL}/products/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedProduct),
  });
  return await response.json();
};

export const deleteProduct = async (id) => {
  const response = await fetch(`${BASE_URL}/products/${id}`, {
    method: "DELETE",
  });
  return await response.json();
};
