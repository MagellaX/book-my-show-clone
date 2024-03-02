import React from "react";

export const NextArrow = (props) => (
  <div
    className={props.className}
    style={{...props.style }}
    onClick={props.onClick}
  />
);

export const PrevArrow = (props) => (
  <div
    className={props.className}
    style={{...props.style }}
    onClick={props.onClick}
  />
);
