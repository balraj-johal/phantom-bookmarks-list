import { render, screen } from '@testing-library/react';
import BookmarkList from './BookmarkList';

it('does not render any links if given empty list', () => {
  render(<BookmarkList list={[]} />);
  const linkElements = screen.queryAllByRole("link");
  expect(linkElements.length).toBe(0);
});

it('renders an arbitrary number of links', () => {
  const arbitraryList = [
    { url: "1" }, 
    { url: "2" }, 
    { url: "3" }
  ]
  render(<BookmarkList list={arbitraryList} />);
  const linkElements = screen.queryAllByRole("link");
  expect(linkElements.length).toBe(3);
});
