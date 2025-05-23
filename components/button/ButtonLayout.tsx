import React from 'react';
import { Platform, TouchableOpacity, View } from 'react-native';

interface ButtonLayoutProps {
  onPress: () => void; // Chỉ cần onPress để xử lý chuyển trang
}

export function ButtonLayout({ onPress }: ButtonLayoutProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      className={`
        absolute -top-8 justify-center items-center
        ${Platform.OS === 'ios' ? 'shadow-lg shadow-black/30' : 'elevation-5'}
      `}
    >
      <View className="w-15 h-15 rounded-full bg-blue-500 justify-center items-center">
        {/* Bạn có thể đặt icon ở đây nếu muốn */}
      </View>
    </TouchableOpacity>
  );
}
