import { View, Text, ScrollView, TouchableOpacity, Image, Alert, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { login } from '@/lib/appwrite'
import { useGlobalContext } from '@/lib/provider'
import { Redirect } from 'expo-router'
const bgImage = require('../assets/images/loginBg.png')
import GoogleIcon from '../assets/images/icons/Google.svg'
import LogoSVG from '../assets/images/icons/Tubrary.svg'


const SignIn = () => {

  const {refetch,isLoading,isLogged}=useGlobalContext()

  if(!isLoading && isLogged) return <Redirect href="/" />

  const handleLogin =async () => {

    const result=await login()

    if(result){
      refetch()
    }else{
      Alert.alert("Login Failed")
    }
  }

  return (
    <SafeAreaView className="bg-white h-full">
        <ImageBackground source={bgImage} resizeMode='cover' className='h-full flex justify-center items-center' >
        
          <View className='flex justify-center items-center'>

            <LogoSVG width={150} height={150} />

            <Text className="text-4xl font-extrabold font-exoBold text-white text-center uppercase mt-2">
              TUBRARY
            </Text>

            <Text className="text-lg text-white font-semibold font-exoBold text-center mt-8">
              Connect to lists, not channels! {"\n"}
              Follow your favorite content with one tap
            </Text>

            <TouchableOpacity onPress={handleLogin} className="bg-white shadow-md shadow-zinc-300 rounded-lg px-4 w-3/4 mx-auto py-3 mt-5" >
              <View className="flex flex-row items-center justify-center gap-2">
                <GoogleIcon width={20} height={20} />
                <Text className="">
                  Continue with Google
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
    </SafeAreaView>
  )
}

export default SignIn