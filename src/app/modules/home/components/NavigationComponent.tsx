import SelectableList from "@shared/components/SelectableList";
import { SelectableItem } from "@shared/types/SelectableItem";
import { FaUserFriends, FaUsers, FaStore, FaTv, FaHistory } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const navigationItems = [
  { id: 1, name: '測試人員' }, // Assuming this is the user's profile
  { id: 2, name: 'Friends', icon: FaUserFriends },
  { id: 3, name: 'Groups', icon: FaUsers },
  { id: 4, name: 'Marketplace', icon: FaStore },
  { id: 5, name: 'Watch', icon: FaTv },
  { id: 6, name: 'Memories', icon: FaHistory },
];

export default function NavigationComponent() {
  const navigate = useNavigate();

  const handleClick = (item: SelectableItem) => {
    if (item.id === 1) {
      navigate(`/profile`);
    } else {
      console.log(`Clicked on ${item.name}`);
      // For other items, you can implement navigation later
      // navigate(`/${item.name.toLowerCase()}`);
    }
  };

  return (
    <SelectableList items={navigationItems} onItemClick={handleClick} />
  );
}