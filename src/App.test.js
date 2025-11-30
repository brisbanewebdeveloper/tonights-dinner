import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/今夜の夜食/);
  expect(headingElement).toBeInTheDocument();
});
