import api from "@shared/services/apiClient";
import { ApiResponse } from "@shared/types/ApiResponse";
import { HomeDto } from "../types/HomeDto";


export const homeApi = (data: string) =>
  api.get<ApiResponse<HomeDto>>("/common/home", {params: { userId: data }});

