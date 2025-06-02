import api from "@shared/services/apiClient";
import { ApiResponse } from "@shared/types/ApiResponse";
import { UserInfoDto } from "../types/UserInfoDto";


export const userProfileApi = (userId: string, friendUserId: string) =>
  api.get<ApiResponse<UserInfoDto>>("/profile/getUserProfile", { 
    params: { 
      userId: userId, friendUserId: friendUserId 
    } });

