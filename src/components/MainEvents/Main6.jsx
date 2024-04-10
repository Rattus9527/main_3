import { useState } from "react";
import { useNavigate } from "react-router-dom";

const data = [
  "你們幾乎就要衝出這場可怕的災難，將那片飄滿不明物體的暗紅海面拋在後頭，前方就是親切可愛的蔚藍海洋。全速前進帶起的風吹散了些令人作嘔的氣味，一道吟唱般的鳴叫劃破空氣，喚醒了不知何時停滯的思緒。你驚覺剛才數分鐘內，你的腦子裡只有一件事。",
  "必須離開，離開這裡，越遠越好。",
  "你甚至無法注意到海上如此明顯的異常，四周的海水不知何時已變得近乎漆黑，像是有什麼匍匐在水面之下，望不到邊界的陰影壟罩著你們。",
];

function Main6({ showBlackScene, updateImg, changeMainPageState }) {
  const [textState, showText] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="text-box">
      <p
        className="text"
        onAnimationEnd={() => {
          showText(textState + 1);
        }}
      >
        你們幾乎就要衝出這場可怕的災難，將那片飄滿不明物體的暗紅海面拋在後頭，前方就是親切可愛的蔚藍海洋。全速前進帶起的風吹散了些令人作嘔的氣味，一道吟唱般的鳴叫劃破空氣，喚醒了不知何時停滯的思緒。你驚覺剛才數分鐘內，你的腦子裡只有一件事。
      </p>
      <p
        className={textState > 0 ? "text special-animation" : "hidden"}
        onAnimationEnd={() => {
          showText(textState + 1);
        }}
      >
        必須離開，離開這裡，越遠越好。
      </p>
      <p
        className={textState > 1 ? "text" : "hidden"}
        onAnimationEnd={() => {
          showText(textState + 1);
        }}
      >
        你甚至無法注意到海上如此明顯的異常，四周的海水不知何時已變得近乎漆黑，像是有什麼匍匐在水面之下，望不到邊界的陰影壟罩著你們。
      </p>
      <p
        className={textState > 2 ? "text hint" : "hidden"}
        onClick={() => {
          showBlackScene(true);
          updateImg(8);
          changeMainPageState("dark");
          navigate("/main_7");
        }}
      >
        ［？］
      </p>
    </div>
  );
}
export default Main6;
