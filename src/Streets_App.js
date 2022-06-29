import Header from "./components/Header";
import Footer from "./components/Footer";

import "./styles/base.scss";
import "./styles/grid.scss";
import "./styles/search.scss";
import "./styles/streets.scss";

function Streets_App() {
  return (
    <div id="main">
      <Header />
      <div id="content">
        {/* <img src="../img/Street/bg.png" alt="" class="bg-title"> */}
        <div class="grid wide">
          <a class="back" href="../index.html">
            <i class="fas fa-arrow-left"></i>Quay lại trang chủ
          </a>
          {/* <img src="../img/Street/BangTenDuong/BinhTho.png" alt="" class="street-name"> */}
          <div class="sort">
            <span>
              <i class="fas fa-filter"></i>Lọc nhà trọ theo{" "}
            </span>
            <div>
              <button class="sort-btn" id="sort-giaphong">
                Giá phòng
              </button>
              <button class="sort-btn" id="sort-khoangcach">
                Khoảng cách đến trường
              </button>
            </div>
          </div>
          <p class="feedback">
            Nếu thông tin có sai sót, vui lòng góp ý tại{" "}
            <a href="https://tinyurl.com/44349krw">đây.</a>
          </p>
          <p class="feedback">
            Nếu bạn đã tìm được nhà trọ, hãy để lại đánh giá tại{" "}
            <a href="https://tinyurl.com/4bh7vhae">đây </a>nhé.
          </p>
          <div class="search">
            <form class="search-container">
              <label for="search">Tìm kiếm nhà trọ còn phòng: </label>
              {/* <input type="search" id="search-bar" placeholder="Nhập địa chỉ nhà trọ bạn muốn tìm..." data-search> */}
            </form>
          </div>
          <div class="room-state">
            Còn <div class="quantity-availble"></div> nhà trọ còn phòng
          </div>
          <div>
            <div
              class="row street-list street-list-availble"
              data-user-template
            ></div>
          </div>
          <div class="room-state">
            <div class="quantity-unavailble"></div> nhà trọ hết phòng
          </div>
          <div>
            <div>
              <div class="row street-list street-list-unavailble"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <div id="loader-wapper">
        <div class="loader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}
export default Streets_App;
