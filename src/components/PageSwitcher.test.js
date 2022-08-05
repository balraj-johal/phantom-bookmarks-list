import { render, screen } from '@testing-library/react';
import PageSwitcher from './PageSwitcher';

it('does not render if only single page', () => {
  render(<PageSwitcher noPages={1} />);
  const switcherElement = screen.queryByRole("navigation");
  expect(switcherElement).not.toBeInTheDocument();
});

it('does render if multiple pages', () => {
  render(<PageSwitcher noPages={4} />);
  const switcherElement = screen.getByRole("navigation");
  expect(switcherElement).toBeInTheDocument();
});

it('only renders single link if at first page', () => {
  render(<PageSwitcher noPages={3} current={0} />);
  const linkElements = screen.getAllByRole("link");
  expect(linkElements.length).toBe(1);
});

it('only renders single link if at last page', () => {
  render(<PageSwitcher noPages={2} current={2} />);
  const linkElements = screen.getAllByRole("link");
  expect(linkElements.length).toBe(1);
});

it('renders both links if within page bounds', () => {
  render(<PageSwitcher noPages={5} current={2} />);
  const linkElements = screen.getAllByRole("link");
  expect(linkElements.length).toBe(2);
});