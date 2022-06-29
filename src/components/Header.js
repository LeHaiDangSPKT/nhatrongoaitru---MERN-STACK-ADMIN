import logo_header from "../img/Header/logo.png";
import logo_lch from "../img/Header/logo-lch.png";

import "../js/countdown.js";
import "../styles/main.scss";
import "../styles/countdown.scss";

function Header() {
  return (
    <div id="header">
      <div className="logo">
        <img src={logo_header} alt=""></img>
      </div>
      <div className="logo-lch">
        <img src={logo_lch} alt=""></img>
      </div>
      <div className="container_countdown">
        <div id="timer"></div>
        <h1>Kết thúc thời gian, dữ liệu sẽ được cập nhật</h1>
      </div>
    </div>
  );
}

export default Header;
