import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavigationComponent from './NavigationComponent';
import { BrowserRouter } from 'react-router-dom'; // Needed for Link/navigate
import { FaUserFriends, FaUsers, FaStore, FaTv, FaHistory } from 'react-icons/fa';

// Mock react-router-dom's useNavigate
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useNavigate: () => mockNavigate,
}));

describe('NavigationComponent', () => {
  beforeEach(() => {
    // Clear mock calls before each test
    mockNavigate.mockClear();
    render(
      <BrowserRouter>
        <NavigationComponent />
      </BrowserRouter>
    );
  });

  test('renders without crashing', () => {
    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  const navigationItems = [
    { name: '測試人員', icon: null, id: 1 }, // Profile, no specific icon in this component's data
    { name: 'Friends', icon: FaUserFriends, id: 2 },
    { name: 'Groups', icon: FaUsers, id: 3 },
    { name: 'Marketplace', icon: FaStore, id: 4 },
    { name: 'Watch', icon: FaTv, id: 5 },
    { name: 'Memories', icon: FaHistory, id: 6 },
  ];

  navigationItems.forEach(item => {
    test(`renders navigation item "${item.name}"`, () => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
      // Note: Testing for specific icon components directly can be brittle.
      // It's often better to test for accessibility attributes or visual cues if possible.
      // For this example, we'll check if an SVG element (which react-icons renders) is present for items with icons.
      if (item.icon) {
        const itemElement = screen.getByText(item.name).closest('div[role="button"]');
        expect(itemElement).not.toBeNull();
        if (itemElement) {
          const svgElement = itemElement.querySelector('svg');
          expect(svgElement).toBeInTheDocument();
        }
      }
    });
  });

  test('calls navigate when "測試人員" (profile) item is clicked', () => {
    fireEvent.click(screen.getByText('測試人員'));
    expect(mockNavigate).toHaveBeenCalledWith('/profile');
  });

  test('logs to console when "Friends" item is clicked (or other non-profile items)', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    fireEvent.click(screen.getByText('Friends'));
    expect(mockNavigate).not.toHaveBeenCalled(); // Assuming only profile navigates for now
    expect(consoleSpy).toHaveBeenCalledWith('Clicked on Friends');
    consoleSpy.mockRestore();
  });

  test('logs to console when "Groups" item is clicked', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    fireEvent.click(screen.getByText('Groups'));
    expect(consoleSpy).toHaveBeenCalledWith('Clicked on Groups');
    consoleSpy.mockRestore();
  });
});
