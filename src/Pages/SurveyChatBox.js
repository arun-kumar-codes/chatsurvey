import React, { useState, useEffect } from "react";
import style from "../style/SurveyChatBox.scss";
import chat from "../utills/chatjson";
import classNames from "classnames";
import Star from "../generic/Star";
import OptionBox from "../generic/OptionBox";
import Confirmation from "../generic/ConfermationBox";
import avatarImg from "../assets/chat1.png";
const SurveyChatBox = () => {
  const [chatData, setChatData] = useState([]);

  useEffect(() => {
    fetch(
      "http://developers.frameanalytics.com/api/question/JIwZkAfZLcQ7LzwrGJLS"
    )
      .then((response) => response.json())
      .then((data) => {
        //  console.log(data);
        setChatData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const userImg = classNames({
    userImg: chat.qtype === "stextbox",
  });

  // console.log(chatData?.surveydata[1]?.ans_json_data.split(","), "dataaaaaaaaaaaaaaaaaaaaa")
  return (
    <div>
      <section className="chatSection">
        <div className="container">
          <div className="chatWrp">
            <div className="poweredBy">Powered by Surveypoint</div>
            <div className="wholeChat">
              {chatData?.surveydata?.map((chat) => {
                return (
                  <div
                    className={
                      "incomingMsg d-flex gap-20 align-items-start mb-2"
                    }
                    // : "outgoingMsg d-flex align-items-start justify-content-end mb-2"
                  >
                    <div className={userImg}>
                      <img src={avatarImg} alt="" />
                    </div>
                    <div className={"incomingMsgContent"}>
                      {/* <div className={chat.qtype? "incomingMsgContent" :" outgoingMsgContent" }> */}
                      <div className="msg">{chat.ques_title_json}</div>
                      <div>
                        {chat.ans_json_data ? <OptionBox chat={chat} /> : ""}
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
