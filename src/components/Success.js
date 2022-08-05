import { useParams } from "react-router-dom";

function Success() {
  const routeParams = useParams();

  return(
    <main>
      Success for { routeParams.linkID }
    </main>
  )
}

export default Success;
