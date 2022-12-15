import React from "react";

export default function Button(props) {
  return (
    <button type={props.type} className={props.classes} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
