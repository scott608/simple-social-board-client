import ChatEntityList from "@shared/components/SelectableList";
import { FaBookmark, FaClock, FaUserFriends, FaUsers } from "react-icons/fa";
// import { ListGroup,Image } from "react-bootstrap";
// import { FaBookmark, FaClock, FaUserFriends, FaUsers } from "react-icons/fa";


const groups = [
  { id: 1, name: '測試人員', avatar: 'https://scontent.frmq2-2.fna.fbcdn.net/v/t39.30808-1/464413917_9001790416518295_2974144352881980512_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_ohc=WTZwoczCIioQ7kNvwEG0i28&_nc_oc=Admw7SG3FpOOP7Vzd46fM-w7dU1uB4rcEIMnj_RtvSNzAmH0vZhK7aCaoxrC-Tq77ag&_nc_zt=24&_nc_ht=scontent.frmq2-2.fna&_nc_gid=aL6x3nBvKSe6Kg2MDtyWVQ&oh=00_AfJi9MjnDIDr6Y9JqwVYlReqpJzeV4_d6YCsR2_s-2ls3Q&oe=68279A5D' },
  { id: 2, name: '朋友',  icon: FaUserFriends },
  { id: 3, name: '動態回顧', icon: FaClock },
  { id: 4, name: '我的珍藏', icon: FaBookmark },
  { id: 5, name: '社團', icon: FaUsers },
];

export default function NavigationComponent() {
  return (
    <>

      <ChatEntityList items={groups} />
    
      {/* <div className="bg-light p-3" style={{ width: '260px', minHeight: '100vh' }}> */}
        {/* 使用者 */}
        {/* <div className="d-flex align-items-center mb-4">
          <Image roundedCircle src="https://scontent.frmq2-2.fna.fbcdn.net/v/t39.30808-1/464413917_9001790416518295_2974144352881980512_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_ohc=WTZwoczCIioQ7kNvwEG0i28&_nc_oc=Admw7SG3FpOOP7Vzd46fM-w7dU1uB4rcEIMnj_RtvSNzAmH0vZhK7aCaoxrC-Tq77ag&_nc_zt=24&_nc_ht=scontent.frmq2-2.fna&_nc_gid=aL6x3nBvKSe6Kg2MDtyWVQ&oh=00_AfJi9MjnDIDr6Y9JqwVYlReqpJzeV4_d6YCsR2_s-2ls3Q&oe=68279A5D" 
          width={40} height={40} className="me-2" />
          <span className="fw-semibold">測試人員</span>
        </div> */}

        {/* ListGroup 菜單 */}
        {/* <ListGroup variant="flush">
          <ListGroup.Item action className="d-flex align-items-center gap-2">
            <FaUserFriends /> 朋友
          </ListGroup.Item>
          <ListGroup.Item action className="d-flex align-items-center gap-2">
            <FaClock /> 動態回顧
          </ListGroup.Item>
          <ListGroup.Item action className="d-flex align-items-center gap-2">
            <FaBookmark /> 我的珍藏
          </ListGroup.Item>
          <ListGroup.Item action className="d-flex align-items-center gap-2">
            <FaUsers /> 社團
          </ListGroup.Item>
        </ListGroup>
      </div> */}
    </>

  );
}