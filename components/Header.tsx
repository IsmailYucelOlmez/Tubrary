import { View, Text } from 'react-native'
import React from 'react'
import LogoSVG from "@/assets/images/icons/Tubrary.svg";
import { Bell } from "lucide-react-native";

const Header = () => {
  return (
    <View className="flex flex-row justify-between items-center">

        <View>
          <LogoSVG width={50} height={50} />

          <Text className="text-2xl font-bold ">Tubrary</Text>
        </View>

        <Bell size={24} color={'#000'}/>
        
      </View>
  )
}

export default Header