import { Card, ListGroup } from "react-bootstrap";
import AvatarOrIcon from "./AvatarOrIcon";
import { BsPersonFill } from "react-icons/bs";
import { IconType } from "react-icons";

type ContactItem = {
    id: number;
    name: string;
    avatar?: string;
    icon?: IconType;
    online?: boolean;
};

type ContactListProps = {
    items: ContactItem[];
};

export default function ChatEntityList({ items }: ContactListProps) {

    return (
        <Card className="border-0 shadow-none">
            <ListGroup variant="flush">
                {items.map((item) => (
                    <ListGroup.Item key={item.id} className="sidebar-item border-0 d-flex align-items-center gap-2">
                        {/* 在線狀態 */}
                        <div className="sidebar-icon  position-relative">
                            <AvatarOrIcon
                                imgSrc={item.avatar}
                                icon={item.icon || BsPersonFill}
                                size={28}
                            />

                            {item.online && (
                                <span
                                    className="position-absolute bottom-0 end-0 bg-success rounded-circle border border-white"
                                />
                            )}
                        </div>
                        <span className="sidebar-label fw-semibold">{item.name}</span>
                    </ListGroup.Item>
                ))}
            </ListGroup>

        </Card>
    );
}