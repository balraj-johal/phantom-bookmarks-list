import { useParams } from "react-router-dom";

import useSavedLinks from "../hooks/useSavedLinks";

import BookmarkList from "./BookmarkList";
import AddLinkForm from "./AddLinkForm";
import PageSwitcher from "./PageSwitcher";

const DEFAULT_PAGE_LENGTH = 20;

function Overview() {
  const routeParams = useParams();
  
  const { 
    paginatedLinks,
    noPages,
    deleteLink,
    updateLink,
    addLink,
  } = useSavedLinks(routeParams.pageNumber - 1 || 0, DEFAULT_PAGE_LENGTH);

  return(
    <main className="overview" data-testid="overview">
      <AddLinkForm addLink={addLink} />
      <PageSwitcher
        noPages={noPages}
        current={routeParams.pageNumber - 1 || 0}
      />
      <BookmarkList 
        list={paginatedLinks}
        deleteLink={deleteLink}
        updateLink={updateLink}
      />
    </main>
  )
}

export default Overview;
