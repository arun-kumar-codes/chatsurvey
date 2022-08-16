import React from "react";
import style from "../style/optionBox.scss";
const OptionBox = (props) => {
  return (
    <div className="optionContainer">
        {props?.chat?.options?.map((option) => {
            return(
   <li className = "optionsbtn">
     <button type="button" className="btn">{option}
</button>
   </li>)
        })}
    </div>
  );
};
export default OptionBox;