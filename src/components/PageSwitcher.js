
function PageSwitcher(props) {
  if (props.noPages <= 1) return null;
  return(
    <nav className="page-switcher">
      <PageNumberLink 
        left
        show={0 < props.current}
        toPageNo={props.current}
      />
      {props.current + 1}
      <PageNumberLink 
        show={props.current + 2 <= props.noPages} 
        toPageNo={props.current + 2}
      />
    </nav>
  );
}

function PageNumberLink(props) {
  if (!props.show) return null;
  return(
    <a 
      href={`/page/${props.toPageNo}`} 
      aria-label={`page ${props.toPageNo}`} 
    >
      { props.left ? "< " : null }
      {props.toPageNo}
      { props.left ? null : " >" }
    </a>
  )
}

export default PageSwitcher;
