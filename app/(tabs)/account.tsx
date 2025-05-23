import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';


export default function AccountScreen() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 👈 mặc định là false

  useEffect(() => {
    const checkLogin = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        setIsLoggedIn(true);
      }
    };

    checkLogin();
  }, []);

  if (!isLoggedIn) {
    return (
      <View className="flex-1 justify-center items-center text-slate-100">
        <Text className="text-xl mb-4">You are not logged in</Text>
        <Button title="Login" onPress={() => router.push('/login/login')} />
      </View>
    );
  }

  return (
    <View className="flex-1 justify-center items-center text-white">
      <Text className="text-2xl">Welcome to your account!</Text>
    </View>
  );
}
