import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface CartItem {
  productId: number;
  quantity: number;
}

interface CartState {
  products: CartItem[];
  addToCart: (productId: number) => void;
  reduceCart: (productId: number) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      products: [],
      addToCart: (productId) => {
        const existingProduct = get().products.find(
          (item) => item.productId === productId
        );
        if (existingProduct) {
          set({
            products: get().products.map((item) =>
              item.productId === productId
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
        } else {
          set({ products: [...get().products, { productId, quantity: 1 }] });
        }
      },
      reduceCart: (productId) => {
        const existingProduct = get().products.find(
          (item) => item.productId === productId
        );
        if (existingProduct && existingProduct.quantity > 1) {
          set({
            products: get().products.map((item) =>
              item.productId === productId
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          });
        } else {
          set({
            products: get().products.filter(
              (item) => item.productId !== productId
            ),
          });
        }
      },
      removeFromCart: (productId) => {
        set({
          products: get().products.filter(
            (item) => item.productId !== productId
          ),
        });
      },
      clearCart: () => set({ products: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
