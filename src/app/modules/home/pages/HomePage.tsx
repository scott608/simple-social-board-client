import { Col, Container, Row } from "react-bootstrap";
import ComplementaryComponent from "../components/ComplementaryComponent";
import MainComponent from "../components/MainComponent";
import NavigationComponent from "../components/NavigationComponent";

export default function HomePage() {


  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={3} className="d-none d-lg-block">
            <div className="sidebar position-sticky">
              <div className="sidebar-height position-sticky">
                <NavigationComponent />
              </div>
            </div>
          </Col>

          <Col xs={12} md={9} lg={6}>
            <MainComponent />
          </Col>

          <Col xs={3} className="d-none d-md-block">
            <div className="sidebar position-sticky">
              <div className="sidebar-height position-sticky">
                <ComplementaryComponent />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>


  );
}