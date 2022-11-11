import {useLocation} from 'react-router-dom'
const Header = (props) => {
  const location = useLocation();
  return (
    <div className="container p-5 d-flex flex-column ms-2 justify-content-around">
      <h1 className="text-primary text-center display-1">{props.title}</h1>
      {location.pathname==='/'&&<button
        onClick={props.showAddTask}
        className={`btn ${props.showAdd ? "btn-danger" : "btn-success"}`}
      >
        {props.showAdd ? <>Close</> : <>Add </>}
      </button>}
    </div>
  );
};
Header.defaultProps = {
  name: "sina1",
};

export default Header;
