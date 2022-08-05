import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddLinkForm(props) {
  const navigate = useNavigate();
  const [url, setURL] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    // attempt to save link
    try {
      const error = await props.addLink({url});
      if (error) return console.log(error);
      // redirect to success page if link saved
      navigate(`/link-saved/${encodeURIComponent(url)}`);
    } catch (error) {
      console.log(error);
    }
  }

  return(
    <form className="bookmark-link add-link" onSubmit={onSubmit}>
      <input 
        type="text" 
        value={url}
        onChange={e => setURL(e.target.value)} 
      />
      <button type="submit">
        Save Link
      </button>
    </form>
  )
}

export default AddLinkForm;
