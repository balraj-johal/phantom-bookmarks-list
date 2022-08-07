import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddLinkForm(props) {
  const navigate = useNavigate();
  const [url, setURL] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    // attempt to save link
    try {
      const error = await props.addLink({url});
      if (error) return setError(error);
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
          className="url-element"
          type="text"
          value={url}
          onChange={e => setURL(e.target.value)}
          required
          placeholder="enter a valid url here"
          error={error}
        />
        { error !== "" && <span
          className="url-element error" 
          aria-live="assertive"
        >
          {error}
        </span> }
        
      </div>
      <button type="submit">
        Save Link
      </button>
    </form>
  )
}

export default AddLinkForm;
