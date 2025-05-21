import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CreatePost from './CreatePost';

// Mock user data is defined within the component, so we don't need to pass props for it
// unless we want to test different user names/avatars. For this basic test, we'll use the default.

describe('CreatePost Component', () => {
  beforeEach(() => {
    render(<CreatePost />);
  });

  test('renders without crashing', () => {
    expect(screen.getByRole('textbox')).toBeInTheDocument(); // The input field
  });

  test('renders the user avatar', () => {
    const avatarImage = screen.getByRole('img', { name: /user avatar/i });
    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage).toHaveAttribute('src', 'https://via.placeholder.com/40'); // Default mock avatar
  });

  test('renders the input field with correct placeholder', () => {
    // The placeholder includes the mock user's name
    expect(screen.getByPlaceholderText("What's on your mind, User?")).toBeInTheDocument();
  });

  test('renders "Live video" button', () => {
    expect(screen.getByRole('button', { name: /live video/i })).toBeInTheDocument();
    // Check for icon (optional, can be brittle)
    const liveVideoButton = screen.getByRole('button', { name: /live video/i });
    expect(liveVideoButton.querySelector('svg')).toBeInTheDocument(); // FaVideo
  });

  test('renders "Photo/video" button', () => {
    expect(screen.getByRole('button', { name: /photo\/video/i })).toBeInTheDocument();
    const photoVideoButton = screen.getByRole('button', { name: /photo\/video/i });
    expect(photoVideoButton.querySelector('svg')).toBeInTheDocument(); // FaImages
  });

  test('renders "Feeling/activity" button', () => {
    expect(screen.getByRole('button', { name: /feeling\/activity/i })).toBeInTheDocument();
    const feelingActivityButton = screen.getByRole('button', { name: /feeling\/activity/i });
    expect(feelingActivityButton.querySelector('svg')).toBeInTheDocument(); // FaSmile
  });

  test('renders a horizontal rule (divider)', () => {
    // In HTML, <hr> has a role of 'separator'.
    // If it's a div styled as a line, you might need to test by testId or other attributes.
    // The current component uses <hr>
    expect(screen.getByRole('separator')).toBeInTheDocument();
  });
});
