import React, { useEffect, useState } from "react";
import style from "../style/optionBox.scss";
import Confirmation from "./ConfermationBox";
const OptionBox = (props) => {
 
  console.log(props.chat.ans_json_data.split(","), "value");

  return (
    <div className="optionContainer">
      <select
      className ="form-select form-select-sm optionsbtn"
        aria-label=".form-select-sm example"
      >

        {props.chat.ans_json_data.split(",")?.map((option) => {
          return (
            <option  value={option.value} key={option?.id}>
           {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default OptionBox;
