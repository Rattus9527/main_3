//btn-style
import btnBg from "/UI/btn_sen_normal.png";
import btnBgBlood from "/UI/btn_sen_blood.png";
import btnBgOff from "/UI/btn_sen_off.png";
import btnBgDark from "/UI/btn_sen_BW.png";
//main-scene
import mainImg1 from "/EP3/3-1.png";
import mainImg2_1 from "/EP3/3-2-1.png";
import mainImg2_2 from "/EP3/3-2-2.png";
import mainImg2_3 from "/EP3/3-2-3.png";
import mainImg3_1 from "/EP3/3-3.png";
import mainImg3_2 from "/EP3/3-3-1.png";
import mainImg5 from "/EP3/3-5.png";
import mainImg6 from "/EP3/3-6.png";
import mainImgFrame from "/UI/imgFrame-BW.png";
import mainImg7 from "/EP3/3-7.gif";
import mainImg8 from "/EP3/3-8OFF.gif";
import mainImg9_1 from "/EP3/3-8.png";
import mainImg9_2 from "/EP3/3-9.png";
import mainImg10 from "/EP3/3-10.png";
import mainImg12 from "/EP3/3-12.png";
import mainImg15 from "/EP3/3-15.png";
import { useSelector } from "react-redux";

const imgList = [
  mainImg1,
  mainImg2_1,
  mainImg2_2,
  mainImg2_3,
  mainImg3_1,
  mainImg3_2,
  mainImg5,
  mainImg6,
  mainImgFrame,
  mainImg7,
  mainImg8,
  mainImg9_1,
  mainImg9_2,
  mainImg10,
  mainImg12,
  mainImg15,
];
function ImgArea() {
  const mainState = useSelector((state) => state.state.main);
  const imgState = useSelector((state) => state.state.image);
  const currentImg = imgList.filter((_, i) => i === imgState);
  return (
    <div className="img-area">
      <img src={currentImg[0]} alt="" className="sence" />
      <div className="btn-group">
        <button className="btn">
          <img
            src={
              mainState === "normal"
                ? btnBg
                : mainState === "off"
                ? btnBgOff
                : mainState === "dark"
                ? btnBgDark
                : btnBgBlood
            }
            alt=""
          />
          <p>123</p>
        </button>
        <button className="btn">
          <img
            src={
              mainState === "normal"
                ? btnBg
                : mainState === "off"
                ? btnBgOff
                : mainState === "dark"
                ? btnBgDark
                : btnBgBlood
            }
            alt=""
          />
          <p>123</p>
        </button>
      </div>
    </div>
  );
}
export default ImgArea;
