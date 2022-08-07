import { useParams } from "react-router-dom";
import BookmarkLink from "./BookmarkLink";

function Success() {
  const routeParams = useParams();

  return(
    <main className="success">
      <h1>Your link has been successfully added!</h1>
      <div className="success-anim"></div>
      <BookmarkLink
        link={{ url: decodeURIComponent(routeParams.linkID) }}
      />
      <a href="/">&lt; back to overview</a>
    </main>
  )
}

export default Success;
