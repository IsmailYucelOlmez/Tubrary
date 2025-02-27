import { Stack } from "expo-router";
import '../global.css'
import { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import GlobalProvider from "@/lib/provider";
import { Client } from "react-native-appwrite";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient= new QueryClient();

export default function RootLayout() {

  const [fontsLoaded] = useFonts({
    "Exo": require("../assets/fonts/Exo/Exo-VariableFont_wght.ttf"),
    "ExoItalic": require("../assets/fonts/Exo/Exo-Italic-VariableFont_wght.ttf"),
    "ExoBold": require("../assets/fonts/Exo/static/Exo-Bold.ttf"),
    "Philosopher": require("../assets/fonts/Philosopher/Philosopher-Regular.ttf"),
    "PhilosopherBold": require("../assets/fonts/Philosopher/Philosopher-Bold.ttf"),
    "BerkshireSwash": require("../assets/fonts/Berkshire_Swash/BerkshireSwash-Regular.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

 

  return (

    <QueryClientProvider client={queryClient}>
      <GlobalProvider>
        <Stack screenOptions={{headerShown: false}} />;
      </GlobalProvider>
    </QueryClientProvider>
  )
}
