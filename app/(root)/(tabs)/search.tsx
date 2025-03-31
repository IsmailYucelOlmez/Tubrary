import { View, Text } from 'react-native'
import React from 'react'
import SearchBar from '@/components/SearchBar';
import ListChannelTab from '@/components/ListChannelTab';

const search = () => {


  return (
    <View className="flex flex-col items-center justify-between w-full px-4 rounded-lg mt-5 py-2 mx-2 bg-[#F1FAEE]">
      
      <SearchBar />

      <View className='w-full flex flex-row justify-between items-center'>
        <Text className='font-exo text-lg'>Results</Text>
        <ListChannelTab option1={'channel'}/>
      </View>
      
      
    </View>
  )
}

export default search