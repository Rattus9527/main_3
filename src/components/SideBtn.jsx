import logBtnImg from "/UI/logbtn_normal.png";
import logBtnImgBlood from "/UI/logbtn_blood.png";
import logBtnImgOff from "/UI/logbtn_off.png";
import logBtnImgBW from "/UI/logbtn_BW.png";

function SideBtn({ showLog, mainPageState }) {
  return (
    <div className="btn-list">
      <button className="btn log-btn" onClick={showLog}>
        <img
          src={
            mainPageState === "normal"
              ? logBtnImg
              : mainPageState === "off"
              ? logBtnImgOff
              : mainPageState === "dark"
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
