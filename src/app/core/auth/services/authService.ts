import api from "@shared/services/apiClient";
import { ApiResponse } from "@shared/types/ApiResponse";
import { LoginDto } from "../types/LoginDto";
import { RegisterDto } from "../types/RegisterDto";

export const loginApi = (data: LoginDto) =>
  api.post<ApiResponse<string>>("/auth/login", data);


export const registerApi = (data: RegisterDto) =>
  api.post<ApiResponse<string>>("/auth/register", data);
