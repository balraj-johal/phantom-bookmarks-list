import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LinkForm from "./LinkForm";

function AddLinkForm(props) {
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const submitAddLinkForm = async (e, url) => {
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
    <LinkForm 
      onSubmit={submitAddLinkForm} 
      error={error} 
      submitting={submitting} 
    />
  )
}

export default AddLinkForm;
