import { Tabs } from 'expo-router';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        //tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarActiveTintColor: '#F9DC00',
        tabBarInactiveTintColor: 'white',
        tabBarStyle: { backgroundColor: '#D94F72' },
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="live"
        options={{
          title: 'Live',
          tabBarIcon: ({ color, focused }) => (
            <Octicons name={focused ? 'broadcast' : 'broadcast'} size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="result"
        options={{
          title: 'Results',
          tabBarIcon: ({ color, focused }) => (
            <Foundation name={focused ? 'results' : 'results'} size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: 'Contacts',
          tabBarIcon: ({ color, focused }) => (
            <Feather name={focused ? 'phone-call' : 'phone-call'} size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'settings-sharp' : 'settings-sharp'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
