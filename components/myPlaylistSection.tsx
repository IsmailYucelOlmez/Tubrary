import { View, Text, FlatList } from 'react-native'
import React from 'react'

const myPlaylistSection = () => {
  return (
    <View className='flex gap-2'>
        <Text className='text-2xl font-bold'>My Playlists</Text>
        <FlatList data={""} renderItem={""} />
    </View>
  )
}

export default myPlaylistSection