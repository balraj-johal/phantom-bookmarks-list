
function BookmarkLink(props) {

  return(
    <div className="bookmark-link">
      <ShowLink link={props.link} />
      <button onClick={() => {
        props.deleteLink(props.link);
      }}>
        delete
      </button>
    </div>
  )
}

function ShowLink(props) {
  return(
    props.link.url
  )
}

function EditLink(props) {
  return(
    <input type="text" />
  )
}

export default BookmarkLink;
