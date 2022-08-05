import useSavedLinks from "../hooks/useSavedLinks";
import BookmarkLink from "./BookmarkLink";

function BookmarkList(props) {
  const { 
    paginatedLinks, 
    addLink,
    deleteLink
  } = useSavedLinks(props.pageNumber);

  return(
    <>
      { paginatedLinks.map((link) => (
        <BookmarkLink 
          link={link} 
          key={link.id}
          deleteLink={deleteLink}
        />
      )) }
      <button onClick={() => {
        addLink({
          url: paginatedLinks.length.toString()
        });
      }}>
        Add Link Test
      </button>
    </>
  )
}

export default BookmarkList;
