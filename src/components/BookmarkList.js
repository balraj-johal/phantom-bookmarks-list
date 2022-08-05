import useSavedLinks from "../hooks/useSavedLinks";
import AddLinkForm from "./AddLinkForm";
import BookmarkLink from "./BookmarkLink";

function BookmarkList(props) {
  const { 
    paginatedLinks,
    deleteLink,
    addLink
  } = useSavedLinks(props.pageNumber);

  return(
    <>
      <AddLinkForm addLink={addLink} />
      {paginatedLinks.map((link) => (
        <BookmarkLink 
          link={link} 
          key={link.id}
          deleteLink={deleteLink}
        />
      ))}
    </>
  )
}

export default BookmarkList;
