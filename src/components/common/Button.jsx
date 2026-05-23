import React from "react";
import "./Button.css";

export default function Btn(props) {
  return (
    <button className="custom-btn" style={{ backgroundColor: props.color }}>
      {props.value}
    </button>
  );
}
