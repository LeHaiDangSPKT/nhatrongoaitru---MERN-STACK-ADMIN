import logo_header from "../img/Header/logo.png";
import logo_lch from "../img/Header/logo-lch.png";
import { Link } from "react-router-dom";
import "../styles/index.scss";

function Header() {
  return (
    <div id="header">
      <div className="img-header">
        <Link to="/">
          <img className="img-main" src={logo_header} alt=""></img>
        </Link>
        <img className="img-sub" src={logo_lch} alt=""></img>
      </div>
    </div>
  );
}

export default Header;
