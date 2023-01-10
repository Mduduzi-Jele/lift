import { Link } from "react-router-dom";

const Root = () => {
  return (
    <div className="screen">
      <div className="nav">
        <img className="logo" src={require('../assets/logo.png')} width="50" alt="logo" />
        <button className="action">
          <Link to={`signup`}>Sign up</Link>
        </button>
      </div>

      <div className="input-area">
        <img className="logo-body" src={require('../assets/logo.png')} width="250" alt="logo" />
        <br />
        <button className="input-button">
          <Link className="link" to={`loginwithlift`}>
            Login with lift
          </Link>
        </button>
        <br />
        <button className="input-button">
          <Link to={`loginwithlift`}>Login with google</Link>
        </button>
      </div>
    </div>
  );
};

export default Root;
