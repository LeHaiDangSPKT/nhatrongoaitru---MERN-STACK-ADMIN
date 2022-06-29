import "../../styles/table_address.scss";
import { Link } from "react-router-dom";
import RemoveVietnameseTones from "../RemoveVietnameseTones";
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

let class_name;
function Table_Address(prop) {
  return (
    <div className="table-address">
      {data.map((item, index) => {
        class_name = "";
        if (RemoveVietnameseTones(item) == prop.name) {
          class_name = "active";
        }
        return (
          <Link
            className={`table-item ${class_name}`}
            key={index}
            to={`/${RemoveVietnameseTones(item)}`}
          >
            {item}
          </Link>
        );
      })}
    </div>
  );
}

export default Table_Address;
