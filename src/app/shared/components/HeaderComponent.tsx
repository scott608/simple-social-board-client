
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaBell, FaFacebook, FaFacebookMessenger, FaHome, FaSearch, FaTh, FaUserCircle, FaUserFriends } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import SearchPanel from "@modules/search/components/SearchPanel";
import { useState } from 'react';



export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <Navbar bg="white" className="bg-white border-bottom sticky-top shadow-sm px-3 justify-content-between navbar-height">
      <Container fluid>
        {/* 左側 Logo 與搜尋 */}
        <div className="d-flex align-items-center">
          <FaFacebook color="#1877F2" size={40} className="me-3" />
          <button className="btn" onClick={() => setOpen(true)}><FaSearch /></button>

          {open && <SearchPanel onClose={() => setOpen(false)} />}

        </div>

        {/* 中間導覽圖示 */}
        <Nav className="nav-bar justify-content-between">
          <NavLink to="/home" className={({ isActive }) => `nav-icon ${isActive ? "active" : ""}`}>
            <FaHome size={28} />
          </NavLink>
          <NavLink to="/friends" className={({ isActive }) => `nav-icon ${isActive ? "active" : ""}`}>
            <FaUserFriends size={28} />
          </NavLink>

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