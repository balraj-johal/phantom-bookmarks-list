import useSavedLinks from "../hooks/useSavedLinks";
import BookmarkLink from "./BookmarkLink";

function BookmarkList(props) {
  const { paginatedLinks, addLink } = useSavedLinks(props.pageNumber);

  return(
    <>
      { paginatedLinks.map((link) => (
        <BookmarkLink link={link} key={link.id} />
      )) }
      <button onClick={() => {
        addLink(paginatedLinks.length.toString());
      }}>
        Add Link Test
      </button>
    </>
  )
}

export default BookmarkList;
