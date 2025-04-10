import axios from "axios";

const CART_API = "https://fakestoreapi.com/carts";

export const addProductToCart = async (
  userId: number,
  productId: number,
  quantity: number = 1
) => {
  const { data: carts } = await axios.get(`${CART_API}/user/${userId}`);
  const lastCart = carts[carts.length - 1];

  if (!lastCart) {
    return axios.post(CART_API, {
      userId,
      date: new Date().toISOString().split("T")[0],
      products: [{ productId, quantity }],
    });
  }

  const updatedProducts = [...lastCart.products];

  const existing = updatedProducts.find((p) => p.productId === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    updatedProducts.push({ productId, quantity });
  }

  return axios.put(`${CART_API}/${lastCart.id}`, {
    userId,
    date: new Date().toISOString().split("T")[0],
    products: updatedProducts,
  });
};
