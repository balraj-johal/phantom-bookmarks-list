import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddLinkForm(props) {
  const navigate = useNavigate();
  const [url, setURL] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    // attempt to save link
    try {
      const error = await props.addLink({url});
      if (error) {
        setSubmitting(false);
        return setError(error);
      }
      setSubmitting(false);
      // redirect to success page if link saved
      navigate(`/link-saved/${encodeURIComponent(url)}`);
    } catch (error) {
      console.log(error);
    }
  }

  return(
    <form 
      id="add-link-form" 
      className="bookmark-link add-link" 
      onSubmit={onSubmit}
    >
      <div className="url-section">
        <input
          className={`url-element ${error ? "error" : ""}`}
          type="text"
          value={url}
          onChange={e => setURL(e.target.value)}
          required
          placeholder="enter a valid url here"
        />
        { error !== "" && <span
          className="url-element error" 
          aria-live="assertive"
        >
          {error}
        </span> }
        
      </div>
      <button type="submit" disabled={submitting}>
        Save Link
      </button>
    </form>
  )
}

export default AddLinkForm;
