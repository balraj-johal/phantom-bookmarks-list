
function PageSwitcher(props) {

  return(
    <div className="page-switcher">
      {props.current + 1} to {props.noPages + 1}
    </div>
  )
}

export default PageSwitcher;
