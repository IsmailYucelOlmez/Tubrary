import { View } from 'react-native'
import React from 'react'
import SearchBar from '@/components/SearchBar';

const search = () => {


  return (
    <View className="flex flex-row items-center justify-between w-full px-4 rounded-lg bg-accent-100 border border-primary-100 mt-5 py-2">
      
      <SearchBar />
      
    </View>
  )
}

export default search