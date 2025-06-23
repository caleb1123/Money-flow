import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, View } from 'react-native';

import { FloatingButton } from '@/components/button/FloatingButton';
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Goal, User, Wallet } from 'lucide-react-native';
import "../../global.css";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const handleFloatingButtonPress = () => {
    console.log('Floating button pressed!');
  };

  return (
    <View className="flex-1 relative">
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarStyle: Platform.select({
            ios: {
              position: 'absolute',
              height: 80,
              paddingBottom: 20,
            },
            android: {
              height: 60,
              paddingBottom: 10,
            },
          }),
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
          }}
        />
        <Tabs.Screen
          name="transaction"
          options={{
            title: 'Transaction',
            tabBarIcon: ({ color }) => (
              <Wallet size={28} color={color} />
            ),
          }}
        />

        {/* Spacer để FloatingButton ở giữa */}
        <Tabs.Screen
          name="spacer"
          options={{
            tabBarButton: () => null, // ẩn tab spacer
          }}
        />

        <Tabs.Screen
          name="goals"
          options={{
            title: 'Goals',
            tabBarIcon: ({ color }) => (
              <Goal size={28} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="account"
          options={{
            title: 'Account',
            tabBarIcon: ({ color }) => <User size={28} color={color} />,
          }}
        />
      </Tabs>
      {/* Điều chỉnh khoảng cách của FloatingButton */}
      <FloatingButton
        onPress={handleFloatingButtonPress}
        className={`absolute self-center z-50 ${Platform.OS === 'ios' ? 'bottom-16' : 'bottom-safe-offset-1'
          }`}
      />

    </View>
  );
}