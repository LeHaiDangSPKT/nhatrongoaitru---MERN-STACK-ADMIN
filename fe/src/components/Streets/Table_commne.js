import "../../styles/table_address.scss";
import { Link } from "react-router-dom";
import RemoveVietnameseTones from "../RemoveVietnameseTones";
import * as React from "react";

function Table_Commne({ list }) {
  return (
    <div className="table-address">
      {list.map((item) => {
        return (
          <Link
            className={`table-item`}
            key={item}
            to={`/${RemoveVietnameseTones(item)}`}
          >
            {item}
          </Link>
        );
      })}
    </div>
  );
}

export default Table_Commne;
