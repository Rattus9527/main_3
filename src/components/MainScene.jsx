import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
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
import Main8Talk from "./MainEvents/Main8Talk";
import Main9 from "./MainEvents/Main9";
import Main10 from "./MainEvents/Main10";
import Main11 from "./MainEvents/Main11";
import Main12 from "./MainEvents/Main12";
import Main13_1 from "./MainEvents/Main13_1";
import Main13_2 from "./MainEvents/Main13_2";
import Main13_3 from "./MainEvents/Main13_3";
import Main13_4 from "./MainEvents/Main13_4";
import Main14 from "./MainEvents/Main14";
import Main14_2 from "./MainEvents/Main14_2";
import Main15 from "./MainEvents/Main15";
//UI components
import SideBtn from "./SideBtn";
import LogArea from "./LogArea";
import BattleScene from "./BattleScene";
import ImgArea from "./ImgArea";
import BloodScene from "./BloodScene";
import BlackScene from "./BlackScene";
import CrabType from "./CrabType";
import ShrimpType from "./ShrimpType";

function MainScene({ windowState }) {
  const mainState = useSelector((state) => state.state.main);
  const [logAreaState, changeLogAreaState] = useState(false);
  const [main3BtnState, showMain3Btn] = useState(false);
  const [crabTypeState, showCrabType] = useState(false);
  const [shrimpTypeState, showShrimpType] = useState(false);

  function showLog() {
    changeLogAreaState(!logAreaState);
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
        mainState === "normal"
          ? ""
          : mainState === "off"
          ? "dark-mode"
          : mainState === "dark"
          ? "darker-mode"
          : "blood-scene"
      }
      style={windowState ? flex : block}
    >
      <div className="container">
        <SideBtn showLog={showLog}></SideBtn>
        <div className="text-area">
          <HashRouter basename="/">
            <Routes>
              <Route path="*" element={<Main1 />} />
              <Route path="/2" element={<Main2 />} />
              <Route
                path="/3"
                element={<Main3 main3BtnState={main3BtnState} />}
              />
              <Route path="/5l" element={<Main5l />} />
              <Route path="/5m" element={<Main5m />} />
              <Route path="/5r" element={<Main5r />} />
              <Route path="/6" element={<Main6 />} />
              <Route path="/7" element={<Main7 />} />
              <Route path="/8" element={<Main8 />} />
              <Route path="/8talk" element={<Main8Talk />} />
              <Route
                path="/9"
                element={<Main9 showCrabType={showCrabType} />}
              />
              <Route path="/10" element={<Main10 />} />
              <Route path="/11" element={<Main11 />} />
              <Route path="/12" element={<Main12 />} />
              <Route path="/13_1" element={<Main13_1 />} />
              <Route path="/13_2" element={<Main13_2 />} />
              <Route path="/13_3" element={<Main13_3 />} />
              <Route path="/13_4" element={<Main13_4 />} />
              <Route
                path="/14"
                element={<Main14 showShrimpType={showShrimpType} />}
              />
              <Route path="/14_2" element={<Main14_2 />} />
              <Route path="/15" element={<Main15 />} />
            </Routes>
          </HashRouter>
        </div>
        <ImgArea />
      </div>
      <LogArea logAreaState={logAreaState} showLog={showLog} />
      <BattleScene windowState={windowState} />
      <BloodScene showMain3Btn={showMain3Btn} />
      <BlackScene />
      <CrabType crabTypeState={crabTypeState} showCrabType={showCrabType} />
      <ShrimpType
        shrimpTypeState={shrimpTypeState}
        showShrimpType={showShrimpType}
      />
    </main>
  );
}
export default MainScene;
