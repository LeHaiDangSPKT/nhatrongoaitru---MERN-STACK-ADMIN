import "../styles/base.scss";
import "../styles/main.scss";
import "../styles/table.scss";
import "../styles/countdown.scss";
import "../styles/responsive.scss";
import "../styles/slick.scss";
import Slick from "../js/Slick";
import {
  itemStreets,
  itemTable,
  itemActivities,
} from "../JSRender/RenderIndex";

function Content_main() {
  let listStreets = itemStreets();
  let listTable = itemTable();
  let listActivities = itemActivities();
  console.log(listStreets);
  return (
    <div id="content">
      <div className="grid wide">
        <div className="content__place">
          <div className="content__title">
            <h3 className="content__heading">Tìm nhà trọ</h3>
            <div className="content__heading-sub">
              Gần trường ĐH SPKT TP.HCM
            </div>
            <p className="feedback">
              *Các thông tin sẽ được cập nhật theo định kì, nếu có sai sót hãy
              đóng góp ở ngay địa điểm đó nhé!
            </p>
            <p className="feedback">
              *Nếu muốn đóng góp thêm nơi ở của mình, bạn có thể đóng góp tại{" "}
              <a href="https://tinyurl.com/yckk29zp">đây.</a>
            </p>
          </div>
          <div className="content__place-list">
            <Slick list={listStreets} dot={true} show={4} />
          </div>
        </div>
        <div className="content__activities">
          <div className="content__title">
            <h3 className="content__heading">
              Các hoạt động của LCH Sinh viên Ngoại Trú
            </h3>
            <div className="content__heading-sub">
              Đây là các hoạt động diễn ra trong năm học 2021-2022
            </div>
          </div>
          <div className="table">
            <div className="table-header">
              <div className="header__item">
                <div id="name" className="filter__link">
                  STT
                </div>
              </div>
              <div className="header__item">
                <div id="wins" className="filter__link filter__link--number">
                  Tên hoạt động
                </div>
              </div>
              <div className="header__item">
                <div id="draws" className="filter__link filter__link--number">
                  Trạng thái
                </div>
              </div>
            </div>
            <div
              className="table-content"
              dangerouslySetInnerHTML={{
                __html: listTable.toString().replace(/,/g, ""),
              }}
            ></div>
          </div>
          <h3 className="content__heading-center">
            Các hoạt động đã và đang diễn ra
          </h3>
          <div
            className="content__activities-list"
            dangerouslySetInnerHTML={{
              __html: listActivities.toString().replace(/,/g, ""),
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Content_main;
