import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import "../../global.css";
export default function App() {
  return (
  <View className="flex-1 items-center justify-center bg-red-300">
      <Text className="text-3xl text-fuchsia-500 text-center ">
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}