import { useState } from "react";

function BookmarkLink(props) {
  const [linkState, setLinkState] = useState("Show");

  if (linkState === "Show") return(
    <div className="bookmark-link">
      <ShowLink 
        link={props.link}
        deleteLink={props.deleteLink}
        setLinkState={setLinkState}
      />
    </div>
  )
  return(
    <div className="bookmark-link">
      <EditLink 
        link={props.link}
        updateLink={props.updateLink}
        setLinkState={setLinkState}
      />
    </div>
  )
}

function ShowLink(props) {
  return(
    <>
      {props.link.url}
      <div>
        <button onClick={() => {
          props.deleteLink(props.link);
        }}>
          delete
        </button>
        <button onClick={() => {
          props.setLinkState("Edit");
        }}>
          edit
        </button>
      </div>
    </>
  )
}

function EditLink(props) {
  const initialURL = props.link.url;
  const [url, setURL] = useState(initialURL);

  return(
    <>
      <input value={url} onChange={e => setURL(e.target.value)} />
      <div>
        <button onClick={() => {
          alert(`changing ${initialURL} to ${url}`);
          props.updateLink(props.link, url);
          // props.deleteLink(props.link);
        }}>
          save
        </button>
        <button onClick={() => {
          props.setLinkState("Show");
        }}>
          cancel
        </button>
      </div>
    </>
  )
}

export default BookmarkLink;
