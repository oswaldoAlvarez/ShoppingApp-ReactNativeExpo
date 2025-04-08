import "../ReactotronConfig";

import { Tabs } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./_layout.styles";
import { Pressable } from "react-native";
import type { RouteProp } from "@react-navigation/native";
import type {
  BottomTabBarButtonProps,
  BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface IRoute {
  route: RouteProp<Record<string, object | undefined>, string>;
}

interface ITabBarIcon {
  color: string;
  size: number;
}

type IoniconsName = React.ComponentProps<typeof Ionicons>["name"];

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Tabs
        screenOptions={({ route }: IRoute): BottomTabNavigationOptions => ({
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
            color: "#fff",
          },
          headerStyle: {
            height: 100,
          },
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
              iconName = "home";
            } else if (route.name === "catalogue/index") {
              iconName = "storefront";
            } else if (route.name === "profile/index") {
              iconName = "person";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#5c247a",
          tabBarInactiveTintColor: "gray",
          tabBarButton: (props: BottomTabBarButtonProps) => (
            <Pressable {...props} android_ripple={{ color: "transparent" }} />
          ),
        })}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "MyShop",
            tabBarLabel: "Home",
            headerTitleAlign: "center",
          }}
        />
        <Tabs.Screen
          name="catalogue/index"
          options={{
            title: "Catalogue",
            headerTitleAlign: "center",
          }}
        />
        <Tabs.Screen
          name="profile/index"
          options={{
            title: "Profile",
            headerTitleAlign: "center",
          }}
        />
        {/* <Tabs.Screen name="+not-found" /> */}
      </Tabs>
    </QueryClientProvider>
  );
}
