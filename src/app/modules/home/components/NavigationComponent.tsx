import SelectableList from "@shared/components/SelectableList";
import { SelectableItem } from "@shared/types/SelectableItem";
import { FaUserFriends } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { UserBasicDto } from "@modules/profile/types/UserBasicDto";


export default function NavigationComponent(userBasic: UserBasicDto) {
  const navigate = useNavigate();

  const groups = [
    { id: 1, name: userBasic.name },
    { id: 2, name: '朋友', icon: FaUserFriends },
    // { id: 3, name: '動態回顧', icon: FaClock },
    // { id: 4, name: '我的珍藏', icon: FaBookmark },
    // { id: 5, name: '社團', icon: FaUsers },
  ];

  const handleClick = (item: SelectableItem) => {

    // 這裡可以根據 item.id 來決定要跳轉到哪個頁面
    // 例如跳轉到社團頁面
    // navigate(`/group/${item.id}`);
    if (item.id === 1) {
      navigate(`/profile` + `/${userBasic.userId}`);
    }

  };
  return (
    <SelectableList items={groups} onItemClick={handleClick} />
  );
}