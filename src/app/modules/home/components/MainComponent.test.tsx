import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MainComponent from './MainComponent';

// Mock child components to isolate testing to MainComponent
// and to avoid dealing with their internal logic or data fetching.
jest.mock('./CreatePost', () => () => <div data-testid="create-post-mock">Create Post Mock</div>);
jest.mock('@shared/components/PostCard', () => (props: any) => (
  <div data-testid="post-card-mock">
    Post Card Mock: {props.author} - {props.content}
  </div>
));

describe('MainComponent', () => {
  beforeEach(() => {
    render(<MainComponent />);
  });

  test('renders without crashing', () => {
    // Check if the main container or a known element within it exists
    // Since it's a fragment, we'll check for its children.
    expect(screen.getByTestId('create-post-mock')).toBeInTheDocument();
  });

  test('renders the CreatePost component', () => {
    expect(screen.getByTestId('create-post-mock')).toHaveTextContent('Create Post Mock');
  });

  test('renders multiple PostCard components', () => {
    const postCards = screen.getAllByTestId('post-card-mock');
    expect(postCards.length).toBeGreaterThan(0); // Check that at least one PostCard is rendered

    // Example: Check content of the first mocked PostCard based on props in MainComponent
    expect(postCards[0]).toHaveTextContent('Post Card Mock: 測試人員 - 為你自己學 Git深入淺出的 Git 教學，教您使用 Git 指令及圖形介面工具，使用 GitHub 與其它人一起工作...');
  });
});
