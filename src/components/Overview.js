import BookmarkList from "./BookmarkList";
import PageSwitcher from "./PageSwitcher";

function Overview() {
  return(
    <main data-testid="overview">
      Overview
      <BookmarkList />
      <PageSwitcher />
    </main>
  )
}

export default Overview;
