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
    <form className="bookmark-link add-link" onSubmit={onSubmit}>
      <div>
        <input 
          type="text" 
          value={url}
          onChange={e => setURL(e.target.value)} 
          required
        />
        <span aria-live="assertive">
          {error}
        </span>
      </div>
      <button type="submit">
        Save Link
      </button>
    </form>
  )
}

export default AddLinkForm;
