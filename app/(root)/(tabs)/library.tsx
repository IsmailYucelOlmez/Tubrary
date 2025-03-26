import { View, Text } from 'react-native'
import React from 'react'
import ListChannelTab from '@/components/ListChannelTab'

const library = () => {
  return (
    <View>
      <Text>Followed Playlists</Text>

      <ListChannelTab option1={'channel'}/>
      
    </View>
  )
}

export default library