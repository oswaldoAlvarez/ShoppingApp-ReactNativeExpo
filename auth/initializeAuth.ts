import { getCurrentUser } from "aws-amplify/auth";
import { useAuthStore } from "@/store/useAuthStore";

export const initializeAuth = async () => {
  const { setUser, setLoading } = useAuthStore.getState();
  try {
    const user = await getCurrentUser();
    console.log("👤 Usuario encontrado:", user);
    setUser(user);
  } catch (error) {
    console.log("❌ No hay usuario:", error);
    setUser(null);
  } finally {
    setLoading(false);
  }
};
