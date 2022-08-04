import { render, screen } from '@testing-library/react';
import App from './App';

test('renders application div', () => {
  render(<App />);
  const applicationRootElement = screen.getByTestId("App");
  expect(applicationRootElement).toBeInTheDocument();
});
