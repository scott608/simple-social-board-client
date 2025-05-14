import { Button, Container, Nav } from "react-bootstrap";


export default function ProfileHeaderComponent() {


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
                    src="https://scontent.frmq2-1.fna.fbcdn.net/v/t1.30497-1/453178253_4715064_...jpg" // 你的頭像網址
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
                        <h2 className="fw-bold mb-1">林培誌</h2>
                        <div className="text-muted" style={{ fontSize: '15px' }}>
                            1 位朋友
                        </div>
                    </div>

                    {/* 右側：三顆按鈕 */}
                    <div className="d-flex gap-2 mt-4 mt-md-0">
                        <Button variant="primary">加朋友</Button>
                        <Button variant="outline-secondary">發送訊息</Button>
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