import React from "react";
import style from "../style/SurveyChatBox.scss";
import chat from "../utills/chatjson";
import classNames from "classnames";
import Star from "../generic/Star";
import OptionBox from "../generic/OptionBox";
import Confirmation from "../generic/ConfermationBox";
const SurveyChatBox = () => {
  const userImg = classNames({
    userImg: chat.image,
  });
  return (
    <div>
      <section className="chatSection">
        <div className="container">
          <div className="chatWrp">
            <div className="poweredBy">Powered by Surveypoint</div>
            <div className="wholeChat">
              {chat.map((chat) => {
                return (
                  <div
                    className={
                      chat.incoming
                        ? "incomingMsg d-flex gap-20 align-items-start mb-2"
                        : "outgoingMsg d-flex align-items-start justify-content-end mb-2"
                    }
                  >
                    <div className={userImg}>
                      <img src={chat.image} alt="" />
                    </div>
                    <div className={chat.incoming? "incomingMsgContent" :" outgoingMsgContent" }>
                      <div className="msg">{chat.message}</div>
					  <div>
					  {chat.options ?  <OptionBox chat = {chat}/>: ""}
					  </div>
                      {chat.incoming && chat.star ? (
                        <Star className="listInline mb-0 mt-1" />
                      ) : chat.star ? (
                        <Star className="listInline mb-0 colorRatings" />
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                );
			})}
            </div>
            <div className="chatType">
			{/* <Confirmation /> */}
              <input
                type="text"
                className="form-control transInput"
                placeholder="Type Here..."
              />
              <button className="transBtn">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default SurveyChatBox;