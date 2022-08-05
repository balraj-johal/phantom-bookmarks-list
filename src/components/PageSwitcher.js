
function PageSwitcher(props) {

  return(
    <div className="page-switcher">
      <button onClick={props.pageBack}>
        back
      </button>
      {props.current + 1} to {props.noPages + 1}
      <button onClick={props.pageForward}>
        forwards
      </button>
    </div>
  )
}

export default PageSwitcher;
