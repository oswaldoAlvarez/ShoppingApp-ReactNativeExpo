import { IProduct } from "@/interfaces/product.interface";
import axios from "axios";

const API_PRODUCT_URL = "https://fakestoreapi.com/products";

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
