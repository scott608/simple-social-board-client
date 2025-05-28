import { UserBasicDto } from "@modules/profile/types/UserBasicDto";

export interface HomeDto {
    self: UserBasicDto;
    friends: UserBasicDto[];
}