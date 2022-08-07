import { useParams } from "react-router-dom";

import successAnim from "../resources/animations/success.json";

import BookmarkLink from "./BookmarkLink";
import Lottie from "react-lottie-player";

function Success() {
  const routeParams = useParams();

  return(
    <main className="success">
      <h1>Your link has been successfully added!</h1>
      <Lottie 
          rendererSettings={{ 
              preserveAspectRatio: 'xMidYMid slice' 
          }}
          className="success-anim"
          animationData={successAnim} 
          play
          loop={false}
      />
      <BookmarkLink
        link={{ url: decodeURIComponent(routeParams.linkID) }}
      />
      <div className="return-link-wrapper">
        <a className="return-link" href="/">
          &lt; back to overview
        </a>
      </div>
    </main>
  )
}

export default Success;
