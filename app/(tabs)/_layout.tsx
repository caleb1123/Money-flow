import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, View } from 'react-native'; // Import View từ react-native

import { FloatingButton } from '@/components/button/FloatingButton';
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Goal, User, Wallet } from 'lucide-react-native'; // Loại View ra khỏi import
import "../../global.css";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  // Hàm xử lý khi nhấn nút nổi
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
            ios: { position: 'absolute' },
            default: {},
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
            tabBarIcon: ({ color }) => <Wallet size={28} color={color} />,
          }}
        />
        <Tabs.Screen
          name="goals"
          options={{
            title: 'Goals',
            tabBarIcon: ({ color }) => <Goal size={28} color={color} />,
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
      {/* Đặt FloatingButton bên ngoài Tabs nhưng trong View */}
      <FloatingButton onPress={handleFloatingButtonPress} className="absolute bottom-10 self-center z-20" />
    </View>
  );
}