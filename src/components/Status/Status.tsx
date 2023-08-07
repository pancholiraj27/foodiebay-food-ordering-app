import React from "react";
import "./Status.css";

const Status = (props: any) => {
  return <div className={`setStatus ${props.style}`}>{props.text}</div>;
};

export default Status;
