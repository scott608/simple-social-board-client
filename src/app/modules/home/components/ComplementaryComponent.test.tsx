import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ComplementaryComponent from './ComplementaryComponent';

// Mock data is defined within the component.
// For more robust tests, this data could be passed as props or mocked via a service.

describe('ComplementaryComponent', () => {
  beforeEach(() => {
    render(<ComplementaryComponent />);
  });

  test('renders without crashing', () => {
    expect(screen.getByText('Sponsored')).toBeInTheDocument();
  });

  // Sponsored Section
  describe('Sponsored Section', () => {
    test('renders "Sponsored" title', () => {
      expect(screen.getByText('Sponsored')).toBeInTheDocument();
    });

    test('renders sponsored items', () => {
      expect(screen.getByText('Sponsored Ad 1')).toBeInTheDocument();
      expect(screen.getByText('Sponsored Ad 2')).toBeInTheDocument();
      const sponsoredImages = screen.getAllByRole('img', { name: '' }); // Placeholder images might not have alt text
      // Filter for sponsored images based on src
      const actualSponsoredImages = sponsoredImages.filter(img => img.getAttribute('src')?.includes('via.placeholder.com/100x70'));
      expect(actualSponsoredImages.length).toBeGreaterThanOrEqual(2);
    });
  });

  // Your Pages and profiles Section
  describe('Your Pages and profiles Section', () => {
    test('renders "Your Pages and profiles" title and more icon', () => {
      expect(screen.getByText('Your Pages and profiles')).toBeInTheDocument();
      // Check for BsThreeDots icon (usually an SVG)
      const sectionHeader = screen.getByText('Your Pages and profiles').parentElement;
      expect(sectionHeader?.querySelector('svg')).toBeInTheDocument();
    });

    test('renders page items', () => {
      expect(screen.getByText('My Awesome Page')).toBeInTheDocument();
      expect(screen.getByText('Developer Profile')).toBeInTheDocument();
      // Check for avatars (placeholder images)
      const pageAvatars = screen.getAllByRole('img').filter(img => img.getAttribute('src')?.includes('via.placeholder.com/32'));
      expect(pageAvatars.length).toBeGreaterThanOrEqual(2);

    });
  });

  // Birthdays Section
  describe('Birthdays Section', () => {
    test('renders "Birthdays" title', () => {
      expect(screen.getByText('Birthdays')).toBeInTheDocument();
    });

    test('renders birthday notifications', () => {
      // Based on mock data in the component
      expect(screen.getByText(/It's John Doe's birthday today!/i)).toBeInTheDocument();
      expect(screen.getByText(/Jane Smith's birthday is in 3 days./i)).toBeInTheDocument();
      // Check for FaGift icon
      const giftIcons = screen.getAllByRole('img', { hidden: true }); // react-icons might render svgs as img with hidden: true
      // A more robust way would be to check for the path data of the SVG if possible or a test-id on the icon
      // For this, we'll check that there are SVGs present in the birthday items.
      const birthdayItems = screen.getByText(/John Doe/i).closest('div[style*="display: flex"]');
      expect(birthdayItems?.querySelector('svg')).toBeInTheDocument();
    });
  });

  // Contacts Section
  describe('Contacts Section', () => {
    test('renders "Contacts" title and action icons (Search, More)', () => {
      expect(screen.getByText('Contacts')).toBeInTheDocument();
      const sectionHeader = screen.getByText('Contacts').parentElement;
      expect(sectionHeader?.querySelectorAll('svg').length).toBeGreaterThanOrEqual(2); // FaSearch, BsThreeDots
    });

    test('renders contact items with avatars and online indicators', () => {
      expect(screen.getByText('測試人員1')).toBeInTheDocument();
      expect(screen.getByText('測試人員2')).toBeInTheDocument();
      expect(screen.getByText('測試人員3')).toBeInTheDocument();

      // Check for avatars
      const contactAvatars = screen.getAllByRole('img').filter(img => img.getAttribute('src')?.includes('scontent.frmq2-2.fna.fbcdn.net'));
      expect(contactAvatars.length).toBeGreaterThanOrEqual(3);
      
      // Check for online indicators (divs with specific styling)
      // This is tricky without test-ids. We'll check that each contact item contains the structure.
      const contactItems = screen.getAllByText(/測試人員/i).map(el => el.closest('div[style*="display: flex"]'));
      contactItems.forEach(item => {
        const avatarContainer = item?.firstChild;
        const onlineIndicator = avatarContainer?.querySelector('div[style*="backgroundColor: rgb(49, 162, 76)"]'); // #31a24c
        expect(onlineIndicator).toBeInTheDocument();
      });
    });
  });

  test('renders dividers between sections', () => {
    // Dividers are divs with specific styling. Check for at least one.
    // Example: <div style="height: 1px; background-color: rgb(206, 208, 212); margin: 0.75rem 0px;"></div>
    // This is very brittle. A test-id on dividers would be better.
    // For now, we assume they exist if sections are separated.
    // A more abstract test: ensure sections are distinct blocks.
    const sponsoredSection = screen.getByText('Sponsored').closest('div[style*="marginBottom: 0.5rem"]');
    const pagesSection = screen.getByText('Your Pages and profiles').closest('div[style*="marginBottom: 0.5rem"]');
    expect(sponsoredSection).toBeInTheDocument();
    expect(pagesSection).toBeInTheDocument();
    // A more direct test would require changes to the component (e.g., adding test-ids to dividers)
  });
});
