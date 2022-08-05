
function BookmarkLink(props) {

  return(
    <div>
      <ShowLink link={props.link} />
      <button onClick={() => {
        props.deleteLink(props.link);
      }}>
        delete link test
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
