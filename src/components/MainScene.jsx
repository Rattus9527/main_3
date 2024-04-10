import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
//Main Events
import Main1 from "./MainEvents/Main1";
import Main2 from "./MainEvents/Main2";
import Main3 from "./MainEvents/Main3";
import Main5l from "./MainEvents/Main5l";
import Main5m from "./MainEvents/Main5m";
import Main5r from "./MainEvents/Main5r";
import Main6 from "./MainEvents/Main6";
import Main7 from "./MainEvents/Main7";
import Main8 from "./MainEvents/Main8";
import Main9 from "./MainEvents/Main9";
//UI components
import SideBtn from "./SideBtn";
import LogArea from "./LogArea";
import BattleScene from "./BattleScene";
import ImgArea from "./ImgArea";
import BloodScene from "./BloodScene";
import BlackScene from "./BlackScene";

function MainScene({ windowState }) {
  const [mainPageState, changeMainPageState] = useState("normal");
  const [logAreaState, changeLogAreaState] = useState(false);
  const [imgState, updateImg] = useState(0);
  const [log, addLog] = useState([]);
  const [monster, changeMonster] = useState("crab");
  const [battleState, changeState] = useState(false);
  const [bloodState, showBloodScene] = useState(false);
  const [main3BtnState, showMain3Btn] = useState(false);
  const [blackState, showBlackScene] = useState(false);
  function showLog() {
    changeLogAreaState(!logAreaState);
  }
  function updateLog(data) {
    addLog((state) => [...state, data]);
  }
  function closeBlackScene() {
    showBlackScene(false);
  }
  const flex = {
    display: "flex",
  };
  const block = {
    display: "block",
  };
  return (
    <main
      className={
        mainPageState === "normal"
          ? ""
          : mainPageState === "off"
          ? "dark-mode"
          : mainPageState === "dark"
          ? "darker-mode"
          : "blood-scene"
      }
      style={windowState ? flex : block}
    >
      <div className="container">
        <SideBtn showLog={showLog} mainPageState={mainPageState}></SideBtn>
        <div className="text-area">
          <HashRouter basename="/">
            <Routes>
              <Route
                path="*"
                element={
                  <Main1 updateLog={updateLog} updateImg={updateImg}></Main1>
                }
              ></Route>
              <Route
                path="/main_2"
                element={
                  <Main2 updateLog={updateLog} updateImg={updateImg}></Main2>
                }
              ></Route>
              <Route
                path="/main_3"
                element={
                  <Main3
                    updateLog={updateLog}
                    showBloodScene={showBloodScene}
                    updateImg={updateImg}
                    main3BtnState={main3BtnState}
                    changeMainPageState={changeMainPageState}
                  ></Main3>
                }
              ></Route>
              <Route
                path="/main_5l"
                element={<Main5l updateImg={updateImg}></Main5l>}
              ></Route>
              <Route
                path="/main_5m"
                element={<Main5m updateImg={updateImg}></Main5m>}
              ></Route>
              <Route
                path="/main_5r"
                element={<Main5r updateImg={updateImg}></Main5r>}
              ></Route>
              <Route
                path="/main_6"
                element={
                  <Main6
                    updateImg={updateImg}
                    showBlackScene={showBlackScene}
                    changeMainPageState={changeMainPageState}
                  ></Main6>
                }
              ></Route>
              <Route
                path="/main_7"
                element={
                  <Main7
                    updateImg={updateImg}
                    changeMainPageState={changeMainPageState}
                  ></Main7>
                }
              ></Route>
              <Route path="main_8" element={<Main8></Main8>}></Route>
            </Routes>
          </HashRouter>
        </div>
        <ImgArea imgState={imgState} mainPageState={mainPageState}></ImgArea>
      </div>
      <LogArea
        logAreaState={logAreaState}
        showLog={showLog}
        log={log}
      ></LogArea>
      <BattleScene
        battleState={battleState}
        windowState={windowState}
        monster={monster}
      ></BattleScene>
      <BloodScene
        bloodState={bloodState}
        showBloodScene={showBloodScene}
        updateImg={updateImg}
        changeMainPageState={changeMainPageState}
        showMain3Btn={showMain3Btn}
      ></BloodScene>
      <BlackScene
        blackState={blackState}
        closeBlackScene={closeBlackScene}
      ></BlackScene>
    </main>
  );
}
export default MainScene;
