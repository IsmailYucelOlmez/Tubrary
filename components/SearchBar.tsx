import { View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { router, useLocalSearchParams, usePathname } from 'expo-router';
import { useDebouncedCallback } from "use-debounce";
import { Search } from 'lucide-react-native';

const SearchBar = () => {

    const path = usePathname();
  const params = useLocalSearchParams<{ query?: string }>();
  const [search, setSearch] = useState(params.query);

  const debouncedSearch = useDebouncedCallback((text: string) => {
    router.setParams({ query: text });
  }, 1000);

  const handleSearch = (text: string) => {
    setSearch(text);
    debouncedSearch(text);
  };

  return (
    <View className="flex-1 flex flex-row items-center justify-between z-50">
        <TextInput
          value={search}
          onChangeText={handleSearch}
          placeholder="Search for anything"
          className="text-sm font-rubik text-black-300 ml-2 flex-1"
        />

        <TouchableOpacity>
          <Search size={24} color={'#000'} />
        </TouchableOpacity>
      </View>
  )
}

export default SearchBar