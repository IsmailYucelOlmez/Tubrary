import { Text, View } from "react-native";

import TrendsCarousel from "@/components/Carousel";
import Header from "@/components/Header";

export default function Index() {

  return (
    <View className="bg-[#F1FAEE] flex flex-1 justify-center items-center gap-10" >

      <Header/>

      <TrendsCarousel/>

    </View>
  );
}
