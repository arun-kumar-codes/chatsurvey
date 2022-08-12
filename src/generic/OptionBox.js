import React from "react";
import style from "../style/optionBox.scss";
const OptionBox = (props) => {
     console.log(props.chat.options , "chat")
  return (
    <div>
        {props?.chat?.options?.map((option) => {
            return(
   <li style={{listStyle : "none", marginTop : "10px"}}>
     <button type="button" className="btn optnbutton">{option}
</button>
   </li>)
        })}
    </div>
  );
};
export default OptionBox;