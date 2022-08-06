import { useParams } from "react-router-dom";
import BookmarkLink from "./BookmarkLink";

function Success() {
  const routeParams = useParams();

  return(
    <main>
      Success!
      <BookmarkLink
        link={{ url: decodeURIComponent(routeParams.linkID) }}
      />
      <a href="/">&lt; back to overview</a>
    </main>
  )
}

export default Success;
