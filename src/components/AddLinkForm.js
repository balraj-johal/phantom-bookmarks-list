import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddLinkForm(props) {
  const navigate = useNavigate();
  const [url, setURL] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    props.addLink({url});
    navigate(`/link-saved/${url}`);
  }

  return(
    <form className="bookmark-link add-link" onSubmit={onSubmit}>
      <input 
        type="text" 
        onChange={e => setURL(e.target.value)} 
      />
      <button type="submit">
        Save Link
      </button>
    </form>
  )
}

export default AddLinkForm;
