import "../ReactotronConfig";

import { useEffect, useState } from "react";
import { Stack, Tabs } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../styles/_layout.styles";
import { Pressable } from "react-native";
import type { RouteProp } from "@react-navigation/native";
import type {
  BottomTabBarButtonProps,
  BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useAuthStore } from "@/store/useAuthStore";
import { Amplify } from "aws-amplify";
import { awsmobile } from "@/aws-exports";
import { initializeAuth } from "@/auth/initializeAuth";

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: awsmobile.aws_user_pools_id,
      userPoolClientId: awsmobile.aws_user_pools_web_client_id,
    },
  },
  API: {
    GraphQL: {
      endpoint: awsmobile.aws_appsync_graphqlEndpoint,
      region: awsmobile.aws_appsync_region,
      defaultAuthMode: "userPool",
    },
  },
});

interface IRoute {
  route: RouteProp<Record<string, object | undefined>, string>;
}

interface ITabBarIcon {
  color: string;
  size: number;
}

type IoniconsName = React.ComponentProps<typeof Ionicons>["name"];

const queryClient = new QueryClient();

const screenOptions = ({ route }: IRoute): BottomTabNavigationOptions => ({
  headerTitleStyle: styles.headerTitle,
  headerStyle: styles.header,
  headerBackground: () => (
    <LinearGradient
      colors={["#231f1f", "#5c247a", "#7d24a0"]}
      style={styles.gradient}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.5, y: 0 }}
    />
  ),
  tabBarIcon: ({ color, size }: ITabBarIcon) => {
    let iconName: IoniconsName = "home";

    if (route.name === "index") {
      iconName = "storefront";
    } else if (route.name === "cart/index") {
      iconName = "cart";
    }

    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: "#5c247a",
  tabBarInactiveTintColor: "gray",
  tabBarButton: (props: BottomTabBarButtonProps) => (
    <Pressable {...props} android_ripple={styles.androidRipple} />
  ),
});

const privateStack = (
  <Tabs screenOptions={screenOptions}>
    <Tabs.Screen
      name="index"
      options={{
        title: "MyShop",
        tabBarLabel: "Home",
        headerTitleAlign: "center",
      }}
    />
    <Tabs.Screen
      name="cart/index"
      options={{
        title: "Cart",
        headerTitleAlign: "center",
      }}
    />
    <Tabs.Screen
      name="product/index"
      options={{
        href: null,
        headerShown: false,
      }}
    />
    <Tabs.Screen
      name="login/index"
      options={{
        href: null,
        headerShown: false,
      }}
    />
  </Tabs>
);

const publicStack = (
  <Stack>
    <Stack.Screen
      name="login/index"
      options={{
        headerShown: false,
      }}
    />
  </Stack>
);

export default function RootLayout() {
  const { user, loading } = useAuthStore();
  const [hydrated, setHydrated] = useState(false);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    setTimeout(() => setHydrated(true), 0);
  }, []);

  useEffect(() => {
    const loadAuth = async () => {
      console.log("⏳ Inicializando auth...");
      await initializeAuth();
      setInitialized(true);
      console.log("✅ Auth inicializado");
    };
    loadAuth();
  }, []);

  if (!initialized || loading) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      {/* {user ? privateStack : publicStack} */}
      {privateStack}
    </QueryClientProvider>
  );
}

// para visualizar el login cambiar privateStack por publicStack
