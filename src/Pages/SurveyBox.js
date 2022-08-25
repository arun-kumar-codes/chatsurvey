import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import avatarImg from '../assets/chat1.png';
import classNames from 'classnames';
const SurveyBox = () => {
  // const userImg = classNames({
  //     userImg: chat.qtype === "stextbox",
  //   });
  const [data, setData] = useState();
  const [answertype, setAnswerType]= useState("")
  const messagesEndRef = useRef(null);
  const [answer, setAnswer] = useState();
  const [nextQues, setNextQues] = useState();
  const [answerset,setAnswerset] = useState("");
 const [savedata , setSavedata] = useState({
    id: storedNames?.surveydata[0]?.id,
    survey_id: storedNames?.surveydata[0]?.survey_id,
    qid: storedNames?.surveydata[0]?.qid,
    ques_title_json:storedNames?.surveydata[0]?.ques_title_json,
    answer:"",
    qtype:storedNames?.surveydata[0]?.qtype,
    logic_json:storedNames?.savedata[0]?.logic_json,
 })
  const handleCallAPI = async () => {
    const resp = await axios.get(
      `http://developers.frameanalytics.com/thesurveypoint/api/question/RHWWGWljYBIEdGp1CsD5`
    );
    if (resp?.data) {
      localStorage.setItem('pickMyfirstQuestion', JSON.stringify(resp?.data));
    }
  };
const handleGetMyNextQuestion=()=>{
    let data={
    id: storedNames?.surveydata[0]?.id,
    survey_id:storedNames?.surveydata[0]?.survey_id,
    qid: storedNames?.surveydata[0]?.qid,
    ques_title_json: storedNames?.surveydata[0]?.ques_title_json,
    answer:answerset,
    qtype:storedNames?.surveydata[0]?.qtype,
    logic_json: storedNames?.surveydata[0]?.logic_json
    }
    const resp= axios.post(`http://developers.frameanalytics.com/thesurveypoint/api/questionsAnswer`, data).then((val)=>{
        setSavedata({...savedata, id:val?.data?.data[0]?.id,survey_id:val?.data?.data[0].survey_id,qid:val?.data?.data[0]?.qid, ques_title_json:val?.data?.data[0].ques_title_json,answer:answerset,qtype:val?.data?.data[0].qtype,logic_json:val?.data?.data[0].logic_json})
        console.log(val?.data?.data, "IIIIIIIIIIIIIIIIIIIIIIIIIII")
    })
}
  useEffect(() => {
    handleCallAPI();
  }, []);
  var storedNames = JSON.parse(localStorage.getItem('pickMyfirstQuestion'));
  console.log(storedNames?.surveydata[0],"+++++++++++++++++++++++++++", answerset)
  const handleSubmit=()=>{
    handleGetMyNextQuestion()
  }
  return (
    <div>
      <section className='chatSection'>
        <div className='container'>
          <div className='chatWrp'>
            <div className='poweredBy'>Powered by Surveypoint</div>
            <div className='wholeChat' style={{ width: '100%', height: '95%' }}>
              <div
                style={{
                  paddingBottom: '40px',
                  height: '80vh',
                  overflowY: 'scroll',
                }}
                ref={messagesEndRef}
              >
                {storedNames?.surveydata &&
                  storedNames?.surveydata?.map((val, index) => {
                    return (
                      <>
                        {index === 0 && (
                          <div
                            className={
                              'incomingMsg d-flex gap-20 align-items-start mb-2'
                            }
                            key={index}
                          >
                            <div>
                              <img src={avatarImg} alt='' />
                            </div>
                            <div className={'incomingMsgContent'}>
                              <div style={{ display: 'flex' }}>
                                <div className='msg'>
                                  {val?.ques_title_json}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </>
                    );
                  })}
              </div>
              <div style={{borderTop:"1px solid #ccc", padding:"10px 0px"}}></div>
              <div className="chatType">
                    <input
                      value={answer}
                      onChange={(e) => setAnswerset(e.target.value)}
                      type="text"
                      className="form-control transInput"
                      placeholder="Type Here..."
                    />
                    <button
                      className="transBtn"
                      onClick={(e) => handleSubmit(e)}
                    >
                      <i className="fas fa-paper-plane"></i>
                    </button>
                  </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default SurveyBox;