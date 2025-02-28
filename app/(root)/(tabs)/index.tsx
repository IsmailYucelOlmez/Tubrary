import { useGlobalContext } from "@/lib/provider";
import { Redirect } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {

  return (
    <View className="bg-[#E5E5E5] flex flex-1 justify-center items-center" >

      <Text>Edit app to edit this screen.</Text>

    </View>
  );
}
