import { render, screen } from '@testing-library/react';
import BookmarkLink from './BookmarkLink';

const mockDelete = () => {

}
const mockUpdate = () => {

}

it('renders given link', () => {
  const link = { url: "www.test.com" };
  render(<BookmarkLink 
    link={link}
    deleteLink={mockDelete}
    updateLink={mockUpdate}
  />);
  const linkElement = screen.getByRole("link", { name: /www.test.com/i });
  expect(linkElement).toBeInTheDocument();
});

it('renders edit button', () => {
  const link = { url: "www.test.com" };
  render(<BookmarkLink 
    link={link}
    deleteLink={mockDelete}
    updateLink={mockUpdate}
  />);
  const editButton = screen.getByRole("button", { name: /edit/i });
  expect(editButton).toBeInTheDocument();
});

it('renders delete button', () => {
  const link = { url: "www.test.com" };
  render(<BookmarkLink 
    link={link}
    deleteLink={mockDelete}
    updateLink={mockUpdate}
  />);
  const deleteButton = screen.getByRole("button", { name: /delete/i });
  expect(deleteButton).toBeInTheDocument();
});

it('does not render buttons if not required', () => {
  const link = { url: "www.test.com" };
  render(<BookmarkLink 
    link={link}
  />);
  const buttons = screen.queryAllByRole("button");
  expect(buttons.length).toBe(0);
});