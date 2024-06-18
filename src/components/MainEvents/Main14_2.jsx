import { useDispatch, useSelector } from "react-redux";
import btnImg from "/UI/btn_sen_normal.png";
import { useNavigate } from "react-router-dom";
import { addLog } from "../../../redux/logSlice/logSlice";

const data = [
  "這些混帳海鮮就該好好地待在餐盤裡，休想踏上食物鏈的頂端！海面上飄浮的破碎晶體就是你們勝利的煙火。",
  "習慣是恐怖的，那惱人的低頻噪音已經如同空氣一般，就只是存在著。",
  "你的眼睛適應了昏暗的環境，在那堆殘破的甲殼內，你看到了那堆閃閃發亮的好東西，還有一些你並不是想看得這麼仔細的生物組織，泛著金屬藍色光澤的暗紅爛肉包著骨質的棒狀物，透亮的球體正在四處滾動，還有那坨纏繞成團的細長絲線……龍蝦應該是不會長頭髮的，對吧？",
  "-",
];

function Main14_2() {
  const battleState = useSelector((state) => state.state.battle);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="text-box">
      <p className={!battleState ? "text" : "hidden"}>
        這些混帳海鮮就該好好地待在餐盤裡，休想踏上食物鏈的頂端！海面上飄浮的破碎晶體就是你們勝利的煙火。
      </p>
      <p className={!battleState ? "text" : "hidden"}>
        習慣是恐怖的，那惱人的低頻噪音已經如同空氣一般，就只是存在著。
      </p>
      <p className={!battleState ? "text" : "hidden"}>
        你的眼睛適應了昏暗的環境，在那堆殘破的甲殼內，你看到了那堆閃閃發亮的好東西，還有一些你並不是想看得這麼仔細的生物組織，泛著金屬藍色光澤的暗紅爛肉包著骨質的棒狀物，透亮的球體正在四處滾動，還有那坨纏繞成團的細長絲線……龍蝦應該是不會長頭髮的，對吧？
      </p>
      <button
        className={!battleState ? "btn main-btn" : "hidden"}
        onClick={() => {
          dispatch(addLog(data));
          navigate("/15");
        }}
      >
        <img src={btnImg} alt="" />
        <p>繼續前進</p>
      </button>
    </div>
  );
}
export default Main14_2;
