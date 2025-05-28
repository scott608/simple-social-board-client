import React from 'react';
import { Card, Form, Button, Image } from 'react-bootstrap';

const ProfileMainContentComponent: React.FC = () => {
  return (
    <div>
      {/* Create Post Section */}
      <Card className="mb-3">
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="createPostTextarea">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="What's on your mind?"
              />
            </Form.Group>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                {/* Add icons for photo/video, feeling/activity etc. later */}
                <Button variant="light" className="me-2">Photo/Video</Button>
                <Button variant="light">Feeling/Activity</Button>
              </div>
              <Button variant="primary">Post</Button>
            </div>
          </Form>
        </Card.Body>
      </Card>

      {/* Posts Section */}
      {/* Placeholder Post 1 */}
      <Card className="mb-3">
        <Card.Header>
          <div className="d-flex align-items-center">
            <Image
              src="https://scontent.frmq2-1.fna.fbcdn.net/v/t1.30497-1/453178253_4715064_...jpg" // Placeholder user image
              roundedCircle
              style={{ width: '40px', height: '40px', marginRight: '10px' }}
            />
            <div>
              <div className="fw-bold">User Name</div>
              <div className="text-muted" style={{ fontSize: '0.9em' }}>Timestamp</div>
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            This is a placeholder for a user's post. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </Card.Text>
          {/* Placeholder for image/video content */}
        </Card.Body>
        <Card.Footer className="d-flex justify-content-around">
          <Button variant="light">Like</Button>
          <Button variant="light">Comment</Button>
          <Button variant="light">Share</Button>
        </Card.Footer>
      </Card>

      {/* Placeholder Post 2 */}
      <Card className="mb-3">
        <Card.Header>
          <div className="d-flex align-items-center">
            <Image
              src="https://scontent.frmq2-1.fna.fbcdn.net/v/t1.30497-1/453178253_4715064_...jpg" // Placeholder user image
              roundedCircle
              style={{ width: '40px', height: '40px', marginRight: '10px' }}
            />
            <div>
              <div className="fw-bold">Another User</div>
              <div className="text-muted" style={{ fontSize: '0.9em' }}>Another Timestamp</div>
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            Another placeholder post. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-around">
          <Button variant="light">Like</Button>
          <Button variant="light">Comment</Button>
          <Button variant="light">Share</Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default ProfileMainContentComponent;
