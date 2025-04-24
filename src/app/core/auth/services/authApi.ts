import api from "@shared/services/apiClient";
import { LoginDto, ApiResponse} from "../types/auth";

export const login = (data: LoginDto) =>
  api.post<ApiResponse<string>>("/auth/login", data);


