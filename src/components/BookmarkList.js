import { useState } from "react";
import useSavedLinks from "../hooks/useSavedLinks";
import AddLinkForm from "./AddLinkForm";
import BookmarkLink from "./BookmarkLink";
import PageSwitcher from "./PageSwitcher";

const DEFAULT_PAGE_LENGTH = 20;

function BookmarkList(props) {
  const [currentPage, setCurrentPage] = useState(0);
  const { 
    paginatedLinks,
    deleteLink,
    addLink,
    noPages
  } = useSavedLinks(currentPage, DEFAULT_PAGE_LENGTH);

  const pageBack = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  }
  const pageForward = () => {
    if (currentPage < noPages) setCurrentPage(currentPage + 1);
  }

  return(
    <>
      <AddLinkForm addLink={addLink} />
      { noPages > 0 && <PageSwitcher 
        noPages={noPages}
        current={currentPage}
        pageBack={pageBack}
        pageForward={pageForward}
      /> }
      {paginatedLinks.map((link) => (
        <BookmarkLink
          link={link}
          key={link.url}
          deleteLink={deleteLink}
        />
      ))}
      { noPages > 0 && <PageSwitcher 
        noPages={noPages}
        current={currentPage}
        pageBack={pageBack}
        pageForward={pageForward}
      /> }
    </>
  )
}

export default BookmarkList;
