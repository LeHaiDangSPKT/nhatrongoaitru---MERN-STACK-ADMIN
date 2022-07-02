import { SiOpenstreetmap } from "react-icons/si";
import {
  FaHome,
  FaRegSnowflake,
  FaMotorcycle,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoIosWater, IoIosWifi, IoIosTrash } from "react-icons/io";
import { TbWritingSign } from "react-icons/tb";
import { GiElectric } from "react-icons/gi";
import { AiFillIdcard } from "react-icons/ai";
import Slick from "../../js/Slick";

const style = {
  marginRight: "5px",
  fontSize: "20px",
  transform: "translate(0, 3px)",
};

const styleCard = {
  fontSize: "35px",
  marginRight: "10px",
  transform: "translate(0, -2px)",
};

const stylePhone = { fontSize: "25px", marginRight: "10px" };
if (document.body.clientWidth >= 740 && document.body.clientWidth <= 1024) {
  style.fontSize = "14px";
}
if (document.body.clientWidth <= 740) {
  style.fontSize = "12px";
  styleCard.fontSize = "20px";
  stylePhone.fontSize = "15px";
}
function ItemStreet(prop) {
  let flag;
  return (flag = prop.ob.map((item, index) => {
    if (item.state.toString() === prop.state) {
      let list = Object.values(item.img_phong).map((subItem) => {
        return `
          <img src=${subItem} alt="">
        `;
      });
      return (
        <div key={index} className="col c-6">
          <div className="street-item">
            <div className="address-and-map">
              <div className="address">
                <h2>
                  {item.address} (cách trường {item.distance} km)
                </h2>
              </div>
              <a
                href={item.map}
                style={{ textDecoration: "none" }}
                className="btn-map"
              >
                <SiOpenstreetmap style={{ color: "white" }} />
              </a>
            </div>
            <div className="info-home">
              <div className="list-img">
                <Slick list={list} dot={false} show={1} />
              </div>
              <div className="item-content">
                <div className="info-home-detail">
                  <ul>
                    <li>
                      <span>
                        <FaHome style={style} />
                        Giá phòng:{" "}
                      </span>
                      {item.info.giaphong} đồng/tháng
                    </li>
                    <li>
                      <span>
                        <GiElectric style={style} /> Điện:{" "}
                      </span>
                      {item.info.dien}
                    </li>
                    <li>
                      <span>
                        <IoIosWater style={style} /> Nước:{" "}
                      </span>
                      {item.info.nuoc}
                    </li>
                    <li>
                      <span>
                        <FaMotorcycle style={style} /> Gửi xe:{" "}
                      </span>{" "}
                      {item.info.xe}
                    </li>
                    <li>
                      <span>
                        <IoIosWifi style={style} /> Wifi:{" "}
                      </span>
                      {item.info.wifi}
                    </li>
                    <li>
                      <span>
                        <FaRegSnowflake style={style} /> Máy lạnh:{" "}
                      </span>{" "}
                      {item.info.maylanh}
                    </li>
                    <li>
                      <span>
                        <IoIosTrash style={style} /> Rác:{" "}
                      </span>
                      {item.info.rac}
                    </li>
                    <li style={{ color: "#408E9D", fontWeight: "700" }}>
                      <TbWritingSign style={style} />
                      Mô tả về nhà trọ:{" "}
                    </li>
                    <li style={{ paddingLeft: "10px" }}>
                      {item.info.description.mt1}
                    </li>
                    <li style={{ paddingLeft: "10px" }}>
                      {item.info.description.mt2}
                    </li>
                    <li style={{ paddingLeft: "10px" }}>
                      {item.info.description.mt3}
                    </li>
                    <li style={{ paddingLeft: "10px" }}>
                      {item.info.description.mt4}
                    </li>
                    <li style={{ paddingLeft: "10px" }}>
                      {item.info.description.mt5}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="avatar">
              <div className="info-admin">
                <div className="name">
                  <AiFillIdcard style={styleCard} />
                  {item.name_chu != "" ? item.name_chu : "Đang cập nhật"}
                </div>
                <div className="phone">
                  <FaPhoneAlt style={stylePhone} />
                  {item.phone_chu != "" ? item.phone_chu : "Đang cập nhật"}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }));
}
export default ItemStreet;
