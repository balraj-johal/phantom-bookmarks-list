import { render, screen } from '@testing-library/react';
import PageSwitcher from './PageSwitcher';

it('does not render if only single page', () => {
  render(<PageSwitcher noPages={0} />);
  const switcherElement = screen.queryByRole("navigation");
  expect(switcherElement).not.toBeInTheDocument();
});

it('does render if multiple pages', () => {
  render(<PageSwitcher noPages={4} />);
  const switcherElement = screen.getByRole("navigation");
  expect(switcherElement).toBeInTheDocument();
});