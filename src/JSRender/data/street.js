import TPDiAn from "./Home/TPDiAn.js";
import PhuongLinhDong from "./Home/LinhDong.js";
import PhuongLinhTrung from "./Home/LinhTrung.js";
import PhuongLinhChieu from "./Home/LinhChieu.js";
import PhuongTangNhonA from "./Home/TangNhonPhuA.js";
import PhuongTanPhu from "./Home/TanPhu.js";
import PhuongBinhTho from "./Home/BinhTho.js";
import PhuongHiepPhu from "./Home/HiepPhu.js";
import PhuongTruongTho from "./Home/TruongTho.js";
import PhuongTangNhonPhuB from "./Home/TangNhonPhuB.js";
import PhuongLongThanhMy from "./Home/LongThanhMy.js";
import PhuongPhuocLongA from "./Home/PhuocLongA.js";
import PhuongPhuocLongB from "./Home/PhuocLongB.js";
import PhuongHiepBinhChanh from "./Home/HiepBinhChanh.js";
import PhuongPhuHuu from "./Home/PhuHuu.js";
import PhuongLinhTay from "./Home/LinhTay.js";

import img_DiAn from "../../img/Street/TenDuong/TPDiAn.png";
import img_LinhDong from "../../img/Street/TenDuong/LinhDong.png";
import img_LinhTrung from "../../img/Street/TenDuong/LinhTrung.png";
import img_LinhChieu from "../../img/Street/TenDuong/LinhChieu.png";
import img_TangNhonPhuA from "../../img/Street/TenDuong/TangNhonPhuA.png";
import img_TanPhu from "../../img/Street/TenDuong/TanPhu.png";
import img_BinhTho from "../../img/Street/TenDuong/BinhTho.png";
import img_HiepPhu from "../../img/Street/TenDuong/HiepPhu.png";
import img_TruongTho from "../../img/Street/TenDuong/TruongTho.png";
import img_TangNhonPhuB from "../../img/Street/TenDuong/TangNhonPhuB.png";
import img_LongThanhMy from "../../img/Street/TenDuong/LongThanhMy.png";
import img_PhuocLongA from "../../img/Street/TenDuong/PhuocLongA.png";
import img_PhuocLongB from "../../img/Street/TenDuong/PhuocLongB.png";
import img_HiepBinhChanh from "../../img/Street/TenDuong/HiepBinhChanh.png";
import img_PhuHuu from "../../img/Street/TenDuong/PhuHuu.png";
import img_LinhTay from "../../img/Street/TenDuong/LinhTay.png";

var quantity_DiAn = Object.values(TPDiAn()).length;
var quantity_PhuongLinhDong = Object.values(PhuongLinhDong()).length;
var quantity_PhuongLinhTrung = Object.values(PhuongLinhTrung()).length;
var quantity_PhuongLinhChieu = Object.values(PhuongLinhChieu()).length;
var quantity_PhuongTanNhonPhuA = Object.values(PhuongTangNhonA()).length;
var quantity_PhuongTanPhu = Object.values(PhuongTanPhu()).length;
var quantity_PhuongBinhTho = Object.values(PhuongBinhTho()).length;
var quantity_PhuongHiepPhu = Object.values(PhuongHiepPhu()).length;
var quantity_PhuongTruongTho = Object.values(PhuongTruongTho()).length;
var quantity_PhuongTangNhonPhuB = Object.values(PhuongTangNhonPhuB()).length;
var quantity_PhuongLongThanhMy = Object.values(PhuongLongThanhMy()).length;
var quantity_PhuongPhuocLongA = Object.values(PhuongPhuocLongA()).length;
var quantity_PhuongPhuocLongB = Object.values(PhuongPhuocLongB()).length;
var quantity_PhuongHiepBinhChanh = Object.values(PhuongHiepBinhChanh()).length;
var quantity_PhuongPhuHuu = Object.values(PhuongPhuHuu()).length;
var quantity_PhuongLinhTay = Object.values(PhuongLinhTay()).length;

function streets() {
  return (streets = [
    {
      quantity: quantity_DiAn,
      img: img_DiAn,
      href: "/TPDiAn",
    },
    {
      quantity: quantity_PhuongLinhDong,
      img: img_LinhDong,
      href: "/LinhDong",
    },
    {
      quantity: quantity_PhuongLinhTrung,
      img: img_LinhTrung,
      href: "/LinhTrung",
    },
    {
      quantity: quantity_PhuongLinhChieu,
      img: img_LinhChieu,
      href: "/LinhChieu",
    },
    {
      quantity: quantity_PhuongTanNhonPhuA,
      img: img_TangNhonPhuA,
      href: "/TangNhonPhuA",
    },
    {
      quantity: quantity_PhuongTanPhu,
      img: img_TanPhu,
      href: "/TanPhu",
    },
    {
      quantity: quantity_PhuongBinhTho,
      img: img_BinhTho,
      href: "/BinhTho",
    },

    {
      quantity: quantity_PhuongHiepPhu,
      img: img_HiepPhu,
      href: "/HiepPhu",
    },

    {
      quantity: quantity_PhuongTruongTho,
      img: img_TruongTho,
      href: "/TruongTho",
    },

    {
      quantity: quantity_PhuongTangNhonPhuB,
      img: img_TangNhonPhuB,
      href: "/TangNhonPhuB",
    },

    {
      quantity: quantity_PhuongLongThanhMy,
      img: img_LongThanhMy,
      href: "/LongThanhMy",
    },
    {
      quantity: quantity_PhuongPhuocLongA,
      img: img_PhuocLongA,
      href: "/PhuocLongA",
    },
    {
      quantity: quantity_PhuongPhuocLongB,
      img: img_PhuocLongB,
      href: "/PhuocLongB",
    },
    {
      quantity: quantity_PhuongHiepBinhChanh,
      img: img_HiepBinhChanh,
      href: "/HiepBinhChanh",
    },
    {
      quantity: quantity_PhuongPhuHuu,
      img: img_PhuHuu,
      href: "/PhuHuu",
    },
    {
      quantity: quantity_PhuongLinhTay,
      img: img_LinhTay,
      href: "/LinhTay",
    },
  ]);
}
export default streets;
