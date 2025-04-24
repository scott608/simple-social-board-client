export interface RegisterDto {
  account: string;
  password: string;
  name: string;
}

export interface UserInfo {
  userId: number;
  account: string;
  name: string;
  token: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}
