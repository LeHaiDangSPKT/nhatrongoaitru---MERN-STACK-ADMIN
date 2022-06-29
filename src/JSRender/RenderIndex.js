import streets from "./data/street.js";
import table from "./data/table.js";
import activities from "./data/activities.js";

const arr = Object.values(streets()).sort((a, b) => b.quantity - a.quantity);
let list = "";
export function itemStreets() {
  list = "";
  return (list = arr.map((item) => {
    return `
            <a target="_blank" rel="noopener noreferrer" href=${item.href}>
                <li class="content__place-item">
                    <img src=${item.img} alt="">
                    <div class="content__place-item--text">
                        <span>Có ${item.quantity} nhà trọ</span>
                    </div>
                </li>
            </a>
        `;
  }));
}

export function itemTable() {
  list = "";
  return (list = Object.values(table()).map((item, index) => {
    return `
            <div class="table-row">
                <div class="table-data">${index + 1}</div>
                <div class="table-data">${item.name}</div>
                <div class="table-data">${item.state}</div>
            </div>
          `;
  }));
}

export function itemActivities() {
  list = "";
  return (list = Object.values(activities()).map((item) => {
    return `
        <div class="col l-4 m-4 c-5">
            <div class="content__activities-item">
                <img src=${item.img}>
                <a href=${item.link}>${item.content}</a>
            </div>
        </div>
            `;
  }));
}
