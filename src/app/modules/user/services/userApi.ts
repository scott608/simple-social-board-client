import api from "@shared/services/apiClient";
import { LoginDto, RegisterDto, ApiResponse, UserInfo } from "../types/user";

export const login = (data: LoginDto) =>
  api.post<ApiResponse<UserInfo>>("/api/user/login", data);

export const register = (data: RegisterDto) =>
  api.post<ApiResponse<string>>("/api/user/register", data);
