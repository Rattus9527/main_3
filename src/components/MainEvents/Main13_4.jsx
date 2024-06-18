import { useState } from "react";
import { useDispatch } from "react-redux";
import btnImg from "/UI/btn_sen_BW.png";
import { setImage, setMainState } from "../../../redux/stateSlice/stateSlice";
import { useNavigate } from "react-router-dom";
import { addLog } from "../../../redux/logSlice/logSlice";
import {
  setBronze,
  setCrystal,
  setItem,
  setSliver,
  setUncrystal,
} from "../../../redux/itemSlice/itemSlice";

const data = [
  ">[4]",
  "你們決定前往最右側的通道，狹小的通道幾乎是貼著你們的船身，除了偶爾響起的碰撞聲，這段航行簡直安穩得令人困倦。像是為了方便你們入睡，船燈貼心地在同一時間全數罷工，無盡的黑暗一口吞噬了你們。",
  "就像有什麼東西在阻止光亮，不論原理為何，只要是能發光的物體都失去功用，在純然的漆黑裡，時間的流逝難以捉摸，行進的距離更無法掌握，只有船身輕巧的擺盪提醒著航行仍在持續。",
  "剎那間，一道藍光閃過，速度快得像是幻影，然後是第二道、第三道、無數道，像是漫天流星的倒影被水面捕獲。",
  "在噗通的水聲中你們看清了流光的真身，一隻隻細長的小型魚躍出水面，鱗片在接觸空氣的瞬間泛起銀藍的光芒，又在落入水中時熄滅。",
  "在這場小型流星雨的盡頭，你們看見了願望成真。",
  "一個湛藍的寶箱悠悠地漂了過來。",
  "-",
];

function Main13_4() {
  const [textState, setTextState] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const item = [
    "多功能維修套組(15銀/個) x3 - 1回合 能使用1次，並在該回合立即恢復 船隻耐久＋150。",
    "機械零件(1銀/個) x5",
    "[索羅爾群島仲裁者] 部件A(20銀/個) x2 - 需要製作圖紙。",
    "-",
  ];

  return (
    <div className="text-box">
      <p
        className="text"
        onAnimationEnd={() => {
          setTextState((prev) => prev + 1);
        }}
      >
        你們決定前往最右側的通道，狹小的通道幾乎是貼著你們的船身，除了偶爾響起的碰撞聲，這段航行簡直安穩得令人困倦。像是為了方便你們入睡，船燈貼心地在同一時間全數罷工，無盡的黑暗一口吞噬了你們。
        <br />
        就像有什麼東西在阻止光亮，不論原理為何，只要是能發光的物體都失去功用，在純然的漆黑裡，時間的流逝難以捉摸，行進的距離更無法掌握，只有船身輕巧的擺盪提醒著航行仍在持續。
      </p>
      <p
        className={textState > 0 ? "text" : "hidden"}
        onAnimationEnd={() => {
          setTextState((prev) => prev + 1);
        }}
      >
        剎那間，一道藍光閃過，速度快得像是幻影，然後是第二道、第三道、無數道，像是漫天流星的倒影被水面捕獲。
      </p>
      <p
        className={textState > 1 ? "text" : "hidden"}
        onAnimationEnd={() => {
          setTextState((prev) => prev + 1);
        }}
      >
        在噗通的水聲中你們看清了流光的真身，一隻隻細長的小型魚躍出水面，鱗片在接觸空氣的瞬間泛起銀藍的光芒，又在落入水中時熄滅。
      </p>
      <p
        className={textState > 2 ? "text" : "hidden"}
        onAnimationEnd={() => {
          setTextState((prev) => prev + 1);
        }}
      >
        在這場小型流星雨的盡頭，你們看見了願望成真。
      </p>
      <p
        className={textState > 3 ? "text" : "hidden"}
        onAnimationEnd={() => {
          setTextState((prev) => prev + 1);
        }}
      >
        一個<span className="crystal">湛藍的寶箱</span>悠悠地漂了過來。
      </p>
      <button
        className={textState > 4 ? "btn main-btn" : "hidden"}
        onClick={() => {
          dispatch(setImage(15));
          dispatch(setMainState("normal"));
          dispatch(addLog(data));
          dispatch(setUncrystal(400));
          dispatch(setCrystal(150));
          dispatch(setSliver(18));
          dispatch(setBronze(50));
          dispatch(setItem(item));
          navigate("/14");
        }}
      >
        <img src={btnImg} alt="" />
        <p>繼續前進</p>
      </button>
    </div>
  );
}

export default Main13_4;
