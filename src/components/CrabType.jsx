import { useDispatch } from "react-redux";
import {
  setBattleState,
  setBattleType,
  setMonster,
} from "../../redux/stateSlice/stateSlice";
import { addLog } from "../../redux/logSlice/logSlice";

const data = {
  crabAngry: ["戰鬥！遭遇了2隻【怨懟的 變異的鋸緣鏽斑蟹】", "-"],
  crab: ["戰鬥！遭遇了2隻【變異的鋸緣鏽斑蟹】", "-"],
};

function CrabType({ crabTypeState, showCrabType }) {
  const dispatch = useDispatch();

  return (
    <section className={crabTypeState ? "crab-type" : "hidden"}>
      <p className="text">
        嘿、你們這次出航前有吃任何甲殼類料理嗎？比如龍鯊蝦拉什麼的。
        <br />
        <span
          className="hint"
          onClick={() => {
            dispatch(setMonster("crabAngry"));
            dispatch(setBattleState());
            dispatch(setBattleType("boat"));
            dispatch(addLog(data.crabAngry));
            showCrabType(false);
          }}
        >
          ［有］
        </span>
        <span
          className="hint"
          onClick={() => {
            dispatch(setMonster("crab"));
            dispatch(setBattleState());
            dispatch(setBattleType("boat"));
            dispatch(addLog(data.crab));
            showCrabType(false);
          }}
        >
          ［無］
        </span>
      </p>
    </section>
  );
}
export default CrabType;
