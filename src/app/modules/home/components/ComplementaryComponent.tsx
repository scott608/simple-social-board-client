import ChatEntityList from "@shared/components/SelectableList";
import { FaSearch } from "react-icons/fa";
// import { FaPlus } from "react-icons/fa";


const contacts = [
  { id: 1, name: '測試人員1', avatar: 'https://scontent.frmq2-2.fna.fbcdn.net/v/t39.30808-1/464413917_9001790416518295_2974144352881980512_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_ohc=WTZwoczCIioQ7kNvwEG0i28&_nc_oc=Admw7SG3FpOOP7Vzd46fM-w7dU1uB4rcEIMnj_RtvSNzAmH0vZhK7aCaoxrC-Tq77ag&_nc_zt=24&_nc_ht=scontent.frmq2-2.fna&_nc_gid=aL6x3nBvKSe6Kg2MDtyWVQ&oh=00_AfJi9MjnDIDr6Y9JqwVYlReqpJzeV4_d6YCsR2_s-2ls3Q&oe=68279A5D', online: true },
  { id: 2, name: '測試人員2', avatar: 'https://scontent.frmq2-2.fna.fbcdn.net/v/t39.30808-1/464413917_9001790416518295_2974144352881980512_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_ohc=WTZwoczCIioQ7kNvwEG0i28&_nc_oc=Admw7SG3FpOOP7Vzd46fM-w7dU1uB4rcEIMnj_RtvSNzAmH0vZhK7aCaoxrC-Tq77ag&_nc_zt=24&_nc_ht=scontent.frmq2-2.fna&_nc_gid=aL6x3nBvKSe6Kg2MDtyWVQ&oh=00_AfJi9MjnDIDr6Y9JqwVYlReqpJzeV4_d6YCsR2_s-2ls3Q&oe=68279A5D', online: true },
  { id: 3, name: '測試人員3', avatar: 'https://scontent.frmq2-2.fna.fbcdn.net/v/t39.30808-1/464413917_9001790416518295_2974144352881980512_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_ohc=WTZwoczCIioQ7kNvwEG0i28&_nc_oc=Admw7SG3FpOOP7Vzd46fM-w7dU1uB4rcEIMnj_RtvSNzAmH0vZhK7aCaoxrC-Tq77ag&_nc_zt=24&_nc_ht=scontent.frmq2-2.fna&_nc_gid=aL6x3nBvKSe6Kg2MDtyWVQ&oh=00_AfJi9MjnDIDr6Y9JqwVYlReqpJzeV4_d6YCsR2_s-2ls3Q&oe=68279A5D', online: false },
  { id: 4, name: '測試人員4', avatar: 'https://scontent.frmq2-2.fna.fbcdn.net/v/t39.30808-1/464413917_9001790416518295_2974144352881980512_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_ohc=WTZwoczCIioQ7kNvwEG0i28&_nc_oc=Admw7SG3FpOOP7Vzd46fM-w7dU1uB4rcEIMnj_RtvSNzAmH0vZhK7aCaoxrC-Tq77ag&_nc_zt=24&_nc_ht=scontent.frmq2-2.fna&_nc_gid=aL6x3nBvKSe6Kg2MDtyWVQ&oh=00_AfJi9MjnDIDr6Y9JqwVYlReqpJzeV4_d6YCsR2_s-2ls3Q&oe=68279A5D', online: false },
];

const groups = [
  { id: 1, name: '群組1', avatar: 'https://scontent.frmq2-2.fna.fbcdn.net/v/t39.30808-1/464413917_9001790416518295_2974144352881980512_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_ohc=WTZwoczCIioQ7kNvwEG0i28&_nc_oc=Admw7SG3FpOOP7Vzd46fM-w7dU1uB4rcEIMnj_RtvSNzAmH0vZhK7aCaoxrC-Tq77ag&_nc_zt=24&_nc_ht=scontent.frmq2-2.fna&_nc_gid=aL6x3nBvKSe6Kg2MDtyWVQ&oh=00_AfJi9MjnDIDr6Y9JqwVYlReqpJzeV4_d6YCsR2_s-2ls3Q&oe=68279A5D' },
  { id: 2, name: '群組2', avatar: 'https://scontent.frmq2-2.fna.fbcdn.net/v/t39.30808-1/464413917_9001790416518295_2974144352881980512_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_ohc=WTZwoczCIioQ7kNvwEG0i28&_nc_oc=Admw7SG3FpOOP7Vzd46fM-w7dU1uB4rcEIMnj_RtvSNzAmH0vZhK7aCaoxrC-Tq77ag&_nc_zt=24&_nc_ht=scontent.frmq2-2.fna&_nc_gid=aL6x3nBvKSe6Kg2MDtyWVQ&oh=00_AfJi9MjnDIDr6Y9JqwVYlReqpJzeV4_d6YCsR2_s-2ls3Q&oe=68279A5D' },
  { id: 3, name: '群組3', avatar: 'https://scontent.frmq2-2.fna.fbcdn.net/v/t39.30808-1/464413917_9001790416518295_2974144352881980512_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_ohc=WTZwoczCIioQ7kNvwEG0i28&_nc_oc=Admw7SG3FpOOP7Vzd46fM-w7dU1uB4rcEIMnj_RtvSNzAmH0vZhK7aCaoxrC-Tq77ag&_nc_zt=24&_nc_ht=scontent.frmq2-2.fna&_nc_gid=aL6x3nBvKSe6Kg2MDtyWVQ&oh=00_AfJi9MjnDIDr6Y9JqwVYlReqpJzeV4_d6YCsR2_s-2ls3Q&oe=68279A5D' },
  { id: 4, name: '群組4', avatar: 'https://scontent.frmq2-2.fna.fbcdn.net/v/t39.30808-1/464413917_9001790416518295_2974144352881980512_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_ohc=WTZwoczCIioQ7kNvwEG0i28&_nc_oc=Admw7SG3FpOOP7Vzd46fM-w7dU1uB4rcEIMnj_RtvSNzAmH0vZhK7aCaoxrC-Tq77ag&_nc_zt=24&_nc_ht=scontent.frmq2-2.fna&_nc_gid=aL6x3nBvKSe6Kg2MDtyWVQ&oh=00_AfJi9MjnDIDr6Y9JqwVYlReqpJzeV4_d6YCsR2_s-2ls3Q&oe=68279A5D' },
  { id: 5, name: '群組5', avatar: 'https://scontent.frmq2-2.fna.fbcdn.net/v/t39.30808-1/464413917_9001790416518295_2974144352881980512_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_ohc=WTZwoczCIioQ7kNvwEG0i28&_nc_oc=Admw7SG3FpOOP7Vzd46fM-w7dU1uB4rcEIMnj_RtvSNzAmH0vZhK7aCaoxrC-Tq77ag&_nc_zt=24&_nc_ht=scontent.frmq2-2.fna&_nc_gid=aL6x3nBvKSe6Kg2MDtyWVQ&oh=00_AfJi9MjnDIDr6Y9JqwVYlReqpJzeV4_d6YCsR2_s-2ls3Q&oe=68279A5D' },


];

export default function ComplementaryComponent() {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center m-3">
        <h6 className="fw-bold text-secondary mb-2">聯絡人</h6>
        <FaSearch />
      </div>
      <ChatEntityList items={contacts} />
      <hr className="my-3" />
      <h6 className="fw-bold text-secondary mb-2">群組聊天室</h6>

      <ChatEntityList items={groups} />


    </>
  );
}