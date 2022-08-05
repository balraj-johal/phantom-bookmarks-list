import { useState } from "react";
import useSavedLinks from "../hooks/useSavedLinks";
import AddLinkForm from "./AddLinkForm";
import BookmarkLink from "./BookmarkLink";
import PageSwitcher from "./PageSwitcher";

function BookmarkList(props) {
  const [currentPage, setCurrentPage] = useState(0);
  const { 
    paginatedLinks,
    deleteLink,
    addLink,
    noPages
  } = useSavedLinks(currentPage);

  return(
    <>
      <AddLinkForm addLink={addLink} />
      {paginatedLinks.map((link) => (
        <BookmarkLink
          link={link}
          key={link.id}
          deleteLink={deleteLink}
        />
      ))}
      <PageSwitcher 
        noPages={noPages}
        current={0}
        setCurrentPage={setCurrentPage}
      />
    </>
  )
}

export default BookmarkList;
