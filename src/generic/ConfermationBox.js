import React from "react";
import style from "../style/optionBox.scss";

const Confirmation = (props) => {
  return (
      <div className={"outgoingMsg d-flex align-items-start justify-content-end mb-2"}>
     <div className={"outgoingMsgContent" }></div>
     <div className="msg">{props.option}</div>
      </div>
  );
};
export default Confirmation;
