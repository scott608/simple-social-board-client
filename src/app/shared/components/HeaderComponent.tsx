
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { FaBell, FaFacebook, FaFacebookMessenger, FaGamepad, FaHome, FaStore, FaTh, FaUserCircle, FaUserFriends, FaVideo } from 'react-icons/fa';



export default function Header() {

    return (
      <Navbar bg="white" className="bg-white border-bottom sticky-top shadow-sm px-3 justify-content-between navbar-height">
      <Container fluid>
        {/* 左側 Logo 與搜尋 */}
        <div className="d-flex align-items-center">
          <FaFacebook color="#1877F2" size={40} className="me-3" />
          <Form className="d-none d-lg-flex">
            <FormControl
              type="search"
              placeholder="搜尋 Facebook"
              className="rounded-pill px-3"
              style={{ width: '200px' }}
            />
          </Form>
        </div>

        {/* 中間導覽圖示 */}
        <Nav className="d-none d-md-flex mx-auto d-flex justify-content-center gap-4">
          <FaHome size={24} color="#1877F2" />
          <FaUserFriends size={24} />
          <FaVideo size={24} />
          <FaStore size={24} />
          <FaGamepad size={24} />
        </Nav>

        {/* 右側快捷功能 */}
        <div className="d-flex align-items-center gap-3">
          <FaTh size={24} />
          <FaFacebookMessenger size={24} />
          <div className="position-relative">
            <FaBell size={24} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {/**1 */}
            </span>
          </div>
          <FaUserCircle size={30} color="#F7B928" />
        </div>
      </Container>
    </Navbar>
      )
}