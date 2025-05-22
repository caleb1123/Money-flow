import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

// Cấu hình Axios instance với baseURL và headers mặc định
const apiClient = axios.create({
  baseURL: 'https://localhost:44345/api/',  // Đặt base URL chung cho tất cả các API
  headers: {
    'Content-Type': 'application/json',  // Header mặc định cho tất cả các yêu cầu API
  }
});

// Interceptor để thêm token vào header cho tất cả các request (trừ login)
apiClient.interceptors.request.use(
  async (config) => {
    // Lấy token từ AsyncStorage hoặc SecureStore
    const token = await AsyncStorage.getItem('token');  // Hoặc dùng SecureStore.getItem()

    if (token && config.url !== 'customers/login') {
      // Thêm token vào header của các yêu cầu, trừ login
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
