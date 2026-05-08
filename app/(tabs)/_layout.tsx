import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
  name="saved"
  options={{
    title: 'Saved',
    tabBarIcon: ({ color }) => (
      <IconSymbol size={28} name="bookmark.fill" color={color} />
    ),
  }}
/>
<Tabs.Screen
  name="notifications"
  options={{
    title: 'Alerts',
    tabBarIcon: ({ color }) => (
      <IconSymbol size={28} name="bell.fill" color={color} />
    ),
  }}
/>
<Tabs.Screen
  name="ai"
  options={{
    title: 'AI',
    tabBarIcon: ({ color }) => (
      <IconSymbol size={28} name="sparkles" color={color} />
    ),
  }}
/>
<Tabs.Screen
  name="profile"
  options={{
    title: 'Profile',
    tabBarIcon: ({ color }) => (
      <IconSymbol size={28} name="person.fill" color={color} />
    ),
  }}
/>
<Tabs.Screen
  name="messages"
  options={{
    title: 'Messages',
    tabBarIcon: ({ color }) => (
      <IconSymbol size={28} name="message.fill" color={color} />
    ),
  }}
/>
<Tabs.Screen
  name="trips"
  options={{
    title: 'Trips',
    tabBarIcon: ({ color }) => (
      <IconSymbol size={28} name="truck.box.fill" color={color} />
    ),
  }}
/>
<Tabs.Screen
  name="earnings"
  options={{
    title: 'Earnings',
    tabBarIcon: ({ color }) => (
      <IconSymbol size={28} name="dollarsign.circle.fill" color={color} />
    ),
  }}
/>

<Tabs.Screen
  name="post-load"
  options={{
    title: 'Post',
    tabBarIcon: ({ color }) => (
      <IconSymbol size={28} name="plus.circle.fill" color={color} />
    ),
  }}  
/>

<Tabs.Screen
  name="map"
  options={{
    title: 'Map',
    tabBarIcon: ({ color }) => (
      <IconSymbol size={28} name="map.fill" color={color} />
    ),
  }}
/>
    </Tabs>
  );
}

<Tabs.Screen
  name="fuel"
  options={{
    title: 'Fuel',
    tabBarIcon: ({ color }) => (
      <IconSymbol size={28} name="fuelpump.fill" color={color} />
    ),
  }}
/>