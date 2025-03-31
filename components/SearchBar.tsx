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
    <View className="w-full flex flex-row items-center justify-between rounded-lg bg-accent-100 z-50 border border-primary-100 px-2 py-0.5">
        <TextInput
          value={search}
          onChangeText={handleSearch}
          placeholder="Search playlist or channel"
          className="text-sm font-exo flex-1"
        />

        <TouchableOpacity>
          <Search size={24} color={'#000'} />
        </TouchableOpacity>
      </View>
  )
}

export default SearchBar