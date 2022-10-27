import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function Loader(props) {
  const override = {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
  };
  const styleLoader = {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 5,
    width: "100%",
    height: "100%",
    background: "white",
  };
  return (
    <div style={styleLoader}>
      <ClipLoader loading={props.state} cssOverride={override} size={150} />
    </div>
  );
}
