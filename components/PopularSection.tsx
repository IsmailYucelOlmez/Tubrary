import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const PopularSection = () => {
  return (
    <View className='flex gap-2'>
        <Text className='text-2xl font-bold'>Popular Section</Text>
        <FlatList data={""} renderItem={""} />
    </View>
    
  )
}

export default PopularSection