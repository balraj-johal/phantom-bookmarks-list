import { useState } from "react";

function LinkForm(props) {
  const initialURL = props.toEdit?.url;
  const [url, setURL] = useState(initialURL || "");

  return(
    <form 
      id="add-link-form" 
      className="bookmark-link add-link" 
      onSubmit={e => props.onSubmit(e, url)}
    >
      <div className="url-section">
        <input
          className={`url-element ${props.error ? "error" : ""}`}
          type="text"
          value={url}
          onChange={e => setURL(e.target.value)}
          required
          placeholder="enter a valid url here"
        />
        { props.error !== "" && <span
          className="url-element error" 
          aria-live="assertive"
        >
          {props.error}
        </span> }
        
      </div>
      <div className="buttons">
        <button type="submit" disabled={props.submitting}>
          Save Link
        </button>
        { props.cancellable && 
          <button 
            onClick={props.cancel}
            type="button"
          >
            Cancel
          </button> }
      </div>
    </form>
  )
}

export default LinkForm;
