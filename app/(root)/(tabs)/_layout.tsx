import { Tabs } from "expo-router";
import {House, Search, SquareLibrary, User} from "lucide-react-native"

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#2B2D42",
                tabBarShowLabel:false,
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: "#fff",                  
                    borderTopLeftRadius: 20,
                    borderTopRightRadius:20,
                    borderTopColor: "#2B2D42",
                    borderTopWidth: 2,

                },
                
            }} >

            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({focused, color, size }) => (
                        <House size={32} color={'#2B2D42'} strokeWidth={focused ? 2.5:1.5} />
                    ),
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    title: "Search",
                    tabBarIcon: ({focused, color, size }) => (
                        <Search  size={32} stroke={'#2B2D42'} strokeWidth={focused ? 2.5:1.5}/>
                    ),
                }}
            />
            <Tabs.Screen
                name="library"
                options={{
                    title: "Library",
                    tabBarIcon: ({focused, color, size }) => (
                        <SquareLibrary size={32} color={'#2B2D42'} strokeWidth={focused ?  2.5:1.5} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    tabBarIcon: ({focused, color, size }) => (
                        <User size={32} stroke={'#2B2D42'} strokeWidth={focused ? 2.5:1.5}/>
                    ),
                }}
            />
        </Tabs>
    );
}