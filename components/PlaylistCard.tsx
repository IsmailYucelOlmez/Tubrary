import { View, Image, Text } from 'react-native'
import React from 'react'
import { Bell, CircleCheck } from 'lucide-react-native'

const PlaylistCard = () => {
  return (
    <View className='flex flex-col rounded-xl'>

      <Image source={require("")} />  

      <View className='flex flex-row justify-between items-center'>
        <View>
            <Text className='text-xl font-exo font-bold'>Playlist Name</Text>
            <Text className='text-sm font-thin'>Channel Name</Text>
        </View>
        <View>
            <Bell size={24} color={'#000'}/>
            <CircleCheck size={24} color={'#000'}/>
        </View>
      </View>
    </View>
  )
}

export default PlaylistCard