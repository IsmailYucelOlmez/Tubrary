import { View, Text, TouchableOpacity, Image, Switch } from 'react-native'
import React, { useState } from 'react'
import { useGlobalContext } from '@/lib/provider'
import { logout } from '@/lib/appwrite';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BellRing, Coffee, Languages, LogOut, SunMoon } from 'lucide-react-native';
import Divider from '@/components/Divider';
import TrIcon from '../../../assets/images/icons/Turkey.svg'
import EnIcon from '../../../assets/images/icons/UK.svg'

const profile = (navigation: NativeStackNavigationProp<any>) => {

  const {user, refetch} = useGlobalContext();
  const [theme,setTheme]=useState('light')
  const [language,setLanguage]=useState('tr')

  const toggleLang=()=>{

    setLanguage(language==='tr'?'en':'tr')
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const handleLogout =async () => {
    const result = await logout();

    if(result) {
      alert('Logout success');
      refetch();
    }else{
      alert('Logout failed');
    }
  }

  return (
    <View className='flex flex-col justify-center gap-12 mt-6 mx-4'>

      <View className='flex flex-row gap-6'>
        
        <Image source={{uri: user?.avatar}} className="size-20 relative rounded-full border border-black"/>
        <View className='flex justify-center gap-1'>
          
          <Text className='text-lg font-semibold'>{user?.name}</Text>
          <Text className='text-sm'>{user?.email}</Text>
        </View> 
      </View>

      <View className='flex '>

      <TouchableOpacity onPress={() => handleLogout()} className='flex flex-row justify-between items-center px-2 py-1'>
        <View className='flex flex-row items-center gap-2'>
          <SunMoon size={24} color={'#000'}/>
          <Text>Theme</Text>
        </View>
        
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={theme=='light' ? '#81b0ff' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleTheme}
          value={theme=='light'}
          className='w-16 h-8'
        />
      </TouchableOpacity>

      <Divider/>

      <TouchableOpacity onPress={() => handleLogout()} className='flex flex-row justify-between items-center px-2 py-1'>
        <View className='flex flex-row items-center gap-2'>
          <BellRing size={24} color={'#000'}/>
          <Text>Notification</Text>
        </View>
        
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={theme=='light' ? '#81b0ff' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleTheme}
          value={theme=='light'}
          className='w-16 h-8'
        />
      </TouchableOpacity>

      <Divider/>

      <TouchableOpacity onPress={() => toggleLang()} className='flex flex-row justify-between items-center  px-2 py-1'>
        <View className='flex flex-row items-center gap-2'>
          <Languages size={24} color={'#000'}/>
          <Text>Language</Text>
        </View>

        {language==='tr' ? <TrIcon width={25} height={25} /> : <EnIcon width={25} height={25} />}
        
          
      </TouchableOpacity>

      <Divider/>

      <TouchableOpacity onPress={() => handleLogout()} className='flex flex-row justify-between items-center px-2 py-1'>
        <View className='flex flex-row items-center gap-2'>
          <Coffee size={24} color={'#000'}/>
          <Text>Buy Me a Coffee</Text>
        </View>
          
      </TouchableOpacity>

      <Divider/>

      <TouchableOpacity onPress={() => handleLogout()} className='flex flex-row justify-between items-center px-2 py-1'>
        <View className='flex flex-row items-center gap-2'>
          <LogOut size={24} color={'#000'}/>   
          <Text>Log Out</Text>
        </View>
          
      </TouchableOpacity>

      <Divider/>

      </View>

      <View>
        <Text className='text-center'>You can use our Chrome plug-in on the Web</Text>
      </View>
    </View>
  )
}

export default profile