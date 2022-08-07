import { useState } from "react";
import LinkForm from "./LinkForm";

function BookmarkLink(props) {
  const [linkState, setLinkState] = useState("Show");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const submitEditLinkForm = async (e, url) => {
    e.preventDefault();
    setSubmitting(true);
    // attempt to save link
    try {
      const error = await props.updateLink(props.link, url);
      if (error) {
        setSubmitting(false);
        return setError(error);
      }
      setSubmitting(false);
      
    } catch (error) {
      console.log(error);
    }
  }

  if (linkState === "Show") return(
    <LinkDisplay 
      link={props.link}
      deleteLink={props.deleteLink}
      setLinkState={setLinkState}
    />
  )
  return(
    <LinkForm
      toEdit={props.link}
      onSubmit={submitEditLinkForm} 
      error={error} 
      submitting={submitting} 
      cancellable
      cancel={() => { props.setLinkState("Show") }}
    />
  )
}

function LinkDisplay(props) {
  return(
    <div className="bookmark-link">
      <a href={props.link.url}>{props.link.url}</a>
      <div className="buttons">
        {props.deleteLink && <button 
          onClick={() => {
            props.deleteLink(props.link);
          }}
          className="delete"
        >
          delete
        </button>}
        {props.deleteLink && <button 
          onClick={() => {
            props.setLinkState("Edit");
          }}
          className="edit"
        >
          edit
        </button>}
      </div>
    </div>
  )
}

export default BookmarkLink;
