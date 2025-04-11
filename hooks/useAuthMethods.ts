import {
  signIn as amplifySignIn,
  signOut as amplifySignOut,
  getCurrentUser,
} from "aws-amplify/auth";

export const useAuthMethods = () => {
  const signIn = async (username: string, password: string) => {
    try {
      const response = await amplifySignIn({ username, password });
      return response;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await amplifySignOut();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const getCurrentAuthenticatedUser = async () => {
    try {
      const user = await getCurrentUser();
      return user;
    } catch (error) {
      return null;
    }
  };

  return {
    signIn,
    signOut,
    getCurrentAuthenticatedUser,
  };
};
