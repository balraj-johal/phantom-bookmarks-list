import { useState } from "react";

function AddLinkForm(props) {
  const [url, setURL] = useState("");

  return(
    <div className="bookmark-link add-link">
      <input 
        type="text" 
        onChange={e => setURL(e.target.value)} 
      />
      <button onClick={() => {
        props.addLink({url});
      }}>
        Save Link
      </button>
    </div>
  )
}

export default AddLinkForm;
