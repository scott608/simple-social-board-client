import api from "@shared/services/apiClient";
import { RegisterDto, ApiResponse } from "../types/user";

export const register = (data: RegisterDto) =>
  api.post<ApiResponse<string>>("/api/user/register", data);
