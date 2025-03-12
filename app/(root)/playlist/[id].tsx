import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const PlayList = () => {

    const { id } = useLocalSearchParams()

  return (
    <View>
      <Text>Property</Text>
    </View>
  )
}

export default PlayList