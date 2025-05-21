import PostCard from "@shared/components/PostCard";
import CreatePost from "./CreatePost"; // Import the CreatePost component

export default function MainComponent() {
    return (
        <>
            <CreatePost /> {/* Add the CreatePost component here */}
            <PostCard
                avatar="https://scontent.frmq2-2.fna.fbcdn.net/v/t39.30808-1/464413917_9001790416518295_2974144352881980512_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_ohc=WTZwoczCIioQ7kNvwEG0i28&_nc_oc=Admw7SG3FpOOP7Vzd46fM-w7dU1uB4rcEIMnj_RtvSNzAmH0vZhK7aCaoxrC-Tq77ag&_nc_zt=24&_nc_ht=scontent.frmq2-2.fna&_nc_gid=aL6x3nBvKSe6Kg2MDtyWVQ&oh=00_AfJi9MjnDIDr6Y9JqwVYlReqpJzeV4_d6YCsR2_s-2ls3Q&oe=68279A5D"
                author="測試人員"
                time="4 分鐘前"
                content={`為你自己學 Git深入淺出的 Git 教學，教您使用 Git 指令及圖形介面工具，使用 GitHub 與其它人一起工作...`}
            />
            <PostCard
                avatar="https://scontent.frmq2-2.fna.fbcdn.net/v/t39.30808-1/464413917_9001790416518295_2974144352881980512_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_ohc=WTZwoczCIioQ7kNvwEG0i28&_nc_oc=Admw7SG3FpOOP7Vzd46fM-w7dU1uB4rcEIMnj_RtvSNzAmH0vZhK7aCaoxrC-Tq77ag&_nc_zt=24&_nc_ht=scontent.frmq2-2.fna&_nc_gid=aL6x3nBvKSe6Kg2MDtyWVQ&oh=00_AfJi9MjnDIDr6Y9JqwVYlReqpJzeV4_d6YCsR2_s-2ls3Q&oe=68279A5D"
                author="測試人員2"
                time="4 分鐘前"
                content={`身為 DevOps 人員具有 CICD 概念是在基本不過的，但倘若開發人員也了解 CICD 概念...`}
            />
                        <PostCard
                avatar="https://scontent.frmq2-2.fna.fbcdn.net/v/t39.30808-1/464413917_9001790416518295_2974144352881980512_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_ohc=WTZwoczCIioQ7kNvwEG0i28&_nc_oc=Admw7SG3FpOOP7Vzd46fM-w7dU1uB4rcEIMnj_RtvSNzAmH0vZhK7aCaoxrC-Tq77ag&_nc_zt=24&_nc_ht=scontent.frmq2-2.fna&_nc_gid=aL6x3nBvKSe6Kg2MDtyWVQ&oh=00_AfJi9MjnDIDr6Y9JqwVYlReqpJzeV4_d6YCsR2_s-2ls3Q&oe=68279A5D"
                author="測試人員2"
                time="4 分鐘前"
                content={`身為 DevOps 人員具有 CICD 概念是在基本不過的，但倘若開發人員也了解 CICD 概念...`}
            />
                        <PostCard
                avatar="https://scontent.frmq2-2.fna.fbcdn.net/v/t39.30808-1/464413917_9001790416518295_2974144352881980512_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_ohc=WTZwoczCIioQ7kNvwEG0i28&_nc_oc=Admw7SG3FpOOP7Vzd46fM-w7dU1uB4rcEIMnj_RtvSNzAmH0vZhK7aCaoxrC-Tq77ag&_nc_zt=24&_nc_ht=scontent.frmq2-2.fna&_nc_gid=aL6x3nBvKSe6Kg2MDtyWVQ&oh=00_AfJi9MjnDIDr6Y9JqwVYlReqpJzeV4_d6YCsR2_s-2ls3Q&oe=68279A5D"
                author="測試人員2"
                time="4 分鐘前"
                content={`身為 DevOps 人員具有 CICD 概念是在基本不過的，但倘若開發人員也了解 CICD 概念...`}
            />
                        <PostCard
                avatar="https://scontent.frmq2-2.fna.fbcdn.net/v/t39.30808-1/464413917_9001790416518295_2974144352881980512_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_ohc=WTZwoczCIioQ7kNvwEG0i28&_nc_oc=Admw7SG3FpOOP7Vzd46fM-w7dU1uB4rcEIMnj_RtvSNzAmH0vZhK7aCaoxrC-Tq77ag&_nc_zt=24&_nc_ht=scontent.frmq2-2.fna&_nc_gid=aL6x3nBvKSe6Kg2MDtyWVQ&oh=00_AfJi9MjnDIDr6Y9JqwVYlReqpJzeV4_d6YCsR2_s-2ls3Q&oe=68279A5D"
                author="測試人員2"
                time="4 分鐘前"
                content={`身為 DevOps 人員具有 CICD 概念是在基本不過的，但倘若開發人員也了解 CICD 概念...`}
            />
                        <PostCard
                avatar="https://scontent.frmq2-2.fna.fbcdn.net/v/t39.30808-1/464413917_9001790416518295_2974144352881980512_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_ohc=WTZwoczCIioQ7kNvwEG0i28&_nc_oc=Admw7SG3FpOOP7Vzd46fM-w7dU1uB4rcEIMnj_RtvSNzAmH0vZhK7aCaoxrC-Tq77ag&_nc_zt=24&_nc_ht=scontent.frmq2-2.fna&_nc_gid=aL6x3nBvKSe6Kg2MDtyWVQ&oh=00_AfJi9MjnDIDr6Y9JqwVYlReqpJzeV4_d6YCsR2_s-2ls3Q&oe=68279A5D"
                author="測試人員2"
                time="4 分鐘前"
                content={`身為 DevOps 人員具有 CICD 概念是在基本不過的，但倘若開發人員也了解 CICD 概念...`}
            />

            <PostCard
                avatar="https://scontent.frmq2-2.fna.fbcdn.net/v/t39.30808-1/464413917_9001790416518295_2974144352881980512_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_ohc=WTZwoczCIioQ7kNvwEG0i28&_nc_oc=Admw7SG3FpOOP7Vzd46fM-w7dU1uB4rcEIMnj_RtvSNzAmH0vZhK7aCaoxrC-Tq77ag&_nc_zt=24&_nc_ht=scontent.frmq2-2.fna&_nc_gid=aL6x3nBvKSe6Kg2MDtyWVQ&oh=00_AfJi9MjnDIDr6Y9JqwVYlReqpJzeV4_d6YCsR2_s-2ls3Q&oe=68279A5D"
                author="測試人員2"
                time="4 分鐘前"
                content={`身為 DevOps 人員具有 CICD 概念是在基本不過的，但倘若開發人員也了解 CICD 概念...`}
            />


        </>

    );
}