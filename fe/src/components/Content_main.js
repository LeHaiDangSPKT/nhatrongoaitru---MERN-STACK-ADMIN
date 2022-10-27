import "../styles/base.scss";
import "../styles/main.scss";
import "../styles/table.scss";
import "../styles/responsive.scss";
import Slick from "../js/Slick";
import ClipLoader from "react-spinners/ClipLoader";

import ModalSignIn from "./Manager/ModalSignIn";
import * as React from "react";
import Loader from "./Loader";

const styleModalSignIn = {
  display: "flex",
};

function Content_main() {
  return (
    <div id="content">
      <div className="grid wide">
        <div className="content__place">
          <div style={styleModalSignIn}>
            <ModalSignIn />
          </div>
        </div>
        <div className="right">
          {localStorage.getItem("login") && (
            <a href="/managerActivity">
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-modal"
              >
                Quản lý các hoạt động
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Content_main;
