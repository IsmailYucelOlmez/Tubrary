import { View } from 'react-native'
import React from 'react'
import SearchBar from '@/components/SearchBar';
import ListChannelTab from '@/components/ListChannelTab';

const search = () => {


  return (
    <View className="flex flex-row items-center justify-between w-full px-4 rounded-lg bg-accent-100 border border-primary-100 mt-5 py-2 mx-2">
      
      <SearchBar />

      <ListChannelTab option1={'channel'}/>
      
    </View>
  )
}

export default search