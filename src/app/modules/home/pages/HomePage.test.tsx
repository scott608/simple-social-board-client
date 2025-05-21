import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from './HomePage';

// Mock child components to simplify HomePage testing and focus on layout
jest.mock('../components/NavigationComponent', () => () => <div data-testid="navigation-component-mock">Navigation Component</div>);
jest.mock('../components/MainComponent', () => () => <div data-testid="main-component-mock">Main Component</div>);
jest.mock('../components/ComplementaryComponent', () => () => <div data-testid="complementary-component-mock">Complementary Component</div>);

describe('HomePage Component', () => {
  beforeEach(() => {
    render(<HomePage />);
  });

  test('renders without crashing', () => {
    // Check if the main container or one of the mocked components is present
    expect(screen.getByTestId('main-component-mock')).toBeInTheDocument();
  });

  test('renders the NavigationComponent column (for large screens)', () => {
    // This component is conditionally rendered based on screen size (d-none d-lg-block)
    // Testing Library doesn't directly handle CSS-based visibility for presence.
    // We check if it's in the document. Its actual visibility would be an E2E/visual test.
    const navComponent = screen.getByTestId('navigation-component-mock');
    expect(navComponent).toBeInTheDocument();
    // Check its parent column for responsive classes
    expect(navComponent.closest('.col-lg-3')).toHaveClass('d-none', 'd-lg-block');
  });

  test('renders the MainComponent column', () => {
    const mainComponent = screen.getByTestId('main-component-mock');
    expect(mainComponent).toBeInTheDocument();
    // Check its parent column for responsive classes
    expect(mainComponent.closest('.col-xs-12')).toHaveClass('col-md-8', 'col-lg-6');
  });

  test('renders the ComplementaryComponent column (for medium/large screens)', () => {
    // Similar to NavigationComponent, its visibility is CSS-driven.
    const complementaryComponent = screen.getByTestId('complementary-component-mock');
    expect(complementaryComponent).toBeInTheDocument();
    // Check its parent column for responsive classes
    expect(complementaryComponent.closest('.col-md-4')).toHaveClass('d-none', 'd-md-block', 'col-lg-3');
  });
  
  test('main container has correct background color', () => {
    // The HomePage itself returns a fragment, the Container is inside.
    // We'll check the background color of the parent of one of the columns.
    const mainComponentColumn = screen.getByTestId('main-component-mock').parentElement; // This is the Col
    const rowElement = mainComponentColumn?.parentElement; // This is the Row
    const containerElement = rowElement?.parentElement; // This is the Container
    
    expect(containerElement).toHaveStyle('background-color: #f0f2f5');
  });
});
