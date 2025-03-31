import { View, Text } from 'react-native'
import React from 'react'
import ListChannelTab from '@/components/ListChannelTab'

const library = () => {
  return (
    <View className='flex flex-col gap-6 w-full px-4 mt-4 py-2 mx-2 bg-[#F1FAEE]'>
      <Text className='font-exoBold text-2xl'>Followed</Text>

      <ListChannelTab option1={'channel'}/>
      
    </View>
  )
}

export default library