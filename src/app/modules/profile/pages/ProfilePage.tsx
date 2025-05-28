import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProfileHeaderComponent from "../components/ProfileHeaderComponent";
import ProfileSidebarComponent from "../components/ProfileSidebarComponent";
import ProfileMainContentComponent from "../components/ProfileMainContentComponent";

export default function ProfilePage() {
  return (
    <div>
      <ProfileHeaderComponent />
      <Container fluid style={{ backgroundColor: '#f0f2f5', minHeight: 'calc(100vh - 56px)' }}> {/* Assuming header height is around 56px, adjust as needed */}
        <Container className="py-3">
          <Row>
            {/* Sidebar Column */}
            <Col md={5} lg={4} className="d-none d-md-block"> {/* Sidebar hidden on small screens */}
              <ProfileSidebarComponent />
            </Col>

            {/* Main Content Column */}
            <Col md={7} lg={8}>
              <ProfileMainContentComponent />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}