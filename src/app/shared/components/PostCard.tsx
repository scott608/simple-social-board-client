import { Card, Image } from 'react-bootstrap';
import { BsChatDots, BsHandThumbsUp, BsShare } from 'react-icons/bs';
import { LiaFacebookMessenger } from 'react-icons/lia';

type PostCardProps = {
    avatar: string;
    author: string;
    time: string;
    content: string;

};

export default function PostCard({
    avatar,
    author,
    time,
    content,
}: PostCardProps) {
    return (
        <Card className="mb-3 shadow-sm">
            {/* Header */}
            <Card.Header className="d-flex justify-content-between align-items-start bg-white border-bottom-0">
                <div className="d-flex align-items-center">
                    <Image src={avatar} roundedCircle width={40} height={40} className="me-2" />
                    <div>
                        <div className="fw-bold">{author}</div>
                        <div className="text-muted" style={{ fontSize: '0.8rem' }}>{time} ・🌐</div>
                    </div>
                </div>
                <div className="text-muted">⋯</div>
            </Card.Header>

            {/* Body */}
            <Card.Body>
                <p className="mb-3">{content}</p>
            </Card.Body>


            {/* Button Row */}
            <Card.Footer className="bg-white border-top">
                <div className="d-flex justify-content-around text-muted fw-semibold">
                    <div role="button" className="d-flex align-items-center gap-2 hover-primary">
                        <BsHandThumbsUp />
                        <span>讚</span>
                    </div>
                    <div role="button" className="d-flex align-items-center gap-2 hover-primary">
                        <BsChatDots />
                        <span>留言</span>
                    </div>
                    <div role="button" className="d-flex align-items-center gap-2 hover-primary">
                        <LiaFacebookMessenger />
                        <span>傳送</span>
                    </div>
                    <div role="button" className="d-flex align-items-center gap-2 hover-primary">
                        <BsShare />
                        <span>分享</span>
                    </div>
                </div>
            </Card.Footer>
        </Card>
    );
}
