
function BookmarkLink(props) {

  return(
    <div>
      <ShowLink link={props.link} />
    </div>
  )
}

function ShowLink(props) {
  return(
    props.link
  )
}

function EditLink(props) {
  return(
    <input type="text" />
  )
}

export default BookmarkLink;
