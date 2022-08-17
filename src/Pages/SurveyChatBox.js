import React, { useState, useEffect } from "react";
import style from "../style/SurveyChatBox.scss";
import chat from "../utills/chatjson";
import classNames from "classnames";
import Star from "../generic/Star";
import OptionBox from "../generic/OptionBox";
import avatarImg from "../assets/chat1.png";
const SurveyChatBox = () => {
  const [data, dataSet] = useState("");
  const [answer, setAnswer] = useState("");
  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch(
        "http://developers.frameanalytics.com/api/question/JIwZkAfZLcQ7LzwrGJLS"
      );
      response = await response.json();
      dataSet(response);
    }
    fetchMyAPI();
  }, []);
  const userImg = classNames({
    userImg: chat.qtype === "stextbox",
  });
  return (
    <div>
      <section className="chatSection">
        <div className="container">
          <div className="chatWrp">
            <div className="poweredBy">Powered by Surveypoint</div>
            <div className="wholeChat">
              <div
                className={"incomingMsg d-flex gap-20 align-items-start mb-2"}
              >
                <div className={userImg}>
                  <img src={avatarImg} alt="" />
                </div>
                <div className={"incomingMsgContent"}>
                  {/* <div className={chat.qtype? "incomingMsgContent" :" outgoingMsgContent" }> */}
                  <div className="msg">
                    {/* {data.surveydata[0]?.ques_title_json} */}
                  </div>
                  <div className="outgoingMsg d-flex align-items-start justify-content-end mb-2">
                    {/* <div className="outgoingMsgContent"></div> */}
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
              <div>
                {chat.ans_json_data == "mcq" ? (
                  <OptionBox chat={chat} />
                ) : (
                  <div className="chatType">
                    <input
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                      type="text"
                      className="form-control transInput"
                      placeholder="Type Here..."
                    />
                    <button className="transBtn">
                      <i className="fas fa-paper-plane"></i>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default SurveyChatBox;
