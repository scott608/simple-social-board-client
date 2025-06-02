import { Button, Container, Nav } from "react-bootstrap";
import { UserInfoDto } from "../types/UserInfoDto";

type Props = {
    profileData?: UserInfoDto;
};

export default function ProfileHeaderComponent({ profileData }: Props) {


    return (
        <div className="bg-white position-relative">
            {/* 封面區塊 */}
            <div style={{ height: '320px', backgroundColor: '#c5e1b4' }} />

            {/* 大頭貼 */}
            <div
                className="position-absolute rounded-circle overflow-hidden"
                style={{
                    width: '176px',
                    height: '176px',
                    top: '245px',
                    left: '16px',
                    zIndex: 2,
                    border: '4px solid white',
                    backgroundColor: '#f0f2f5',
                }}
            >
                <img
                    src="https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/460301204_8245156202264557_4239454156750310941_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=BjSgy-4yeg4Q7kNvwFaggj1&_nc_oc=AdlipFzOLZFjXiYRbdritPND781U5Mvw4VqPZI1oDw-U_y7qE7r-lAaANqmUfzg1h1M&_nc_zt=23&_nc_ht=scontent.ftpe8-2.fna&_nc_gid=Tk1-vVAuI-0MjEYC-yO_jg&oh=00_AfLFyW-Ihl8K3SvPtH_0wm6WlI0akiWEH7MT4L2qXLi69A&oe=68434573" // 你的頭像網址
                    width="100%"
                    height="100%"
                    style={{ objectFit: 'cover' }}
                />
            </div>


            {/* 名稱與操作區塊 */}
            <Container className="pt-5 mt-4">
                <div className="d-flex justify-content-between align-items-end flex-wrap">
                    {/* 左側：名稱與朋友數 */}
                    <div className="pt-4 ps-2" style={{ marginLeft: '180px' }}>
                        <h2 className="fw-bold mb-1">{profileData?.name}</h2>
                        <div className="text-muted" style={{ fontSize: '15px' }}>
                            1 位朋友
                        </div>
                    </div>

                    {/* 右側：三顆按鈕 */}
                    <div className="d-flex gap-2 mt-4 mt-md-0">
                        {profileData?.relation === 'P' ? (
                            <>
                                <Button variant="primary">編輯個人檔案</Button>
                                <Button variant="outline-secondary">查看活動日誌</Button>

                            </>)
                            : (<>
                                <Button variant="primary">加朋友</Button>
                                <Button variant="outline-secondary">發送訊息</Button>
                            </>
                            )
                        }

                    </div>
                </div>

                {/* Tabs 選單 */}
                <Nav variant="tabs" defaultActiveKey="/posts" className="mt-3 border-bottom">
                    <Nav.Item>
                        <Nav.Link href="/posts">貼文</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/about">關於</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/friends">朋友</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/photos">相片</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/videos">影片</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/checkins">打卡動態</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/more">更多</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </div>
    );
}