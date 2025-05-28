import { UserBasicDto } from "@modules/profile/types/UserBasicDto";
import api from "@services/apiClient";
import { ApiResponse } from "@shared/types/ApiResponse";

export const searchAll = (data: string) =>
  api.get<ApiResponse<UserBasicDto[]>>("/search/search-all", {params: { queryText: data }});