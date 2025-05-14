import { IconType } from "react-icons";

export interface SelectableItem {
    id: number;
    name: string;
    avatar?: string;
    icon?: IconType;
    online?: boolean;
}
