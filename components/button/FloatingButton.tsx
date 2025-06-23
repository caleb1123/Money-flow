import { Plus } from 'lucide-react-native';
import React from 'react';
import { Platform, StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import "../../global.css"; // Đảm bảo Tailwind CSS đã được cấu hình đúng
interface FloatingButtonProps {
  onPress: () => void;
  className?: string; // Thêm prop để override className nếu cần
  style?: StyleProp<ViewStyle>;
}

export function FloatingButton({ onPress, className }: FloatingButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      className={`
        absolute
        ${Platform.OS === 'ios' ? 'bottom-10' : 'bottom-5'}
        self-center
        w-[60px] h-[60px]
        rounded-full
        bg-blue-500
        justify-center items-center
        shadow-lg shadow-black/30
        elevation-5
        ${className || ''}`} // Cho phép override className từ bên ngoài
    >
      <Plus size={28} color="white" />
    </TouchableOpacity>
  );
}