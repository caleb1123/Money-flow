import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, TouchableOpacity, View } from 'react-native';

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
          // Tùy chỉnh tabBar để nhóm các tab
          tabBar: ({ state, descriptors, navigation }) => {
            const icons = {
              index: (color) => <IconSymbol size={28} name="house.fill" color={color} />,
              transaction: (color) => <Wallet size={28} color={color} />,
              goals: (color) => <Goal size={28} color={color} />,
              account: (color) => <User size={28} color={color} />,
            };

            return (
              <View className="flex-row items-center justify-between bg-gray-800">
                {/* Vùng 1: Home và Transaction */}
                <View className="flex-row">
                  {state.routes.slice(0, 2).map((route, index) => {
                    const { options } = descriptors[route.key];
                    const isFocused = state.index === index;
                    const color = isFocused ? Colors[colorScheme ?? 'light'].tint : '#ffffff';

                    return (
                      <TouchableOpacity
                        key={route.key}
                        onPress={() => navigation.navigate(route.name)}
                        className="flex-1 items-center justify-center py-4 px-6"
                      >
                        {icons[route.name](color)}
                      </TouchableOpacity>
                    );
                  })}
                </View>

                {/* Khoảng trống ở giữa cho FloatingButton */}
                <View className="w-16" />

                {/* Vùng 2: Goals và Account */}
                <View className="flex-row">
                  {state.routes.slice(2, 4).map((route, index) => {
                    const routeIndex = index + 2; // Điều chỉnh index vì slice từ vị trí 2
                    const { options } = descriptors[route.key];
                    const isFocused = state.index === routeIndex;
                    const color = isFocused ? Colors[colorScheme ?? 'light'].tint : '#ffffff';

                    return (
                      <TouchableOpacity
                        key={route.key}
                        onPress={() => navigation.navigate(route.name)}
                        className="flex-1 items-center justify-center py-4 px-6"
                      >
                        {icons[route.name](color)}
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            );
          },
        }}
      >
        <Tabs.Screen name="index" options={{ title: 'Home' }} />
        <Tabs.Screen name="transaction" options={{ title: 'Transaction' }} />
        <Tabs.Screen name="goals" options={{ title: 'Goals' }} />
        <Tabs.Screen name="account" options={{ title: 'Account' }} />
      </Tabs>
      {/* FloatingButton ở giữa */}
      <FloatingButton
        onPress={handleFloatingButtonPress}
        className={Platform.select({
          ios: 'absolute bottom-16 self-center z-20',
          android: 'absolute bottom-14 self-center z-20',
        })}
      />
    </View>
  );
}