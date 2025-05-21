import { Card, Image } from 'react-bootstrap';
import { BsChatDots, BsHandThumbsUp, BsShare, BsThreeDots } from 'react-icons/bs'; // Added BsThreeDots
import { FaGlobeAsia } from 'react-icons/fa'; // Icon for privacy

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
        <Card style={{ marginBottom: '1rem', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>
            {/* Header */}
            <Card.Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 1rem', backgroundColor: 'white', borderBottom: '1px solid #e4e6eb' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Image src={avatar} roundedCircle style={{ width: '40px', height: '40px', marginRight: '0.5rem' }} />
                    <div>
                        <div style={{ fontWeight: 'bold', color: '#050505' }}>{author}</div>
                        <div style={{ fontSize: '0.8rem', color: '#65676b' }}>
                            {time} ・ <FaGlobeAsia style={{ display: 'inline-block', verticalAlign: 'middle' }} />
                        </div>
                    </div>
                </div>
                <div style={{ color: '#65676b', cursor: 'pointer' }}>
                    <BsThreeDots size={20} />
                </div>
            </Card.Header>

            {/* Body */}
            <Card.Body style={{ padding: '1rem' }}>
                <p style={{ marginBottom: '1rem', color: '#050505', fontSize: '0.9375rem' }}>{content}</p>
            </Card.Body>

            {/* Button Row */}
            <Card.Footer style={{ padding: '0.5rem 1rem', backgroundColor: 'white', borderTop: '1px solid #e4e6eb' }}>
                <div style={{ display: 'flex', justifyContent: 'space-around', color: '#65676b', fontWeight: '600' }}>
                    <div role="button" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', padding: '0.5rem', borderRadius: '4px', flexGrow: 1, justifyContent: 'center' }} className="hover-bg-gray">
                        <BsHandThumbsUp size={20} />
                        <span>Like</span>
                    </div>
                    <div role="button" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', padding: '0.5rem', borderRadius: '4px', flexGrow: 1, justifyContent: 'center' }} className="hover-bg-gray">
                        <BsChatDots size={20} />
                        <span>Comment</span>
                    </div>
                    <div role="button" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', padding: '0.5rem', borderRadius: '4px', flexGrow: 1, justifyContent: 'center' }} className="hover-bg-gray">
                        <BsShare size={20} />
                        <span>Share</span>
                    </div>
                </div>
            </Card.Footer>
        </Card>
    );
}

// Add some global styles for hover effect if not already present
// This would typically be in a global CSS file or styled-components setup
const styleSheet = document.createElement("style")
styleSheet.type = "text/css"
styleSheet.innerText = ".hover-bg-gray:hover { background-color: #f0f2f5; }"
document.head.appendChild(styleSheet)
