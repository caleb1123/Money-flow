import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';
import { login } from '../../api/AuthenAPI'; // Import hàm login từ AuthenAPI.js
import "../../global.css"; // Đảm bảo global.css đã được cấu hình đúng

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Hàm xử lý đăng nhập
  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert('Error', 'Please fill in both fields');
      return;
    }

    try {
      // Gọi API đăng nhập với email (sử dụng username) và password
      const response = await login(username, password); // Gọi hàm login từ AuthenAPI.js

      // Kiểm tra nếu API trả về dữ liệu đúng
      if (response && response.data) {
        const token = response.data;  // Token trong response
        if (token) {
          // Lưu token vào localStorage (Trên Web)
          localStorage.setItem('token', token);  // Sử dụng localStorage.setItem thay vì setItemAsync
          Alert.alert('Login Successful', `Welcome, ${username}!`);
        } else {
          Alert.alert('Error', 'No token returned from server');
        }

      } else {
        Alert.alert('Error', 'Invalid response from server');
      }
    } catch (error) {
      // Xử lý lỗi khi đăng nhập thất bại
      Alert.alert('Login Failed', 'An error occurred while logging in');
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-red-300 p-4">
      <Text className="text-3xl text-fuchsia-500 text-center mb-6">
        Login
      </Text>

      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
        className="w-full p-4 mb-4 border border-gray-300 rounded-lg bg-white text-lg"
      />

      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
        className="w-full p-4 mb-8 border border-gray-300 rounded-lg bg-white text-lg"
      />

      <Button title="Login" onPress={handleLogin} color="#4CAF50" />

      <StatusBar style="auto" />
    </View>
  );
}
