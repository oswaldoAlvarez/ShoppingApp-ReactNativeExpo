import { IProduct } from "@/interfaces/product.interface";
import axios from "axios";

const API_PRODUCT_URL = "https://fakestoreapi.com/products";
const API_CART_URL = "https://fakestoreapi.com/carts";

export const fetchProducts = async (): Promise<IProduct[]> => {
  try {
    const { data } = await axios.get<IProduct[]>(API_PRODUCT_URL);

    return data;
  } catch (error) {
    throw Error(`Error: ${error}`);
  }
};

export const fetchCategoryProducts = async (): Promise<string> => {
  try {
    const { data } = await axios.get<string>(`${API_PRODUCT_URL}/categories`);

    return data;
  } catch (error) {
    throw Error(`Error: ${error}`);
  }
};

export const getUserCarts = async (userId: number) => {
  const response = await axios.get(`${API_CART_URL}/user/${userId}`);
  return response.data;
};

export const createCart = async (
  userId: number,
  products: { productId: number; quantity: number }[]
) => {
  const response = await axios.post(API_CART_URL, {
    userId,
    date: new Date().toISOString().split("T")[0],
    products,
  });
  return response.data;
};

export const updateCart = async (
  cartId: number,
  products: { productId: number; quantity: number }[]
) => {
  const response = await axios.put(`${API_CART_URL}/${cartId}`, {
    date: new Date().toISOString().split("T")[0],
    products,
  });
  return response.data;
};

export const deleteCart = async (cartId: number) => {
  const response = await axios.delete(`${API_CART_URL}/${cartId}`);
  return response.data;
};
