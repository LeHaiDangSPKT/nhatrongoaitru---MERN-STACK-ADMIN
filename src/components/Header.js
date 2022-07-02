import logo_header from "../img/Header/logo.png";
import logo_lch from "../img/Header/logo-lch.png";

import "../styles/index.scss";
import "../js/countdown.js";
// import "../styles/main.scss";
// import "../styles/countdown.scss";

function Header() {
  return (
    <div id="header">
      <img className="img-main" src={logo_header} alt=""></img>
      <img className="img-sub" src={logo_lch} alt=""></img>
      <div className="container_countdown">
        <div id="timer"></div>
        <h1>Kết thúc thời gian, dữ liệu sẽ được cập nhật</h1>
      </div>
    </div>
  );
}

export default Header;
