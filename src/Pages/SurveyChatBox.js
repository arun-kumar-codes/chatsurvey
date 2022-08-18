import React, { useState, useEffect } from "react";
import style from "../style/SurveyChatBox.scss";
import chat from "../utills/chatjson";
import classNames from "classnames";
import Star from "../generic/Star";
import OptionBox from "../generic/OptionBox";
import avatarImg from "../assets/chat1.png";
const SurveyChatBox = () => {
  const [data, dataSet] = useState();
  const [answer, setAnswer] = useState("");
  const [name, setName] = useState();
  const [Q2ans, setQ2] = useState();
  const [question, setQuestion] = useState();
  const [questionNumber, setQuestionNumber] = useState(0);
  const [prevAnswer, setPrevAnswer] = useState({
    q0: "",
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    q7: "",
    q8: "",
  });

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch(
        "http://developers.frameanalytics.com/api/question/JIwZkAfZLcQ7LzwrGJLS"
      );
      response = await response.json();
      dataSet(response);
      setQuestion(response?.surveydata[questionNumber]);
    }
    fetchMyAPI();
  }, [questionNumber]);
  const userImg = classNames({
    userImg: chat.qtype === "stextbox",
  });
  const handleClick = (e) => {
    setName(answer);
    setPrevAnswer({ ...prevAnswer, [`q${questionNumber}`]: answer });
    setQuestionNumber(questionNumber + 1);
    setAnswer("");
  };

    console.log(data ,"uasgfjhsdjgkf")

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
                    {data?.surveydata[0]?.ques_title_json}
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
              {prevAnswer.q0 && (
                <div
                  className="incomingMsgContent d-flex align-items-start justify-content-end mb-2"
                  style={{ marginRight: "4%" }}
                >
                  <div className="msg">{prevAnswer.q0}</div>
                </div>
              )}

              {prevAnswer.q0 && (
                <>
                  <div
                    className={
                      "incomingMsg d-flex gap-20 align-items-start mb-2"
                    }
                  >
                    <div className={userImg}>
                      <img src={avatarImg} alt="" />
                    </div>
                    <div className={"incomingMsgContent"}>
                      {/* <div className={chat.qtype? "incomingMsgContent" :" outgoingMsgContent" }> */}
                      <div className="msg">
                        {data?.surveydata[1]?.ques_title_json}
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
                  {prevAnswer.q1 && (
                    <div
                      className="incomingMsgContent d-flex align-items-start justify-content-end mb-2"
                      style={{ marginRight: "4%" }}
                    >
                      <div className="msg">{prevAnswer.q1}</div>
                    </div>
                  )}
                </>
              )}

              {prevAnswer.q1 && (
                <>
                  <div
                    className={
                      "incomingMsg d-flex gap-20 align-items-start mb-2"
                    }
                  >
                    <div className={userImg}>
                      <img src={avatarImg} alt="" />
                    </div>
                    <div className={"incomingMsgContent"}>
                      {/* <div className={chat.qtype? "incomingMsgContent" :" outgoingMsgContent" }> */}
                      <div className="msg">
                        {data?.surveydata[2]?.ques_title_json}
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
                  {prevAnswer.q2 && (
                    <div
                      className="incomingMsgContent d-flex align-items-start justify-content-end mb-2"
                      style={{ marginRight: "4%" }}
                    >
                      <div className="msg">{prevAnswer.q2}</div>
                    </div>
                  )}
                </>
              )}

              {prevAnswer.q2 && (
                <>
                  <div
                    className={
                      "incomingMsg d-flex gap-20 align-items-start mb-2"
                    }
                  >
                    <div className={userImg}>
                      <img src={avatarImg} alt="" />
                    </div>
                    <div className={"incomingMsgContent"}>
                      {/* <div className={chat.qtype? "incomingMsgContent" :" outgoingMsgContent" }> */}
                      <div className="msg">
                        {data?.surveydata[3]?.ques_title_json}
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
                  {prevAnswer.q3 && (
                    <div
                      className="incomingMsgContent d-flex align-items-start justify-content-end mb-2"
                      style={{ marginRight: "4%" }}
                    >
                      <div className="msg">{prevAnswer.q3}</div>
                    </div>
                  )}
                </>
              )}

              {prevAnswer.q3 && (
                <>
                  <div
                    className={
                      "incomingMsg d-flex gap-20 align-items-start mb-2"
                    }
                  >
                    <div className={userImg}>
                      <img src={avatarImg} alt="" />
                    </div>
                    <div className={"incomingMsgContent"}>
                      {/* <div className={chat.qtype? "incomingMsgContent" :" outgoingMsgContent" }> */}
                      <div className="msg">
                        {data?.surveydata[4]?.ques_title_json}
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
                  {prevAnswer.q4 && (
                    <div
                      className="incomingMsgContent d-flex align-items-start justify-content-end mb-2"
                      style={{ marginRight: "4%" }}
                    >
                      <div className="msg">{prevAnswer.q4}</div>
                    </div>
                  )}
                </>
              )}

              {prevAnswer.q4 && (
                <>
                  <div
                    className={
                      "incomingMsg d-flex gap-20 align-items-start mb-2"
                    }
                  >
                    <div className={userImg}>
                      <img src={avatarImg} alt="" />
                    </div>
                    <div className={"incomingMsgContent"}>
                      {/* <div className={chat.qtype? "incomingMsgContent" :" outgoingMsgContent" }> */}
                      <div className="msg">
                        {data?.surveydata[5]?.ques_title_json}
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
                  {prevAnswer.q5 && (
                    <div
                      className="incomingMsgContent d-flex align-items-start justify-content-end mb-2"
                      style={{ marginRight: "4%" }}
                    >
                      <div className="msg">{prevAnswer.q5}</div>
                    </div>
                  )}
                </>
              )}

              {prevAnswer.q5 && (
                <>
                  <div
                    className={
                      "incomingMsg d-flex gap-20 align-items-start mb-2"
                    }
                  >
                    <div className={userImg}>
                      <img src={avatarImg} alt="" />
                    </div>
                    <div className={"incomingMsgContent"}>
                      {/* <div className={chat.qtype? "incomingMsgContent" :" outgoingMsgContent" }> */}
                      <div className="msg">
                        {data?.surveydata[6]?.ques_title_json}
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
                  {prevAnswer.q6 && (
                    <div
                      className="incomingMsgContent d-flex align-items-start justify-content-end mb-2"
                      style={{ marginRight: "4%" }}
                    >
                      <div className="msg">{prevAnswer.q6}</div>
                    </div>
                  )}
                </>
              )}

              {prevAnswer.q6 && (
                <>
                  <div
                    className={
                      "incomingMsg d-flex gap-20 align-items-start mb-2"
                    }
                  >
                    <div className={userImg}>
                      <img src={avatarImg} alt="" />
                    </div>
                    <div className={"incomingMsgContent"}>
                      {/* <div className={chat.qtype? "incomingMsgContent" :" outgoingMsgContent" }> */}
                      <div className="msg">
                        {data?.surveydata[7]?.ques_title_json}
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
                  {prevAnswer.q7 && (
                    <div
                      className="incomingMsgContent d-flex align-items-start justify-content-end mb-2"
                      style={{ marginRight: "4%" }}
                    >
                      <div className="msg">{prevAnswer.q7}</div>
                    </div>
                  )}
                </>
              )}


            {data?.surveydata.length !== questionNumber ?
              <div>
                {data?.surveydata[questionNumber]?.qtype == "mcq" ? (
                  <div
                    style={{
                      display: "flex",
                      width: "50%",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <div>
                      <button
                        style={{ border: "none" }}
                        onClick={() => {
                          setQ2("haryana");
                          setPrevAnswer({
                            ...prevAnswer,
                            [`q${questionNumber}`]: "haryana",
                          });
                          setQuestionNumber(questionNumber + 1);
                        }}
                      >
                        haryana
                      </button>
                    </div>
                    <div>
                      <button
                        style={{ border: "none" }}
                        onClick={() => {
                          setQ2("punjab");
                          setPrevAnswer({
                            ...prevAnswer,
                            [`q${questionNumber}`]: "punjab",
                          });
                          setQuestionNumber(questionNumber + 1);
                        }}
                      >
                        punjab
                      </button>
                    </div>
                    <div>
                      <button
                        style={{ border: "none" }}
                        onClick={() => {
                          setQ2("delhi");
                          setPrevAnswer({
                            ...prevAnswer,
                            [`q${questionNumber}`]: "delhi",
                          });
                          setQuestionNumber(questionNumber + 1);
                        }}
                      >
                        delhi
                      </button>
                    </div>
                    <div>
                      <button
                        style={{ border: "none" }}
                        onClick={() => {
                          setQ2("UP");
                          setPrevAnswer({
                            ...prevAnswer,
                            [`q${questionNumber}`]: "UP",
                          });
                          setQuestionNumber(questionNumber + 1);
                        }}
                      >
                        Up
                      </button>
                    </div>
                  </div>
                ) : data?.surveydata[questionNumber]?.qtype == "radio" ? <>
                  <div style={{display:"flex", width:"200px", justifyContent:"space-evenly"}}>
                    <div style={{display:"flex", width:"50%" , justifyContent:"center"}}>
                      <input type="radio" value="yes" name="yesNO" onChange={() => {
                        setQ2("UP");
                        setPrevAnswer({
                          ...prevAnswer,
                          [`q${questionNumber}`]: "YES",
                        });
                        setQuestionNumber(questionNumber + 1);
                      }} />
                      <label style={{fontSize:"20px" , marginLeft:"10px"}}>YES</label>
                    </div>
                    <div style={{display:"flex", width:"50%" , justifyContent:"center"}}>
                      <input type="radio" value="no" name="yesNO" onChange={() => {
                        setQ2("UP");
                        setPrevAnswer({
                          ...prevAnswer,
                          [`q${questionNumber}`]: "NO",
                        });
                        setQuestionNumber(questionNumber + 1);
                      }} />
                      <label style={{fontSize:"20px", marginLeft:"10px"}}>NO</label>
                    </div>
                  </div>

                </> : (
                  <div className="chatType">
                    <input
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                      type="text"
                      className="form-control transInput"
                      placeholder="Type Here..."
                    />
                    <button
                      className="transBtn"
                      onClick={(e) => handleClick(e)}
                    >
                      <i className="fas fa-paper-plane"></i>
                    </button>
                  </div>
                )}
              </div> : <button>submit your response</button>}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default SurveyChatBox;
