import api from "@shared/services/apiClient";
import { ApiResponse } from "@shared/types/ApiResponse";
import { LoginDto } from "../types/LoginDto";
import { RegisterDto } from "../types/RegisterDto";

export const login = (data: LoginDto) =>
  api.post<ApiResponse<string>>("/auth/login", data);


export const register = (data: RegisterDto) =>
  api.post<ApiResponse<string>>("/auth/register", data);
