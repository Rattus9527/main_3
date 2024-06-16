import { useState } from "react";
import { useNavigate } from "react-router-dom";
import btnImg from "/UI/btn_sen_normal.png";
import { useDispatch, useSelector } from "react-redux";
import { setImage } from "../../../redux/stateSlice/stateSlice";
import { addLog } from "../../../redux/logSlice/logSlice";

const data = [
  "奇怪的大螃蟹顯然不是你們這群歷經滄桑的無根者的對手，湛藍的身軀在幾次不甘地顫抖後徹底倒下，緩緩沒入泛著冷光的體液中，一切又歸於寂靜，只有如蛆附骨的低沉頻率縈繞在耳邊，你開始有些不確定你是不是真的有聽到這道聲響。",
  "什麼都吞的巨大鯨魚顯然不介意吃一點無用的人類貨幣，要是能找到些金銀珠寶就更好了。",
];

const logData = [...data, "-"];

function Main10() {
  const battleState = useSelector((state) => state.state.battle);
  const [textState, showText] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const textList = data.map((el, i) => (
    <p
      key={i}
      className={!battleState && textState >= i ? "text" : "hidden"}
      onAnimationEnd={() => {
        showText(textState + 1);
      }}
    >
      {el}
    </p>
  ));
  const btn = (
    <button
      key={data.length}
      className={textState > 1 ? "btn main-btn" : "hidden"}
      onClick={() => {
        dispatch(setImage(13));
        dispatch(addLog(logData));
        navigate("/11");
      }}
    >
      <img src={btnImg} alt="" />
      <p>繼續前進</p>
    </button>
  );
  textList.push(btn);
  return <div className="text-box">{textList}</div>;
}
export default Main10;
