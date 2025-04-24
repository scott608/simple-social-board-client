import { Gender } from "@shared/types/enum/Gender";

export interface RegisterDto {
  account: string;
  password: string;
  name: string;
  email: string;
  gender: Gender;
  birthday: string;
}
