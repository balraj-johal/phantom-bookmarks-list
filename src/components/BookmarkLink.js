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
        {props.deleteLink && <button onClick={() => {
          props.deleteLink(props.link);
        }}>
          delete
        </button>}
        {/* deletelink or updateLink? */}
        {props.deleteLink && <button onClick={() => {
          props.setLinkState("Edit");
        }}>
          edit
        </button>}
      </div>
    </>
  )
}

function EditLink(props) {
  const initialURL = props.link.url;
  const [url, setURL] = useState(initialURL);
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    // attempt to save link
    try {
      const error = await props.updateLink(props.link, url);
      if (error) return setError(error);
      props.setLinkState("Show");
    } catch (error) {
      console.log(error);
    }
  }

  return(
    <form onSubmit={onSubmit}>
      <input 
        value={url} 
        onChange={e => setURL(e.target.value)} 
        required
      />
      <span aria-live="assertive">
        {error}
      </span>
      <div>
        <button type="submit">
          save
        </button>
        <button 
          onClick={() => {
            props.setLinkState("Show");
          }}
          type="button"
        >
          cancel
        </button>
      </div>
    </form>
  )
}

export default BookmarkLink;
