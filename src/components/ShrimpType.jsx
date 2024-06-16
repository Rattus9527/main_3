import { useDispatch } from "react-redux";
import { setBattleState, setMonster } from "../../redux/stateSlice/stateSlice";

function ShrimpType({ shrimpTypeState, showShrimpType }) {
  const dispatch = useDispatch();

  return (
    <section className={shrimpTypeState ? "crab-type" : "hidden"}>
      <p className="text">
        老問題，你有惹惱甲殼類海鮮嗎？
        <br />
        <span
          className="hint"
          onClick={() => {
            showShrimpType(false);
            dispatch(setMonster("shrimpAngry"));
            dispatch(setBattleState());
          }}
        >
          ［有］
        </span>
        <span
          className="hint"
          onClick={() => {
            showShrimpType(false);
            dispatch(setMonster("shrimp"));
            dispatch(setBattleState());
          }}
        >
          ［無］
        </span>
      </p>
    </section>
  );
}

export default ShrimpType;
