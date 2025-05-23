import React from 'react';
import { Text, View } from 'react-native';
import "../../global.css"; // Đảm bảo global.css đã được cấu hình đúng

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-slate-600 p-4">
      <Text className="text-3xl text-red-200 text-center mb-6">
        Đây là HomePage
      </Text>
    </View>
  );
}
  