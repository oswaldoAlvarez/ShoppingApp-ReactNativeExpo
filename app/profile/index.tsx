import { View, Text, Button } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

export default function Profile() {
  const router = useRouter();

  return (
    <View>
      <Text>pantalla de profile</Text>
      <Button title="Volver" onPress={() => router.back()} />
    </View>
  );
}
