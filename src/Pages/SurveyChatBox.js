import React, { useState, useEffect, useRef } from "react";
import style from "../style/SurveyChatBox.scss";
import chat from "../utills/chatjson";
import classNames from "classnames";
import Star from "../generic/Star";
import OptionBox from "../generic/OptionBox";
import avatarImg from "../assets/chat1.png";
import typingGif from "../assets/typing.gif";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SurveyChatBox = () => {
  const [alldata, setAllData] = useState();
  const [logicJson,setLogicJson] = useState(null)
  const [data, dataSet] = useState();
  const [dataLength, SetDataLength] = useState();
  const [answer, setAnswer] = useState();
  const [answers, setAnswers] = useState({});
  console.log(answers, 'answers of the qn')
  const [questionNumber, setQuestionNumber] = useState(1);
  const [question, setQuestion] = useState(1);
  const [typing, setSettyping] = useState({});
  const navigate = useNavigate();
  const messagesEndRef = useRef(null);

  const userImg = classNames({
    userImg: chat.qtype === "stextbox",
  });

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await axios.get(
        "http://developers.frameanalytics.com/thesurveypoint/api/question/RHWWGWljYBIEdGp1CsD5"
      );
    // data for logic
    let duplicate =  []
    response?.data?.surveydata?.map((val,ind) => {
       if(val?.logic_json){
          duplicate.push(JSON.parse(val?.logic_json).IF[0])
       }
    }) 
    setLogicJson(duplicate)    
// now all logic stored 
      setAllData(response.data.surveydata);
      SetDataLength(response?.data?.surveydata.length);
      setQuestion(response?.data?.surveydata[questionNumber - 1]);

      // different logic 
    let logic = response?.data?.surveydata[questionNumber-2]?.logic_json ? JSON.parse(response?.data?.surveydata[questionNumber-2].logic_json).IF[0] : null
    console.log(logic,'logic of q ',questionNumber-2)
     let desigredAns;
    if(logic?.value)
    {
      if(logic.value === answer)
      {
        let newVal = response.data.surveydata.splice(0, questionNumber-1);
        desigredAns = response.data.surveydata.filter((value) => value?.id?.toString() === logic?.jumpto?.toString())
        newVal.push(desigredAns[0]);
        dataSet(newVal);
      }
      else{
        let data = response.data.surveydata.splice(0, questionNumber);
        dataSet(data);
      }
    }
    else{
      let data = response.data.surveydata.splice(0, questionNumber);
      dataSet(data);
    }
 setAnswer('')
    }
    fetchMyAPI();
  }, [questionNumber]);
  
  const scrollToMyRef = () => {
    const scroll =
      messagesEndRef.current.scrollHeight - messagesEndRef.current.clientHeight;
    messagesEndRef.current.scrollTo(0, scroll);
  };

  const handleClick = () => {
    if (answer) {
      setQuestionNumber((prev) => prev + 1);
      setAnswers({
        ...answers,
        [question.ques_custom_no]: answer,
      });
      // setAnswer("");
    }
  };

  const handleChange = (e) => {
    setAnswer(e.target.value);
    setSettyping({
      [question.ques_custom_no]: "start_typing",
    });
  };
  
  const makeid = (length) => {
    var result = "";
    var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };
  
  const handleSubmit = async () => {
    let answersObj = {}
    for(let key in answers){
      let newKey = `answer_${key}`
      answersObj[newKey] = answers[key]
    }
    let ans = {
      survey_case_id: makeid(20),
      username: "Piyush Garg",
      survey_id: "JIwZkAfZLcQ7LzwrGJLS",
      json_data: JSON.stringify({
        section_title_url: "ASnivvjR5J1k4yNwydN8",
       ...answersObj
      }),
    };
    try {
      const res = await axios.post(
        "http://developers.frameanalytics.com/api/chatAnswer",
        ans
        );
        if (res.status == 200) {
          navigate("thankyou");
        }
      } catch (error) {
        console.log(error);
      }
    };
    
    useEffect(() => {
      scrollToMyRef();
    }, [questionNumber]);

    const handleSkip = () => {
        setQuestionNumber((prev) => prev + 1);
        setAnswers({
          ...answers,
          [question.ques_custom_no]: "SKIPED",
        });
        setAnswer("");
    };
    return (
    <div>
      <section className="chatSection">
        <div className="container">
          <div className="chatWrp">
            <div className="poweredBy">Powered by Surveypoint</div>
            <div className="wholeChat" style={{ width: "100%", height: "95%" }}>
              <div
                style={{
                  paddingBottom: "40px",
                  height: "80vh",
                  overflowY: "scroll",
                }}
                ref={messagesEndRef}
              >
                {data?.map((q, index) => {
                  return (
                    <>
                      <div
                        className={
                          "incomingMsg d-flex gap-20 align-items-start mb-2"
                        }
                        key={index}
                      >
                        <div className={userImg}>
                          <img src={avatarImg} alt="" />
                        </div>
                        <div className={"incomingMsgContent"}>
                          <div style={{ display: "flex" }}>
                            <div className="msg">{q.ques_title_json}</div>
                            {q?.validation?.is_require && !answers[q?.ques_custom_no] && (
                              <button
                                style={{
                                  marginLeft: "10px",
                                  border: "none",
                                  padding: "10px 20px",
                                  borderRadius: "10px",
                                  background: "#6380e3",
                                  color: "#fff",
                                }}
                                onClick={handleSkip}
                              >
                                SKIP
                              </button>
                            )}
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
                      {typing[q?.ques_custom_no] == "start_typing" && answer && (
                        <div
                          className="incomingMsgContent d-flex align-items-start justify-content-end mb-2"
                          style={{ marginRight: "4%" }}
                        >
                          <img
                            src={typingGif}
                            style={{ width: "100px", height: "50px" }}
                          />
                        </div>
                      )}

                      {answers[q?.ques_custom_no] && (
                        <div
                          className="incomingMsgContent d-flex align-items-start justify-content-end mb-2"
                          style={{ marginRight: "4%" }}
                        >
                          {answers[q?.ques_custom_no] == "SKIPED" ?<div className="skipmsg">{answers[q?.ques_custom_no]}</div> :<div className="msg">
                            {answers[q?.ques_custom_no]}
                          </div>}
                        </div>
                      )}
                    </>
                  );
                })}
              </div>
            </div>
            {dataLength - 1 !== questionNumber - 2 ? (
              <div style={{borderTop:"1px solid #ccc", padding:"10px 0px"}}>
                {question?.qtype == "mcq" ? 
                (
                  <div
                    style={{
                      display: "flex",
                      width: "50%",
                      justifyContent: "space-evenly",
                    }}
                  >
                    {
                      JSON.parse(question.ans_json_data).answer.map((val,index) => {
                        return(
                          <div>
                      {
                        <button
                          className="option-button"
                          onClick={() => {
                            setAnswers({
                              ...answers,
                              [`q${questionNumber}`]: val,
                            });
                            setQuestionNumber(questionNumber + 1);
                            setAnswer(val);
                          }}
                        >
                          {val}
                        </button>
                      }
                    </div>
                        )
                      })
                    }
                  </div>
                ) : question?.qtype == "radio" ? (
                  <div>
                    <div
                      style={{
                        display: "flex",
                        width: "200px",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          width: "50%",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="radio"
                          value="1"
                          name="yesNO"
                          onChange={(e) => {
                            setAnswers({
                              ...answers,
                              [`q${questionNumber}`]: "YES",
                            });
                            setQuestionNumber(questionNumber + 1);
                            setAnswer(e.target.value);
                          }}
                        />
                        <label style={{ fontSize: "20px", marginLeft: "10px" }}>
                          YES
                        </label>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          width: "50%",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="radio"
                          value="0"
                          name="yesNO"
                          onChange={(e) => {
                            setAnswers({
                              ...answers,
                              [`q${questionNumber}`]: "NO",
                            });
                            setQuestionNumber(questionNumber + 1);
                            setAnswer(e.target.value);
                          }}
                        />
                        <label style={{ fontSize: "20px", marginLeft: "10px" }}>
                          NO
                        </label>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="chatType">
                    <input
                      value={answer}
                      onChange={(e) => handleChange(e)}
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
              </div>
            ) : (
              <div>
                <button
                  style={{
                    padding: "10px 20px",
                    border: "none",
                    fontSize: "18px",
                  }}
                  onClick={handleSubmit}
                >
                  Submit Your Response
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
export default SurveyChatBox;
