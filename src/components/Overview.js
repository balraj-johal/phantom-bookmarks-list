import { useState } from "react";
import BookmarkList from "./BookmarkList";
import useSavedLinks from "../hooks/useSavedLinks";
import AddLinkForm from "./AddLinkForm";
import PageSwitcher from "./PageSwitcher";

const DEFAULT_PAGE_LENGTH = 20;

function Overview() {
  const [currentPage, setCurrentPage] = useState(0);
  const { 
    paginatedLinks,
    noPages,
    deleteLink,
    addLink,
  } = useSavedLinks(currentPage, DEFAULT_PAGE_LENGTH);

  const pageBack = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  }
  const pageForward = () => {
    if (currentPage < noPages) setCurrentPage(currentPage + 1);
  }

  return(
    <main data-testid="overview">
      <AddLinkForm addLink={addLink} />
      <PageSwitcher 
        noPages={noPages}
        current={currentPage}
        pageBack={pageBack}
        pageForward={pageForward}
      />
      <BookmarkList 
        list={paginatedLinks}
        deleteLink={deleteLink}
      />
      <PageSwitcher 
        noPages={noPages}
        current={currentPage}
        pageBack={pageBack}
        pageForward={pageForward}
      />
    </main>
  )
}

export default Overview;
