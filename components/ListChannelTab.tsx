import { View, Text, Switch } from 'react-native'
import React, { useState } from 'react'

type tabTitleProps={
  option1:string,
  option2?:string
}

const ListChannelTab = ({option1,option2="playlist"}:tabTitleProps) => {

  const [tab,setTab]=useState("playlist");

  const changeTab=(text:string)=>{
    setTab(text);
  }

  return (
    <View className='flex flex-row justify-center items-center gap-2'>
      <Text className=' text-sm font-exoBold '>{option1}</Text>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={tab=='playlist' ? '#81b0ff' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={()=>changeTab(tab=="playlist" ? option1:option2)}
        value={tab=='playlist'}
        className='w-16 h-8'
      />
      <Text className=' text-sm'>{option2}</Text>
    </View>
  )
}

export default ListChannelTab