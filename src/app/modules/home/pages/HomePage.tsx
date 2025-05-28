import { Col, Container, Row } from "react-bootstrap";
import ComplementaryComponent from "../components/ComplementaryComponent";
import MainComponent from "../components/MainComponent";
import NavigationComponent from "../components/NavigationComponent";
import { useHome } from "../hooks/useHome";
import { useAuth } from "app/core/auth/hooks/useAuth";

export default function HomePage() {
  const { user } = useAuth();
  // const { results, loading } = useHome(userId);
  const { results } = useHome(user?.userId);


  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={3} className="d-none d-lg-block">
            <div className="sidebar position-sticky">
              <div className="sidebar-height position-sticky">
                {results && <NavigationComponent {...results.self} />}
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