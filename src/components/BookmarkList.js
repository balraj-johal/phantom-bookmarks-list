
import BookmarkLink from "./BookmarkLink";

function BookmarkList(props) {
  return(
    <ul>
      { props.list.map((link) => (
        <BookmarkLink
          link={link}
          key={link.url}
          deleteLink={props.deleteLink}
          updateLink={props.updateLink}
        />
      )) }
    </ul>
  )
}

export default BookmarkList;
