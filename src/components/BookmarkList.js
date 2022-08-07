
import BookmarkLink from "./BookmarkLink";
import { useAutoAnimate } from '@formkit/auto-animate/react';

function BookmarkList(props) {  
  const [animationParent] = useAutoAnimate();

  return(
    <ul ref={animationParent}>
      { props.list.map((link) => (
        <BookmarkLink
          link={link}
          key={link.url}
          deleteLink={props.deleteLink}
          updateLink={props.updateLink}
        />
      )) }
    </ul>
  )
}

export default BookmarkList;
