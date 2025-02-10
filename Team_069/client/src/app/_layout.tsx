import React from "react";
import { Stack } from "expo-router";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { WSProvider } from "@/service/WSProvider";

const RootLayout = () => {
  return (
    <WSProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="customer/auth" />
        <Stack.Screen name="customer/home" />
        <Stack.Screen name="customer/selectLocations" />
        <Stack.Screen name="captain/auth" />
        <Stack.Screen name="captain/home" />
        <Stack.Screen name="role" />
      </Stack>
    </WSProvider>
  );
};

export default gestureHandlerRootHOC(RootLayout);
