import logBtnImg from "/UI/logbtn_normal.png";
import logBtnImgBlood from "/UI/logbtn_blood.png";
import logBtnImgOff from "/UI/logbtn_off.png";
import logBtnImgBW from "/UI/logbtn_BW.png";
import { useSelector } from "react-redux";

function SideBtn({ showLog }) {
  const mainState = useSelector((state) => state.state.main);
  return (
    <div className="btn-list">
      <button className="btn log-btn" onClick={showLog}>
        <img
          src={
            mainState === "normal"
              ? logBtnImg
              : mainState === "off"
              ? logBtnImgOff
              : mainState === "dark"
              ? logBtnImgBW
              : logBtnImgBlood
          }
          alt=""
        />
      </button>
    </div>
  );
}
export default SideBtn;
