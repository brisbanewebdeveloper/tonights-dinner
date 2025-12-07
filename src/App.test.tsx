import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders app heading', () => {
    render(<App />);
    const headingElement = screen.getByText(/今夜の夜食/);
    expect(headingElement).toBeInTheDocument();
  });
});
