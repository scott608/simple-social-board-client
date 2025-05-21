import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, useLocation } from 'react-router-dom'; // MemoryRouter for NavLink testing
import HeaderComponent from './HeaderComponent';

// Mock child components or external dependencies if necessary
// For instance, if SearchPanel was still in use and complex:
// jest.mock('@modules/search/components/SearchPanel', () => () => <div data-testid="search-panel-mock" />);

// Helper to display current path for debugging NavLink active states
const LocationDisplay = () => {
  const location = useLocation();
  return <div data-testid="location-display">{location.pathname}</div>;
};

describe('HeaderComponent', () => {
  // Helper function to render with MemoryRouter
  const renderWithRouter = (initialEntries = ['/home']) => {
    return render(
      <MemoryRouter initialEntries={initialEntries}>
        <HeaderComponent />
        {/* <LocationDisplay /> */} {/* Optional: for debugging active route */}
      </MemoryRouter>
    );
  };

  // 1. Rendering
  describe('Rendering', () => {
    test('renders without crashing', () => {
      renderWithRouter();
      expect(screen.getByRole('navigation')).toBeInTheDocument(); // Navbar role
    });

    test('renders the Facebook logo', () => {
      renderWithRouter();
      // The logo is an SVG within a NavLink. Check for the link to /home and the SVG.
      const logoLink = screen.getByRole('link', { name: /facebook/i }); // Assuming NavLink to /home has an accessible name or contains the SVG
      expect(logoLink).toBeInTheDocument();
      expect(logoLink.querySelector('svg[color="#0866FF"]')).toBeInTheDocument(); // FaFacebook
    });
  });

  // 2. Search Functionality
  describe('Search Functionality', () => {
    describe('Desktop/Tablet View (Larger Screens)', () => {
      beforeAll(() => {
        // Mock window.matchMedia for Bootstrap's responsive behavior if needed,
        // or rely on class checks for elements that hide/show.
        // For simplicity, we'll check for the presence of elements with d-md-flex.
      });

      test('renders the visible search input field and icon', () => {
        renderWithRouter();
        const searchInput = screen.getByPlaceholderText('Search Facebook');
        expect(searchInput).toBeInTheDocument();
        // Check if its parent container is visible on md+ screens
        expect(searchInput.closest('.d-md-flex')).toBeInTheDocument();
        
        // Check for the search icon within the search container
        const searchContainer = searchInput.closest('div[style*="background-color: rgb(240, 242, 245)"]'); // #f0f2f5
        expect(searchContainer).not.toBeNull();
        if (searchContainer) {
          expect(searchContainer.querySelector('svg')).toBeInTheDocument(); // FaSearch
        }
      });
    });

    describe('Mobile View (Smaller Screens)', () => {
      test('renders the search icon button', () => {
        renderWithRouter();
        // The full search input is hidden, and a search button is shown
        const searchButtonMobile = screen.getByRole('button', { name: /search/i }); // Check for a button with "Search" accessible name
        expect(searchButtonMobile).toBeInTheDocument();
        // Check if it's the one visible on smaller screens
        expect(searchButtonMobile).toHaveClass('d-md-none');
        expect(searchButtonMobile.querySelector('svg')).toBeInTheDocument(); // FaSearch
      });
    });
  });

  // 3. Center Navigation Icons
  describe('Center Navigation Icons', () => {
    const navItems = [
      { name: 'Home', path: '/home', iconTestId: 'FaHome' }, // Using a simple test id for icon presence
      { name: 'Friends', path: '/friends', iconTestId: 'FaUserFriends' },
      { name: 'Watch', path: '/watch', iconTestId: 'FaTv' },
      { name: 'Groups', path: '/groups', iconTestId: 'FaUsers' },
      { name: 'Gaming', path: '/gaming', iconTestId: 'IoGameController' },
    ];

    navItems.forEach(item => {
      test(`renders "${item.name}" NavLink with correct href and title`, () => {
        renderWithRouter();
        const navLink = screen.getByRole('link', { name: item.name });
        expect(navLink).toBeInTheDocument();
        expect(navLink).toHaveAttribute('href', item.path);
        expect(navLink).toHaveAttribute('title', item.name);
        // Check for icon presence (very basic, assumes icon component renders an svg)
        expect(navLink.querySelector('svg')).toBeInTheDocument(); 
      });

      test(`"${item.name}" NavLink has active style when on its route`, () => {
        renderWithRouter([item.path]); // Navigate to the item's path
        const navLink = screen.getByRole('link', { name: item.name });
        // The 'active' class is applied by NavLink and styled in index.scss
        expect(navLink).toHaveClass('active');
        // Check for a more specific style if needed, e.g., color or border
        // expect(getComputedStyle(navLink).getPropertyValue('border-bottom-color')).toBe('rgb(8, 102, 255)'); // #0866FF
      });

      test(`"${item.name}" NavLink does not have active style when on another route`, () => {
        renderWithRouter(['/other-route']); // Navigate to a different path
        const navLink = screen.getByRole('link', { name: item.name });
        expect(navLink).not.toHaveClass('active');
      });
    });

     test('center navigation is hidden on smaller screens', () => {
        renderWithRouter();
        const homeNavLink = screen.getByRole('link', { name: 'Home' });
        // The parent Nav element has 'd-none d-md-flex'
        expect(homeNavLink.closest('.d-md-flex')).toHaveClass('d-none');
    });
  });

  // 4. Right Section Icons
  describe('Right Section Icons', () => {
    const rightIcons = [
      { title: 'Menu', iconTestId: 'FaTh', className: 'd-none d-lg-flex' }, // Menu is hidden on smaller right sections
      { title: 'Messenger', iconTestId: 'FaFacebookMessenger' },
      { title: 'Notifications', iconTestId: 'FaBell', hasBadge: true },
      { title: 'Account', iconTestId: 'FaUserCircle' },
    ];

    rightIcons.forEach(item => {
      test(`renders "${item.title}" icon with correct title`, () => {
        renderWithRouter();
        const iconButton = screen.getByTitle(item.title);
        expect(iconButton).toBeInTheDocument();
        expect(iconButton.querySelector('svg')).toBeInTheDocument(); // Basic check for SVG icon

        if (item.className) {
            // Check if the icon container or its parent has the responsive classes
            // The ActionButton itself is a div, so we check its classes or a parent if structure is different
            expect(iconButton).toHaveClass(...item.className.split(' '));
        }

        if (item.hasBadge) {
          expect(iconButton.querySelector('.badge')).toBeInTheDocument();
          expect(screen.getByText('1')).toBeInTheDocument(); // Assuming badgeCount="1" from component
        }
      });

      test(`"${item.title}" icon has hover effect styling`, () => {
        renderWithRouter();
        const iconButton = screen.getByTitle(item.title);
        // Initial style (backgroundColor: '#e4e6eb' -> rgb(228, 230, 235))
        expect(iconButton).toHaveStyle('background-color: rgb(228, 230, 235)');
        fireEvent.mouseEnter(iconButton);
        // Hover style (backgroundColor: '#d8dadf' -> rgb(216, 218, 223))
        expect(iconButton).toHaveStyle('background-color: rgb(216, 218, 223)');
        fireEvent.mouseLeave(iconButton);
        expect(iconButton).toHaveStyle('background-color: rgb(228, 230, 235)');
      });
    });
  });
  
  // 5. Responsiveness (Basic Checks) - some covered above
  describe('Responsiveness (General)', () => {
    test('full search input is hidden on small screens (class check)', () => {
        renderWithRouter();
        const searchInput = screen.getByPlaceholderText('Search Facebook');
        expect(searchInput.closest('div[style*="background-color: rgb(240, 242, 245)"]')).toHaveClass('d-none', 'd-md-flex');
    });

    test('center navigation icons are hidden on small screens (class check)', () => {
        renderWithRouter();
        const homeNavLink = screen.getByRole('link', { name: 'Home' });
        expect(homeNavLink.closest('nav')).toHaveClass('d-none', 'd-md-flex');
    });

    test('Menu (FaTh) icon in right section is hidden on medium screens (class check)', () => {
        renderWithRouter();
        const menuIcon = screen.getByTitle('Menu');
        expect(menuIcon).toHaveClass('d-none', 'd-lg-flex'); // Visible only on lg and up
    });
  });

});
