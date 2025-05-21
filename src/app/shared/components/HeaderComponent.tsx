import React from 'react';
import { Container, Nav, Navbar, Form, InputGroup, Button } from 'react-bootstrap';
import { FaBell, FaFacebook, FaFacebookMessenger, FaHome, FaSearch, FaTh, FaUserCircle, FaUserFriends, FaTv, FaUsers } from 'react-icons/fa';
import { IoGameController } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

// Custom styles for header elements (can be moved to a CSS/SCSS file)
const styles = {
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f0f2f5', // Light gray background
    borderRadius: '50px', // Rounded corners
    padding: '0.25rem 0.75rem', // Padding inside search container
    height: '40px',
  },
  searchInput: {
    backgroundColor: 'transparent',
    border: 'none',
    boxShadow: 'none', // Remove Bootstrap's default focus shadow
    paddingLeft: '0.5rem',
    fontSize: '0.9rem',
    width: '220px', // Adjust as needed
  },
  actionIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#e4e6eb', // Default background for action icons
    color: '#050505', // Default icon color
    cursor: 'pointer',
    textDecoration: 'none',
  },
  actionIconHover: { // To be applied on hover
    backgroundColor: '#d8dadf', // Darker gray on hover
  },
   navIconWrapper: { // For centering and padding of central nav icons
    padding: '0 0.5rem', // Reduce horizontal padding for more icons
  }
};

// Helper component for action icons in the right section
const ActionButton: React.FC<{ icon: React.ReactNode, title: string, onClick?: () => void, className?: string, hasBadge?: boolean, badgeCount?: number | string }> = 
  ({ icon, title, onClick, className, hasBadge, badgeCount }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <div 
      className={`position-relative ${className || ''}`}
      title={title}
      style={{ ...styles.actionIcon, ...(isHovered ? styles.actionIconHover : {}) }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      {icon}
      {hasBadge && (
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{fontSize: '0.6em', padding: '0.3em 0.5em'}}>
          {badgeCount || ''}
        </span>
      )}
    </div>
  );
};


export default function Header() {
  return (
    <Navbar bg="white" className="bg-white border-bottom sticky-top shadow-sm px-md-4 px-2 justify-content-between navbar-height" style={{ height: '56px' }}>
      <Container fluid className="d-flex justify-content-between align-items-center">
        {/* Left Section: Logo and Search */}
        <div className="d-flex align-items-center">
          <NavLink to="/home">
            <FaFacebook color="#0866FF" size={40} className="me-2" />
          </NavLink>
          <div style={styles.searchContainer} className="d-none d-md-flex"> {/* Hide search on xs screens */}
            <FaSearch color="#606770" size={16} />
            <Form.Control
              type="search"
              placeholder="Search Facebook"
              className="ms-2"
              style={styles.searchInput}
            />
          </div>
           {/* Search icon button for small screens */}
          <Button variant="light" className="d-md-none rounded-circle p-2" style={{backgroundColor: '#e4e6eb', border: 'none'}}>
            <FaSearch color="#050505" size={18} />
          </Button>
        </div>

        {/* Center Section: Navigation Icons - Hidden on sm and below, flex on md and up */}
        <Nav className="mx-auto d-none d-md-flex justify-content-center align-items-center flex-grow-1" style={{ maxWidth: '680px' }}>
          <NavLink to="/home" className={({ isActive }) => `nav-icon ${isActive ? "active" : ""}`} title="Home" style={styles.navIconWrapper}>
            <FaHome size={28} />
          </NavLink>
          <NavLink to="/friends" className={({ isActive }) => `nav-icon ${isActive ? "active" : ""}`} title="Friends" style={styles.navIconWrapper}>
            <FaUserFriends size={28} />
          </NavLink>
          <NavLink to="/watch" className={({ isActive }) => `nav-icon ${isActive ? "active" : ""}`} title="Watch" style={styles.navIconWrapper}>
            <FaTv size={28} />
          </NavLink>
          <NavLink to="/groups" className={({ isActive }) => `nav-icon ${isActive ? "active" : ""}`} title="Groups" style={styles.navIconWrapper}>
            <FaUsers size={28} />
          </NavLink>
          <NavLink to="/gaming" className={({ isActive }) => `nav-icon ${isActive ? "active" : ""}`} title="Gaming" style={styles.navIconWrapper}>
            <IoGameController size={28} />
          </NavLink>
        </Nav>

        {/* Right Section: Quick Actions & Profile */}
        <div className="d-flex align-items-center gap-2">
          <ActionButton icon={<FaTh size={20} />} title="Menu" className="d-none d-lg-flex" /> {/* Often hidden on smaller right sections */}
          <ActionButton icon={<FaFacebookMessenger size={20} />} title="Messenger" />
          <ActionButton icon={<FaBell size={20} />} title="Notifications" hasBadge badgeCount="1" />
          <ActionButton icon={<FaUserCircle size={22} />} title="Account" /> {/* Using FaUserCircle for Account/Profile */}
        </div>
      </Container>
    </Navbar>
  );
}