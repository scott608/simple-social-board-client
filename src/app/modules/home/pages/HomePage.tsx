import { Col, Container, Row } from "react-bootstrap";
import ComplementaryComponent from "../components/ComplementaryComponent";
import MainComponent from "../components/MainComponent";
import NavigationComponent from "../components/NavigationComponent";

export default function HomePage() {
  // Facebook's approximate column widths and responsive behavior:
  // Left Nav: Visible on large screens (lg), typically around 20-25%
  // Main Content: Central column, takes up remaining space on small/medium, narrows on large
  // Right Complementary: Visible on medium/large screens (md, lg), typically around 20-25%

  return (
    <>
      {/* Set a max-width for the content area on very large screens, similar to Facebook */}
      <Container fluid style={{ backgroundColor: '#f0f2f5', minHeight: 'calc(100vh - 60px)' }}> {/* Assuming 60px navbar height */}
        <Row className="justify-content-center gx-0"> {/* gx-0 to remove horizontal gutters if direct children are cols */}
          
          {/* Left Navigation Column */}
          {/* Hidden on screens smaller than lg (992px) */}
          {/* Optimal width for Facebook-like sidebar is around 300-360px. Col-lg-3 gives 25% which is a good start. */}
          <Col lg={3} className="d-none d-lg-block p-0"> {/* p-0 to let NavigationComponent handle its own padding */}
            <div className="sidebar position-sticky" style={{top: '60px'}}> {/* Ensure top matches navbar height */}
              <div className="sidebar-height"> {/* Removed redundant position-sticky here */}
                <NavigationComponent />
              </div>
            </div>
          </Col>

          {/* Main Content Column */}
          {/* Takes full width on xs, adjusts for sidebars on md and lg */}
          {/* Facebook's main content area is typically around 500-700px wide. */}
          {/* On medium screens (md), right sidebar appears. Main content: 12 - 4 (right sidebar) = 8 */}
          {/* On large screens (lg), both sidebars appear. Main content: 12 - 3 (left) - 3 (right) = 6 */}
          <Col xs={12} md={8} lg={6} className="py-3" style={{maxWidth: '700px'}}> {/* Added py-3 for vertical spacing, maxWidth for content */}
            <MainComponent />
          </Col>

          {/* Right Complementary Column */}
          {/* Hidden on screens smaller than md (768px) */}
          {/* Col-md-4 and Col-lg-3. lg=3 is consistent with left. md=4 gives it more space when left is hidden. */}
          <Col md={4} lg={3} className="d-none d-md-block p-0"> {/* p-0 to let ComplementaryComponent handle its own padding */}
            <div className="sidebar position-sticky" style={{top: '60px'}}> {/* Ensure top matches navbar height */}
              <div className="sidebar-height"> {/* Removed redundant position-sticky here */}
                <ComplementaryComponent />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}