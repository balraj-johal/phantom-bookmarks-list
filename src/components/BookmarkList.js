import BookmarkLink from "./BookmarkLink";

function BookmarkList(props) {

  return(
    props.list.map((link) => (
      <BookmarkLink link={link} key={link.id} />
    ))
  )
}

export default BookmarkList;
