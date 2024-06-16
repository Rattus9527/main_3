import { useState } from "react";
import btnImg from "/UI/btn_sen_normal.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setImage, setMainState } from "../../../redux/stateSlice/stateSlice";

function Main16() {
  const [textState, setTextState] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function showText() {
    setTextState((prev) => prev + 1);
  }

  return (
    <div className="text-box">
      <p className="text" onAnimationEnd={showText}>
        當神奇的四叉路出現在眼前時，你已經不怎麼驚訝了，除了選一條路直直撞下去外你們別無選擇。
      </p>
      <p
        className={textState > 0 ? "text" : "hidden"}
        onAnimationEnd={showText}
      >
        在昏暗的環境長時間注視著藍光讓人頭昏腦脹，噢、更別提那個你幾乎要忘記它在的怪聲音了。
      </p>
      <p
        className={textState > 1 ? "text" : "hidden"}
        onAnimationEnd={showText}
      >
        思緒像坨爛泥難以轉動，你必須花上平時數倍的時間才能搞清楚自己張開嘴究竟是為了說些什麼。
      </p>
      <p
        className={textState > 2 ? "text" : "hidden"}
        onAnimationEnd={showText}
      >
        洞口的標示潰不成形，你們試圖從那堆碎屑中判別出它們本來的樣貌。
      </p>

      <div className={textState > 3 ? "mainbtn-group cave" : "hidden"}>
        <button
          className="btn"
          onClick={() => {
            dispatch(setImage(8));
            dispatch(setMainState("dark"));
            navigate("/16_4");
          }}
        >
          <img src={btnImg} alt="" />
          <p>⊿</p>
        </button>
        <button
          className="btn"
          onClick={() => {
            dispatch(setImage(8));
            dispatch(setMainState("dark"));
            navigate("/16_2");
          }}
        >
          <img src={btnImg} alt="" />
          <p>Ｚ</p>
        </button>
        <button
          className="btn"
          onClick={() => {
            dispatch(setImage(8));
            dispatch(setMainState("dark"));
            navigate("/16_3");
          }}
        >
          <img src={btnImg} alt="" />
          <p>℈</p>
        </button>
        <button
          className="btn"
          onClick={() => {
            dispatch(setImage(8));
            dispatch(setMainState("dark"));
            navigate("/16_1");
          }}
        >
          <img src={btnImg} alt="" />
          <p>┋</p>
        </button>
      </div>
    </div>
  );
}

export default Main16;
