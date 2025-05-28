// UserInfoDto.ts

import { Gender } from "@shared/types/enum/Gender";

export interface UserInfoDto {
    /** UserId */
    userId: number;
    /** 帳號。 */
    account: string;
    /** 姓名。 */
    name: string;
    /** 信箱。 */
    email: string;
    /** 性別。 */
    gender: Gender;
    /** 出生日期。 */
    birthday: string;
    /** 好友id */
    relation?: string;
}