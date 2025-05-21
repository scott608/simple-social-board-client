import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PostCard from './PostCard'; // Adjust path as necessary
import { FaGlobeAsia } from 'react-icons/fa'; // Used for assertion

// Mock props for the PostCard
const mockPost = {
  avatar: 'https://via.placeholder.com/40/007bff/FFFFFF?Text=A',
  author: 'Test Author',
  time: '10m ago',
  content: 'This is a test post content.',
};

describe('PostCard Component', () => {
  beforeEach(() => {
    render(<PostCard {...mockPost} />);
  });

  test('renders without crashing', () => {
    expect(screen.getByText(mockPost.author)).toBeInTheDocument();
  });

  test('renders the author\'s name and avatar', () => {
    expect(screen.getByText(mockPost.author)).toBeInTheDocument();
    const avatarImage = screen.getByRole('img'); // Assuming only one img, the avatar
    expect(avatarImage).toHaveAttribute('src', mockPost.avatar);
  });

  test('renders the post time and privacy icon', () => {
    expect(screen.getByText(new RegExp(mockPost.time.replace('.', '\\.') + ' ・'))).toBeInTheDocument(); // Match "10m ago ・"
    // Check for FaGlobeAsia icon - a bit brittle, but shows intent
    const header = screen.getByText(mockPost.author).closest('div')?.parentElement?.parentElement;
    expect(header).not.toBeNull();
    if (header) {
        // Check for an SVG element within the time display div
        const timeDiv = screen.getByText(new RegExp(mockPost.time.replace('.', '\\.') + ' ・'));
        expect(timeDiv.querySelector('svg')).toBeInTheDocument(); // FaGlobeAsia
    }
  });

  test('renders the three-dots menu icon', () => {
    const header = screen.getByText(mockPost.author).closest('div')?.parentElement?.parentElement;
    expect(header).not.toBeNull();
    if (header) {
      // Assuming BsThreeDots renders an svg
      const threeDotsIcon = header.querySelector('svg[class*="BsThreeDots"]'); // More specific if BsThreeDots adds a class
      // Fallback: just check for any svg in the specific div for the icon
      const menuIconContainer = header.children[1]; // The div containing the icon
      expect(menuIconContainer.querySelector('svg')).toBeInTheDocument();
    }
  });

  test('renders the post content', () => {
    expect(screen.getByText(mockPost.content)).toBeInTheDocument();
  });

  test('renders "Like" action button', () => {
    const likeButton = screen.getByRole('button', { name: /like/i });
    expect(likeButton).toBeInTheDocument();
    expect(likeButton.querySelector('svg')).toBeInTheDocument(); // BsHandThumbsUp
  });

  test('renders "Comment" action button', () => {
    const commentButton = screen.getByRole('button', { name: /comment/i });
    expect(commentButton).toBeInTheDocument();
    expect(commentButton.querySelector('svg')).toBeInTheDocument(); // BsChatDots
  });

  test('renders "Share" action button', () => {
    const shareButton = screen.getByRole('button', { name: /share/i });
    expect(shareButton).toBeInTheDocument();
    expect(shareButton.querySelector('svg')).toBeInTheDocument(); // BsShare
  });

  test('does not render "Send" action button', () => {
    expect(screen.queryByRole('button', { name: /send/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /傳送/i })).not.toBeInTheDocument();
  });

  // Test for applied styles (example for background color of the card)
  // Note: Testing specific style values can be brittle. Prefer testing behavior or accessibility.
  test('card has correct background color and box shadow', () => {
    const cardElement = screen.getByText(mockPost.author).closest('.card'); // Get the main card element
    expect(cardElement).toHaveStyle('background-color: white');
    expect(cardElement).toHaveStyle('box-shadow: 0 1px 2px rgba(0,0,0,0.2)');
  });
});
