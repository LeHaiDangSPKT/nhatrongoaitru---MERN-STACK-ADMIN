import * as React from "react";
import Axios from "axios";
import Table_detail from "./Table_detail";
import RemoveVietnameseTones from "../RemoveVietnameseTones";
import $ from "jquery";
import "../../styles/Manager/manager.scss";
import { BiTrashAlt } from "react-icons/bi";
import FileBase64 from "react-file-base64";
import Loader from "../Loader";

export default function Manager() {
  const [idWard, setIdWard] = React.useState("");
  const [nameOfWard, setNameOfWard] = React.useState("");
  const [listOfWard, setListOfWard] = React.useState([]);
  const [loader, setLoader] = React.useState(true);

  const [newHome, setNewHome] = React.useState({
    name: "",
    address: "",
    map: "",
    distance: 0,
    price: 0,
    power: 0,
    water: 0,
    motorcycle: 0,
    wifi: 0,
    airConditioner: 0,
    waste: 0,
    describe: "",
    hostName: "",
    hostPhoneNumber: "",
    imgHome: "",
  });

  const [newWard, setNewWard] = React.useState({
    name: "",
    imgWardMain: "",
    imgWardSub: "",
  });

  //Get data wards
  React.useEffect(() => {
    Axios.get("https://nhatrongoaitruspkt.herokuapp.com/manager/").then(
      (response) => {
        setListOfWard(response.data);
        setNameOfWard(response.data[0].name);
        setLoader(false);
      }
    );
  }, []);

  const setActive = () => {
    var btns = document.getElementsByClassName("item-ward");
    for (var i = 0; i < btns.length; i++) {
      if (btns[i].value === nameOfWard) {
        btns[i].style.backgroundColor = "#0d6efd";
        btns[i].style.color = "white";
      } else {
        btns[i].style.backgroundColor = "transparent";
        btns[i].style.color = "#0d6efd";
      }
    }
  };
  setActive();

  const addWard = () => {
    Axios.post("https://nhatrongoaitruspkt.herokuapp.com/manager/addWard", {
      name: newWard.name,
      imgWardMain: newWard.imgWardMain,
      imgWardSub: newWard.imgWardSub,
    })
      .then(function (response) {
        setNameOfWard(newWard.name);
        setListOfWard([
          ...listOfWard,
          {
            name: newWard.name,
            imgWardMain: newWard.imgWardMain,
            imgWardSub: newWard.imgWardSub,
          },
        ]);
      })
      .catch(function (error) {
        alert("Th??m th???t b???i...");
      });
  };

  const handleSubmit = () => {
    Axios.post("https://nhatrongoaitruspkt.herokuapp.com/manager/addHome", {
      name: newHome.name,
      address: newHome.address,
      map: newHome.map,
      distance: newHome.distance,
      price: newHome.price,
      power: newHome.power,
      water: newHome.water,
      motorcycle: newHome.motorcycle,
      wifi: newHome.wifi,
      airConditioner: newHome.airConditioner,
      waste: newHome.waste,
      describe: newHome.describe,
      hostName: newHome.hostName,
      hostPhoneNumber: newHome.hostPhoneNumber,
      imgHome: newHome.imgHome,
    })
      .then(function (response) {
        setNameOfWard(newHome.name);
        alert("Th??m th??nh c??ng");
      })
      .catch(function (error) {
        alert("Th??m th???t b???i...");
      });
  };

  const handleChange = (e) => {
    setNewHome({ ...newHome, [e.target.name]: e.target.value });
  };

  const handleSelect = () => {
    const value = $("#inputGroupSelectWard").val();
    setNewHome({ ...newHome, name: value });
  };

  const handleDeleteWard = (id, name) => {
    setIdWard(id);
    setNameOfWard(name);
  };

  const handleDestroyWard = () => {
    Axios.delete(
      `https://nhatrongoaitruspkt.herokuapp.com/manager/home/deleteHomeByName/${RemoveVietnameseTones(
        nameOfWard
      )}`
    )
      .then(function (response) {
        alert(`???? xo?? t???t c??? nh?? thu???c ph?????ng ${nameOfWard}`);
      })
      .catch(function (error) {
        alert("Xo?? nh?? th???t b???i...");
      });

    Axios.delete(
      `https://nhatrongoaitruspkt.herokuapp.com/manager/ward/deleteWard/${idWard}`
    )
      .then(function (response) {
        const result = listOfWard.filter((ward) => !(ward.name == nameOfWard));
        setListOfWard(result);
        setNameOfWard(listOfWard[0].name);
      })
      .catch(function (error) {
        alert("Xo?? th???t b???i...");
      });
  };

  return (
    <div id="content">
      {loader ? (
        <Loader state={loader} />
      ) : (
        <div className="grid wide">
          <div className="row">
            <div className="col-4">
              <div className="list-group" id="list-tab" role="tablist">
                {listOfWard.map((item) => {
                  return (
                    <div className="d-flex" key={item._id}>
                      <input
                        value={item.name}
                        type="button"
                        className="btn btn-lg w-100 btn-outline-primary item-ward"
                        onClick={() => setNameOfWard(item.name)}
                      ></input>
                      <button
                        className="btn-delete-ward"
                        data-bs-toggle="modal"
                        data-bs-target="#deleteWardModal"
                        onClick={() => handleDeleteWard(item._id, item.name)}
                      >
                        <BiTrashAlt />
                      </button>
                    </div>
                  );
                })}
              </div>
              <div className="add-ward">
                <button
                  id="btnAddWard"
                  type="button"
                  className="btn btn-primary btn-add-ward"
                  data-bs-toggle="modal"
                  data-bs-target="#addWardModal"
                >
                  Th??m ph?????ng
                </button>
              </div>
            </div>
            <div className="col-8">
              <Table_detail nameOfWard={RemoveVietnameseTones(nameOfWard)} />
            </div>
          </div>

          {/* MODAL ADD WARD*/}
          <div className="modal-add-ward">
            <div
              className="modal fade"
              id="addWardModal"
              tabIndex="-1"
              aria-labelledby="addWardModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="addWardModalLabel">
                      Th??m ph?????ng m???i
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="mb-3">
                      <label className="col-form-label">T??n ph?????ng:</label>
                      <input
                        required
                        type="text"
                        className="form-control"
                        name="name"
                        value={newWard.name}
                        onChange={(e) =>
                          setNewWard({ ...newWard, name: e.target.value })
                        }
                      ></input>
                    </div>
                    <div className="mb-3">
                      <label className="col-form-label">???nh ch??nh:</label>
                      <FileBase64
                        accept="image/*"
                        multiple={false}
                        type="file"
                        value={newWard.imgWardMain}
                        onDone={({ base64 }) =>
                          setNewWard({ ...newWard, imgWardMain: base64 })
                        }
                      />
                    </div>
                    <div className="mb-3">
                      <label className="col-form-label">???nh ph???:</label>
                      <FileBase64
                        accept="image/*"
                        multiple={false}
                        type="file"
                        value={newWard.imgWardSub}
                        onDone={({ base64 }) =>
                          setNewWard({ ...newWard, imgWardSub: base64 })
                        }
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Hu???
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      id="destroy-ward"
                      data-bs-toggle="modal"
                      data-bs-dismiss="modal"
                      onClick={addWard}
                    >
                      X??c nh???n
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MODAL ADD HOME */}
          <div
            className="modal fade modal-lg"
            id="addModal"
            tabIndex="-1"
            aria-labelledby="addModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="addModalLabel">
                    Th??m m???t nh?? tr???
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="col-form-label">Ph?????ng:</label>
                    <select
                      className="form-select"
                      id="inputGroupSelectWard"
                      onChange={handleSelect}
                    >
                      <option defaultValue>Choose...</option>
                      {listOfWard.map((item) => {
                        return (
                          <option
                            key={item._id}
                            value={RemoveVietnameseTones(item.name)}
                          >
                            {item.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="col-form-label">?????a ch???:</label>
                    <input
                      required
                      type="text"
                      className="form-control"
                      name="address"
                      value={newHome.address}
                      onChange={handleChange}
                    ></input>
                  </div>
                  <div className="mb-3">
                    <label className="col-form-label">Map:</label>
                    <input
                      required
                      type="text"
                      className="form-control"
                      name="map"
                      value={newHome.map}
                      onChange={handleChange}
                    ></input>
                  </div>
                  <div className="mb-3">
                    <label className="col-form-label">Kho???ng c??ch:</label>
                    <input
                      required
                      type="text"
                      className="form-control"
                      name="distance"
                      value={newHome.distance}
                      onChange={handleChange}
                    ></input>
                  </div>
                  <div className="mb-3 d-flex justify-content-between">
                    <div className="w-25">
                      <label className="col-form-label">Ti???n ph??ng:</label>
                      <input
                        required
                        type="text"
                        className="form-control"
                        name="price"
                        value={newHome.price}
                        onChange={handleChange}
                      ></input>
                    </div>
                    <div className="w-25">
                      <label className="col-form-label">Ti???n ??i???n:</label>
                      <input
                        required
                        type="text"
                        className="form-control"
                        name="power"
                        value={newHome.power}
                        onChange={handleChange}
                      ></input>
                    </div>
                    <div className="w-25">
                      <label className="col-form-label">Ti???n n?????c:</label>
                      <input
                        required
                        type="text"
                        className="form-control"
                        name="water"
                        value={newHome.water}
                        onChange={handleChange}
                      ></input>
                    </div>
                  </div>
                  <div className="mb-3 d-flex justify-content-between">
                    <div className="w-25">
                      <label className="col-form-label">Ti???n gi??? xe:</label>
                      <input
                        required
                        type="text"
                        className="form-control"
                        name="motorcycle"
                        value={newHome.motorcycle}
                        onChange={handleChange}
                      ></input>
                    </div>
                    <div className="w-25">
                      <label className="col-form-label">Ti???n wifi:</label>
                      <input
                        required
                        type="text"
                        className="form-control"
                        name="wifi"
                        value={newHome.wifi}
                        onChange={handleChange}
                      ></input>
                    </div>
                    <div className="w-25">
                      <label className="col-form-label">Ti???n m??y l???nh:</label>
                      <input
                        required
                        type="text"
                        className="form-control"
                        name="airConditioner"
                        value={newHome.airConditioner}
                        onChange={handleChange}
                      ></input>
                    </div>
                  </div>
                  <div className="mb-3 d-flex justify-content-between">
                    <div className="w-25">
                      <label className="col-form-label">Ti???n r??c:</label>
                      <input
                        required
                        type="text"
                        className="form-control"
                        name="waste"
                        value={newHome.waste}
                        onChange={handleChange}
                      ></input>
                    </div>
                    <div className="w-50">
                      <label className="col-form-label">M?? t???:</label>
                      <textarea
                        required
                        type="text"
                        className="form-control"
                        name="describe"
                        value={newHome.describe}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="col-form-label">T??n ch???: </label>
                    <input
                      required
                      type="text"
                      className="form-control"
                      name="hostName"
                      value={newHome.hostName}
                      onChange={handleChange}
                    ></input>
                  </div>
                  <div className="mb-3">
                    <label className="col-form-label">S??? ??i???n tho???i ch???:</label>
                    <input
                      required
                      type="text"
                      className="form-control"
                      name="hostPhoneNumber"
                      value={newHome.hostPhoneNumber}
                      onChange={handleChange}
                    ></input>
                  </div>
                  <div className="mb-3">
                    <label className="col-form-label">???nh:</label>
                    <FileBase64
                      accept="image/*"
                      multiple={false}
                      type="file"
                      value={newHome.imgHome}
                      onDone={({ base64 }) =>
                        setNewHome({ ...newHome, imgHome: base64 })
                      }
                    />
                  </div>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Hu???
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    onClick={handleSubmit}
                  >
                    X??c nh???n
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* MODAL DELETE WARD*/}
          <div className="modal-delete-ward">
            <div
              className="modal fade"
              id="deleteWardModal"
              tabIndex="-1"
              aria-labelledby="deleteWardModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="deleteWardModalLabel">
                      Xo?? ph?????ng ...
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    T???t c??? nh?? tr?? thu???c ph?????ng {nameOfWard} s??? b??? xo??. B???n ch???c
                    ch???n mu???n xo?? ch????
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Hu???
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      id="destroy-ward"
                      data-bs-toggle="modal"
                      onClick={handleDestroyWard}
                    >
                      X??c nh???n
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
