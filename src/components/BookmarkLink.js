
function BookmarkLink(props) {

  return(
    <div>
      <ShowLink link="testlink" />
    </div>
  )
}

function ShowLink(props) {
  return(
    <>
      s{ props.link }
    </>
  )
}

function EditLink(props) {
  return(
      <input type="text" />
  )
}

export default BookmarkLink;
