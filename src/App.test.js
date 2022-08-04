import { render, screen } from '@testing-library/react';
import App from './App';

it('renders application', () => {
  render(<App />);
  const mainElement = screen.getByRole("main");
  expect(mainElement).toBeInTheDocument();
});

it('renders header', () => {
  render(<App />);
  const headerElement = screen.getByRole("heading");
  expect(headerElement).toBeInTheDocument();
});

it('renders links overview as default route', () => {
  render(<App />);
  const overviewElement = screen.getByTestId("overview");
  expect(overviewElement).toBeInTheDocument();
});
