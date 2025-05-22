import apiClient from './apiClient';

// Hàm đăng nhập
export const login = async (email, password) => {
  try {
    // Gửi yêu cầu POST với dữ liệu email và password
    const response = await apiClient.post('customers/login', {
      email: email,
      password: password
    });

    // Nếu đăng nhập thành công, trả về dữ liệu từ response
    return response.data;
  } catch (error) {
    // Nếu có lỗi, ném lỗi để xử lý ở nơi gọi API
    throw error;
  }
};