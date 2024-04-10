import { useState } from "react";
import { useNavigate } from "react-router-dom";
import btnBg from "/UI/btn_sen_blood.png";

function Main3({
  updateLog,
  showBloodScene,
  updateImg,
  main3BtnState,
  changeMainPageState,
}) {
  const [textState, textShow] = useState(0);
  const navigate = useNavigate();
  function explosion() {
    showBloodScene(true);
  }
  return (
    <div className="text-box">
      <p
        className="text"
        onAnimationEnd={() => {
          textShow(textState + 1);
        }}
      >
        並沒有太多的思考時間，你們的船很快便被層層圍繞，你曾見過最大的鯨群也沒有這個陣仗。白色幽魂無序地飄盪，像是種無聲的控訴，那些大傢伙僵硬的姿態讓人困惑，光滑皮膚鼓脹成異常飽滿的球狀，看上去有些滑稽。
      </p>
      <p
        className={textState > 0 ? "text" : "hidden"}
        onAnimationEnd={() => {
          textShow(textState + 1);
        }}
      >
        某個瞬間開始你察覺到了低沉的頻率在耳際迴盪著，它似乎一直都存在，悄悄浸染了每條神經。
        <br />
        暈眩困擾著思緒，但腦內不時的抽痛保證著你的清醒，之前嚥下的食物在胃裡翻騰，喧囂著想回到新鮮的空氣中。一個小朋友輕輕蹭向船身，如同生前它興致一來的撒嬌，不祥的預感在此刻攀升至了頂點。
      </p>
      <p className={textState > 1 ? "text hint" : "hidden"} onClick={explosion}>
        ［……？］
      </p>
      <div className={main3BtnState ? "mainbtn-group" : "hidden"}>
        <button
          className="btn"
          onClick={() => {
            updateImg(6);
            navigate("/main_5l");
            changeMainPageState("normal");
          }}
        >
          <img src={btnBg} alt="" />
          <p data-next="l_5">往左</p>
        </button>
        <button
          className="btn"
          onClick={() => {
            updateImg(6);
            navigate("/main_5m");
            changeMainPageState("normal");
          }}
        >
          <img src={btnBg} alt="" />
          <p data-next="m_5">往中</p>
        </button>
        <button
          className="btn"
          onClick={() => {
            updateImg(6);
            navigate("/main_5r");
            changeMainPageState("normal");
          }}
        >
          <img src={btnBg} alt="" />
          <p data-next="r_5">往右</p>
        </button>
      </div>
    </div>
  );
}
export default Main3;
