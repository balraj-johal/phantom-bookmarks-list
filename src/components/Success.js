import { useParams } from "react-router-dom";

function Success() {
  const routeParams = useParams();

  return(
    <main>
      Success for { decodeURIComponent(routeParams.linkID) }
      <a href="/">&lt; back to overview</a>
    </main>
  )
}

export default Success;
