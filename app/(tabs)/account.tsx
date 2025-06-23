import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { ChevronRight } from 'lucide-react-native';
import { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import "../../global.css"; // Đảm bảo global.css đã được cấu hình đúng

export default function AccountScreen() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLogin = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        setIsLoggedIn(true);
      }
    };

    checkLogin();
  }, []);

  // if (!isLoggedIn) {
  //   return (
  //     <View className="flex-1 justify-center items-center text-slate-100 bg-red-300">
  //       <Text className="text-xl mb-4">You are not logged in</Text>
  //       <Button title="Login" onPress={() => router.push('/login/login')} />
  //     </View>
  //   );
  // }

  return (
    <View className="flex-1 items-start bg-white justify-start p-6">
      <View className="flex-row items-center mt-10">
        {/* Avatar */}
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ6th-oTbkDMbDOPGU_kkRMM55lfvRYgM8JA&s',
          }}
          className="w-20 h-20 rounded-full mr-4"
        />

        <View className="flex-col justify-center">
          <View className="flex-row items-center">
            {/* Username */}
            <Text className="text-lg font-semibold text-black">Ryy1507</Text>
            <TouchableOpacity
              onPress={() => {
                if (!isLoggedIn) {
                  router.push('/login/login');
                } else {
                  console.log('Edit username pressed!');
                  // Bạn có thể điều hướng đến màn chỉnh sửa tài khoản nếu muốn
                  // router.push('/account/edit') // ví dụ
                }
              }}

              className="ml-2" // Tailwind margin-left
              accessibilityLabel="Edit Username"
              accessibilityRole="button"
            >
              <ChevronRight
                size={20}
                color="#53a4da"
                testID="edit-username"
              />
            </TouchableOpacity>
          </View>


          {/* Fullname */}
          <Text className="text-gray-500 text-base mt-1">Phan Nguyen Hoai Nam</Text>
        </View>
      </View>
    </View>
  );
}
