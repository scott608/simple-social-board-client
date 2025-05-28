import React from 'react';
import { Card } from 'react-bootstrap';

const ProfileSidebarComponent: React.FC = () => {
  return (
    <div>
      {/* Intro Section */}
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>Intro</Card.Title>
          <Card.Text>
            Bio placeholder. Add details like work, education, location.
          </Card.Text>
        </Card.Body>
      </Card>

      {/* Photos Section */}
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>Photos</Card.Title>
          {/* Placeholder for photo grid or links */}
          <div className="d-flex flex-wrap">
            {Array.from({ length: 9 }).map((_, idx) => (
              <div
                key={idx}
                style={{
                  width: 'calc(33.333% - 4px)', // Adjust for gap
                  paddingBottom: 'calc(33.333% - 4px)', // Maintain aspect ratio
                  backgroundColor: '#e0e0e0',
                  margin: '2px',
                  borderRadius: '4px',
                }}
              />
            ))}
          </div>
          <Card.Link href="#">See all photos</Card.Link>
        </Card.Body>
      </Card>

      {/* Friends Section */}
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>Friends</Card.Title>
          {/* Placeholder for friend list or links */}
          <div className="text-muted">Friend count placeholder</div>
          <Card.Link href="#">See all friends</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProfileSidebarComponent;
