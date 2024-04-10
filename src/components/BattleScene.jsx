import UiDown from "/BattleScene/BATTLE_down1.png";
import UiUp from "/BattleScene/BATTLE_up.png";
import MonsterCrab from "/EP3/MONSTERS/3-11-1m.gif";
import MonsterCrabAngry from "/EP3/MONSTERS/3-11-2m.gif";
import ship from "/BattleScene/BATTLE_ship.gif";
import human from "/BattleScene/BATTLE_human.gif";
import frame from "/BattleScene/BATTLE_fr2.png";

function BattleScene({ battleState, windowState, monster }) {
  const monsterType = () => {
    switch (monster) {
      case "crab":
        return MonsterCrab;
      case "crabAngry":
        return MonsterCrabAngry;
    }
  };
  const block = {
    dispaly: "block",
  };
  const flex = {
    dispaly: "flex",
  };
  return (
    <section
      className={battleState ? "battle" : "hidden"}
      style={windowState ? flex : block}
    >
      <div className="container">
        <img src={UiDown} alt="" className="battle-ui" />
        <p className="battle-name">怨懟的 變異的鋸緣鏽斑蟹</p>
        <img src={monsterType()} alt="" className="monster" />
        <img src={human} alt="" className="battle-human" />
        <img src={ship} alt="" className="battle-ship" />
        <img src={UiUp} alt="" className="battle-ui down" />
        <img src={frame} alt="" className="battle-rule" />
        <button className="btn">
          <p>123</p>
        </button>
      </div>
    </section>
  );
}
export default BattleScene;
