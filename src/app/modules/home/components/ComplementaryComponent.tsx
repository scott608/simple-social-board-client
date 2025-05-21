import React from 'react';
import { FaSearch, FaGift, FaUserCircle } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';
import { Image } from 'react-bootstrap'; // Using Image for avatars

// Mock data - replace with actual data or props as needed
const sponsoredItems = [
  { id: 1, title: "Sponsored Ad 1", text: "Check out this amazing product!", link: "#", image: "https://via.placeholder.com/100x70/E8E8E8/000000?Text=Sponsor1" },
  { id: 2, title: "Sponsored Ad 2", text: "Another great offer just for you.", link: "#", image: "https://via.placeholder.com/100x70/E8E8E8/000000?Text=Sponsor2" },
];

const userPages = [
  { id: 1, name: 'My Awesome Page', avatar: 'https://via.placeholder.com/32/FFA500/FFFFFF?Text=P' },
  { id: 2, name: 'Developer Profile', avatar: 'https://via.placeholder.com/32/008000/FFFFFF?Text=D' },
];

const birthdayContacts = [
  { id: 1, name: 'John Doe', daysUntilBirthday: 0 }, // Today
  { id: 2, name: 'Jane Smith', daysUntilBirthday: 3 },
];

const onlineContacts = [
  { id: 1, name: '測試人員1', avatar: 'https://scontent.frmq2-2.fna.fbcdn.net/v/t39.30808-1/464413917_9001790416518295_2974144352881980512_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_ohc=WTZwoczCIioQ7kNvwEG0i28&_nc_oc=Admw7SG3FpOOP7Vzd46fM-w7dU1uB4rcEIMnj_RtvSNzAmH0vZhK7aCaoxrC-Tq77ag&_nc_zt=24&_nc_ht=scontent.frmq2-2.fna&_nc_gid=aL6x3nBvKSe6Kg2MDtyWVQ&oh=00_AfJi9MjnDIDr6Y9JqwVYlReqpJzeV4_d6YCsR2_s-2ls3Q&oe=68279A5D' },
  { id: 2, name: '測試人員2', avatar: 'https://scontent.frmq2-2.fna.fbcdn.net/v/t39.30808-1/464413917_9001790416518295_2974144352881980512_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_ohc=WTZwoczCIioQ7kNvwEG0i28&_nc_oc=Admw7SG3FpOOP7Vzd46fM-w7dU1uB4rcEIMnj_RtvSNzAmH0vZhK7aCaoxrC-Tq77ag&_nc_zt=24&_nc_ht=scontent.frmq2-2.fna&_nc_gid=aL6x3nBvKSe6Kg2MDtyWVQ&oh=00_AfJi9MjnDIDr6Y9JqwVYlReqpJzeV4_d6YCsR2_s-2ls3Q&oe=68279A5D' },
  { id: 3, name: '測試人員3', avatar: 'https://scontent.frmq2-2.fna.fbcdn.net/v/t39.30808-1/464413917_9001790416518295_2974144352881980512_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_ohc=WTZwoczCIioQ7kNvwEG0i28&_nc_oc=Admw7SG3FpOOP7Vzd46fM-w7dU1uB4rcEIMnj_RtvSNzAmH0vZhK7aCaoxrC-Tq77ag&_nc_zt=24&_nc_ht=scontent.frmq2-2.fna&_nc_gid=aL6x3nBvKSe6Kg2MDtyWVQ&oh=00_AfJi9MjnDIDr6Y9JqwVYlReqpJzeV4_d6YCsR2_s-2ls3Q&oe=68279A5D' },
];

// Styles (can be moved to a CSS file or styled-components)
const styles = {
  container: {
    padding: '1rem 0.5rem 1rem 1rem', // Padding for the whole sidebar
    width: '360px', // Typical width for Facebook's right sidebar
    height: 'calc(100vh - 56px)', // Assuming a 56px header
    overflowY: 'auto' as 'auto',
    backgroundColor: '#f0f2f5', // Light gray background for the sidebar
  },
  section: {
    marginBottom: '0.5rem', // Reduced margin between sections
    backgroundColor: 'white', // Card-like background for sections
    borderRadius: '8px',
    padding: '0.75rem',
    boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.75rem',
  },
  sectionTitle: {
    fontSize: '1.0625rem', // ~17px
    fontWeight: '600' as '600',
    color: '#65676b',
  },
  sectionMoreIcon: {
    color: '#65676b',
    cursor: 'pointer',
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem 0.25rem',
    borderRadius: '6px',
    cursor: 'pointer',
    marginBottom: '0.25rem',
  },
  listItemHover: { // Class to be applied on hover for list items
    backgroundColor: '#e4e6eb',
  },
  avatar: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    marginRight: '0.75rem',
  },
  contactAvatar: { // Slightly smaller for contacts list
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    marginRight: '0.75rem',
    position: 'relative' as 'relative',
  },
  onlineIndicator: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#31a24c', // Green for online
    border: '2px solid white',
    position: 'absolute' as 'absolute',
    bottom: '0px',
    right: '0px',
  },
  sponsoredItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem 0',
    textDecoration: 'none',
    color: 'inherit',
  },
  sponsoredImage: {
    width: '100px',
    height: 'auto',
    borderRadius: '8px',
    marginRight: '0.75rem',
  },
  sponsoredTextContainer: {
    flex: 1,
  },
  sponsoredTitle: {
    fontSize: '0.875rem', // ~14px
    fontWeight: '600' as '600',
    color: '#050505',
  },
  sponsoredText: {
    fontSize: '0.8125rem', // ~13px
    color: '#65676b',
  },
  divider: {
    height: '1px',
    backgroundColor: '#ced0d4',
    margin: '0.75rem 0',
  },
  birthdayText: {
    fontSize: '0.9375rem', // ~15px
    color: '#050505',
  },
  contactName: {
    fontSize: '0.9375rem', // ~15px
    color: '#050505',
    fontWeight: '500' as '500',
  }
};

// Helper component for list items to handle hover
const HoverableListItem: React.FC<{ children: React.ReactNode, onClick?: () => void, style?: React.CSSProperties }> = ({ children, onClick, style }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      style={{ ...styles.listItem, ...(hover ? styles.listItemHover : {}), ...style }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
    >
      {children}
    </div>
  );
};


export default function ComplementaryComponent() {
  return (
    <div style={styles.container}>
      {/* Sponsored Section */}
      <div style={styles.section}>
        <h2 style={{...styles.sectionTitle, fontSize: '0.9375rem', color: '#65676b', marginBottom: '0.5rem' }}>Sponsored</h2>
        {sponsoredItems.map(item => (
          <a key={item.id} href={item.link} style={styles.sponsoredItem} className="hover-bg-light">
            <Image src={item.image} style={styles.sponsoredImage} />
            <div style={styles.sponsoredTextContainer}>
              <div style={styles.sponsoredTitle}>{item.title}</div>
              <div style={styles.sponsoredText}>{item.text.substring(0,50) + "..."}</div>
            </div>
          </a>
        ))}
      </div>

      <div style={styles.divider}></div>

      {/* Your Pages and profiles Section */}
      <div style={styles.section}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Your Pages and profiles</h2>
          <BsThreeDots style={styles.sectionMoreIcon} />
        </div>
        {userPages.map(page => (
          <HoverableListItem key={page.id}>
            <Image src={page.avatar} style={styles.avatar} />
            <span style={styles.contactName}>{page.name}</span>
          </HoverableListItem>
        ))}
        {/* Add more page-related actions if needed */}
      </div>

      <div style={styles.divider}></div>
      
      {/* Birthdays Section */}
      <div style={styles.section}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Birthdays</h2>
        </div>
        {birthdayContacts.length > 0 ? birthdayContacts.map(contact => (
          <HoverableListItem key={contact.id}>
            <FaGift size={28} style={{ marginRight: '0.75rem', color: '#1877f2' }} />
            <span style={styles.birthdayText}>
              {contact.daysUntilBirthday === 0 ? 
                `It's ${contact.name}'s birthday today!` : 
                `${contact.name}'s birthday is in ${contact.daysUntilBirthday} days.`}
            </span>
          </HoverableListItem>
        )) : <p style={styles.birthdayText}>No upcoming birthdays.</p>}
      </div>

      <div style={styles.divider}></div>

      {/* Contacts Section */}
      <div style={styles.section}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Contacts</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <FaSearch style={styles.sectionMoreIcon} />
            <BsThreeDots style={styles.sectionMoreIcon} />
          </div>
        </div>
        {onlineContacts.map(contact => (
          <HoverableListItem key={contact.id}>
            <div style={styles.contactAvatar}>
              <Image src={contact.avatar || 'https://via.placeholder.com/28'} roundedCircle style={{width: '100%', height: '100%'}} />
              <div style={styles.onlineIndicator}></div>
            </div>
            <span style={styles.contactName}>{contact.name}</span>
          </HoverableListItem>
        ))}
      </div>
    </div>
  );
}

// Add global style for hover effects on sponsored items (if not handled by a global CSS)
const styleSheet = document.createElement("style")
styleSheet.type = "text/css"
styleSheet.innerText = `
  .hover-bg-light:hover { background-color: #f0f2f5; }
  .hover-bg-gray:hover { background-color: #e4e6eb; } /* For general list items */
`
document.head.appendChild(styleSheet)