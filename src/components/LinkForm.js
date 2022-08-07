import { useState } from "react";

function LinkForm(props) {
  const initialURL = props.toEdit?.url;
  const [url, setURL] = useState(initialURL || "");

  return(
    <form 
      id="link-form" 
      className="bookmark-link edit-link" 
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
        <button 
          className="save"
          type="submit" 
          disabled={props.submitting}
        >
          Save Link
        </button>
        { props.cancellable && 
          <button 
            className="cancel"
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
