import bg from "../../img/Street/bg.png";
import "../../styles/base.scss";
import "../../styles/grid.scss";
import "../../styles/streets.scss";
import "../../styles/search.scss";
import { BsArrowLeft, BsFilter } from "react-icons/bs";
import ItemStreet from "./ItemStreet";
import { Link } from "react-router-dom";
import { useState } from "react";
import $ from "jquery";
import Table_Address from "./Table_commne";
import RemoveVietnameseTones from "../RemoveVietnameseTones";
import {
  BinhTho,
  HiepBinhChanh,
  HiepPhu,
  LinhChieu,
  LinhDong,
  LinhTay,
  LinhTrung,
  LongThanhMy,
  PhuHuu,
  PhuocLongA,
  PhuocLongB,
  TangNhonPhuA,
  TangNhonPhuB,
  TanPhu,
  TPDiAn,
  TruongTho,
} from "../../JSRender/data/Home";

const ob = {
  BinhTho: Object.values(BinhTho()),
  HiepBinhChanh: Object.values(HiepBinhChanh()),
  HiepPhu: Object.values(HiepPhu()),
  LinhChieu: Object.values(LinhChieu()),
  LinhDong: Object.values(LinhDong()),
  LinhTay: Object.values(LinhTay()),
  LinhTrung: Object.values(LinhTrung()),
  LongThanhMy: Object.values(LongThanhMy()),
  PhuHuu: Object.values(PhuHuu()),
  PhuocLongA: Object.values(PhuocLongA()),
  PhuocLongB: Object.values(PhuocLongB()),
  TangNhonPhuA: Object.values(TangNhonPhuA()),
  TangNhonPhuB: Object.values(TangNhonPhuB()),
  TanPhu: Object.values(TanPhu()),
  TPDiAn: Object.values(TPDiAn()),
  TruongTho: Object.values(TruongTho()),
};

const data = [
  "Bình Thọ",
  "Hiệp Bình Chánh",
  "Hiệp Phú",
  "Linh Chiểu",
  "Linh Đông",
  "Linh Tây",
  "Linh Trung",
  "Long Thạnh Mỹ",
  "Phú Hữu",
  "Phước Long A",
  "Phước Long B",
  "Tăng Nhơn Phú A",
  "Tăng Nhơn Phú B",
  "Tân Phú",
  "TP Dĩ An",
  "Trường Thọ",
  "Trường Thọ",
];

function Streets(prop) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [ob_commune, setOb_commue] = useState(ob[`${prop.name}`]);
  const [search, setSearch] = useState("");

  if (name != prop.name) {
    setName(
      (prev) => (prev = prop.name),
      setOb_commue((pre_ob) => (pre_ob = ob[`${prop.name}`])),
      setShow(false),
      data.map((item) => {
        if (RemoveVietnameseTones(item) == prop.name) {
          document.title = item;
        }
      })
    );
  }
  function Sort(state) {
    if (state == "gia") {
      setValue(
        (pre_ob) => (pre_ob = "gia"),
        setOb_commue((pre_ob) =>
          pre_ob.sort((a, b) => a.info.giaphong - b.info.giaphong)
        )
      );
    }
    if (state == "khoangcach") {
      setValue(
        (pre_ob) => (pre_ob = "khoangcach"),
        setOb_commue((pre_ob) => pre_ob.sort((a, b) => a.distance - b.distance))
      );
    }

    //Load
    window.scrollTo(0, 0);
    $("body").addClass("stop-scrolling");
    document.getElementById("loader-wapper").classList.add("displayFlex");
    setTimeout(() => {
      document.getElementById("loader-wapper").classList.remove("displayFlex");
      $("body").removeClass("stop-scrolling");
    }, 2000);
  }

  let availble_quantity = ob_commune.filter((item) => {
    if (item.state) return true;
    return false;
  }).length;
  let unavailble_quantity = ob_commune.length - availble_quantity;

  return (
    <div id="content">
      <img src={bg} alt="" className="bg-title"></img>
      <div className="grid wide">
        <Link className="back" to="/">
          <BsArrowLeft style={{ transform: "translate(-5px, 3px)" }} />
          Quay lại trang chủ
        </Link>
        <button className="button-show" onClick={() => setShow(!show)}>
          Xem thêm các phường khác
        </button>
        {show && <Table_Address name={prop.name} />}
        <img
          src={require(`../../img/Street/BangTenDuong/${prop.name}.png`)}
          alt=""
          className="street-name"
        ></img>
        <div className="sort">
          <div className="left">
            <BsFilter style={{ width: "40px", height: "100%" }} />
            <span>Lọc nhà trọ theo</span>
          </div>
          <div className="right">
            <button
              className="sort-btn"
              id="sort-giaphong"
              onClick={() => Sort("gia")}
            >
              Giá phòng
            </button>
            <button
              className="sort-btn"
              id="sort-khoangcach"
              onClick={() => Sort("khoangcach")}
            >
              Khoảng cách đến trường
            </button>
          </div>
        </div>
        <p className="feedback">
          Nếu thông tin có sai sót, vui lòng góp ý tại{" "}
          <a href="https://tinyurl.com/44349krw">đây.</a>
        </p>
        <p className="feedback">
          Nếu bạn đã tìm được nhà trọ, hãy để lại đánh giá tại{" "}
          <a href="https://tinyurl.com/4bh7vhae">đây </a>nhé.
        </p>
        <div className="search">
          <form className="search-container">
            <label htmlFor="search">
              Tìm kiếm nhà trọ còn phòng:
              <input
                type="search"
                id="search-bar"
                placeholder="Nhập địa chỉ nhà trọ bạn muốn tìm..."
                data-search
                onChange={(e) => setSearch(e.target.value)}
              ></input>
            </label>
          </form>
        </div>
        <div className="room-state">
          Còn{" "}
          <div
            className="quantity-availble"
            dangerouslySetInnerHTML={{
              __html: availble_quantity.toString(),
            }}
          ></div>{" "}
          nhà trọ còn phòng
        </div>
        <div>
          <div className="row street-list street-list-availble">
            <ItemStreet
              state="true"
              ob={ob_commune.filter((val) => {
                if (search == "") {
                  return val;
                } else if (
                  JSON.stringify(val)
                    .toLowerCase()
                    .includes(search.toLowerCase())
                ) {
                  return val;
                }
              })}
            />
          </div>
        </div>
        <div className="room-state">
          <div
            className="quantity-unavailble"
            dangerouslySetInnerHTML={{
              __html: unavailble_quantity.toString(),
            }}
          ></div>{" "}
          nhà trọ hết phòng
        </div>
        <div>
          <div>
            <div className="row street-list street-list-unavailble">
              <ItemStreet state="false" ob={ob_commune} />
            </div>
          </div>
        </div>
      </div>
      <div id="loader-wapper">
        <div className="loader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Streets;
