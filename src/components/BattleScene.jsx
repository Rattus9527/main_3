import { useState } from "react";
//battle ui img
import UiDown from "/BattleScene/BATTLE_down1.png";
import UiUp from "/BattleScene/BATTLE_up.png";
import ship from "/BattleScene/BATTLE_ship.gif";
import human from "/BattleScene/BATTLE_human.gif";
import frame from "/BattleScene/BATTLE_fr2.png";
//monster img
import MonsterCrab from "/EP3/MONSTERS/3-11-1m.gif";
import MonsterCrabAngry from "/EP3/MONSTERS/3-11-2m.gif";
import MonsterShrimp from "/EP3/MONSTERS/3-13-2m.gif";
import MonsterShrimpAngry from "/EP3/MONSTERS/3-13-1m.gif";
import MonsterNameless from "/EP3/MONSTERS/3-14.gif";
import { useDispatch, useSelector } from "react-redux";
import { setBattleState } from "../../redux/stateSlice/stateSlice";

function BattleScene({ windowState }) {
  const battleState = useSelector((state) => state.state.battle);
  const battleType = useSelector((state) => state.state.battleType);
  const monster = useSelector((state) => state.state.monster);
  const [ruleState, showrule] = useState(false);
  const [battleEnd, showAfterBattle] = useState(false);

  const dispatch = useDispatch();

  const monsterName = {
    crab: "變異的鋸緣鏽斑蟹",
    crabAngry: "怨懟的 變異的鋸緣鏽斑蟹",
    shrimp: "變異的刺脊岩龍蝦",
    shrimpAngry: "怨懟的 變異的刺脊岩龍蝦",
    nameless: "被吞噬的無名者",
  };
  const monsterType = {
    crab: MonsterCrab,
    crabAngry: MonsterCrabAngry,
    shrimp: MonsterShrimp,
    shrimpAngry: MonsterShrimpAngry,
    nameless: MonsterNameless,
  };
  const btnText = {
    crab: ["蟹天蟹地", "多蟹惠顧"],
    crabAngry: ["蟹天蟹地", "多蟹惠顧"],
    shrimp: ["高蝦立判", "蝦夕蝦景"],
    shrimpAngry: ["高蝦立判", "蝦夕蝦景"],
    nameless: ["勝利", "戰敗"],
  };
  const monsterState = {
    crab: { hp: "200 / 1名", speed: "(DICE20)" },
    crabAngry: { hp: "250 / 1名", speed: "(DICE20)+5" },
    shrimp: { hp: "200 / 1名", speed: "(DICE20)" },
    shrimpAngry: { hp: "250 / 1名", speed: "(DICE20)+5" },
    nameless: { hp: "350", speed: "(DICE20)/(DICE20)+10" },
  };
  const battleText = {
    crab: (
      <p
        className={!ruleState ? "" : "hidden"}
        onClick={() => {
          showrule(true);
        }}
      >
        戰鬥！遭遇了2隻<span className="hint">【變異的鋸緣鏽斑蟹】</span>
        ，請確保為每隻海怪進行擲骰。
      </p>
    ),
    crabAngry: (
      <p
        className={!ruleState ? "" : "hidden"}
        onClick={() => {
          showrule(true);
        }}
      >
        戰鬥！遭遇了2隻<span className="hint">【怨懟的 變異的鋸緣鏽斑蟹】</span>
        ，請確保為每隻海怪進行擲骰。
      </p>
    ),
    shrimp: (
      <p
        className={!ruleState ? "" : "hidden"}
        onClick={() => {
          showrule(true);
        }}
      >
        戰鬥！遭遇了4隻<span className="hint">【變異的刺脊岩龍蝦】</span>
        ，請確保為每隻海怪進行擲骰。
      </p>
    ),
    shrimpAngry: (
      <p
        className={!ruleState ? "" : "hidden"}
        onClick={() => {
          showrule(true);
        }}
      >
        戰鬥！遭遇了4隻<span className="hint">【怨懟的 變異的刺脊岩龍蝦】</span>
        ，請確保為每隻海怪進行擲骰。
      </p>
    ),
    nameless: (
      <p
        className={!ruleState ? "" : "hidden"}
        onClick={() => {
          showrule(true);
        }}
      >
        戰鬥！遭遇了<span className="hint">【被吞噬的無名者】</span>
        ，混濁的雙眼沉默地注視著你們。
      </p>
    ),
  };
  const ruleText = {
    crab: (
      <p className={ruleState ? "" : "hidden"}>
        雙方採用船戰規則。攻擊敵方時可以黑鋼砲攻擊當作弱點打擊，共 3
        次可將目標擊退。
        <br />
        <br />
        【敵方戰鬥回合】攻擊(COIN)
        <br />I →<br />
        ［真是蟹了］(DICE50-100)
        <br />P / 特殊骰 →<br />
        ［鰲甲衝擊］(DICE50-100)+10，被擊中的船隻於 下回合開始 持續 3
        回合[負面效果-破損]，每次－10點耐久。
      </p>
    ),
    crabAngry: (
      <p className={ruleState ? "" : "hidden"}>
        雙方採用船戰規則。攻擊敵方時可以黑鋼砲攻擊當作弱點打擊，共 3
        次可將目標擊退。
        <br />※ 因強烈的憤恨，第一次血量歸零時將會留有 1 點血量。
        <br />
        <br />
        【敵方戰鬥回合】攻擊(COIN)
        <br />I →<br />
        ［真是蟹了］(DICE80-100) <br />P / 特殊骰 →<br />
        ［鰲甲衝擊］(DICE80-100)+20，被擊中的船隻於 下回合開始 持續 3
        回合[負面效果-破損]，每次－10點耐久。
      </p>
    ),
    shrimp: (
      <p className={ruleState ? "" : "hidden"}>
        雙方採用船戰規則。攻擊敵方時可以黑鋼砲攻擊當作弱點打擊，共 3
        次可將目標擊退。
        <br />
        <br />
        【敵方戰鬥回合】攻擊(COIN)
        <br /> I → <br />
        ［蝦次一定］(DICE50-100)
        <br /> P / 特殊骰 → <br />
        ［鰲甲衝擊］(DICE50-100)+10，被擊中的船隻於 下回合開始 持續 3
        回合[負面效果-破損]，每次－10點耐久。
      </p>
    ),
    shrimpAngry: (
      <p className={ruleState ? "" : "hidden"}>
        雙方採用船戰規則。攻擊敵方時可以黑鋼砲攻擊當作弱點打擊，共 3
        次可將目標擊退。
        <br />※ 因強烈的憤恨，第一次血量歸零時將會留有 1 點血量。
        <br />
        <br />
        【敵方戰鬥回合】攻擊(COIN)
        <br /> I → <br />
        ［蝦次一定］(DICE80-100)
        <br /> P / 特殊骰 → <br />
        ［鰲甲衝擊］(DICE80-100)+20，被擊中的船隻於 下回合開始 持續 3
        回合[負面效果-破損]，每次－10點耐久。
      </p>
    ),
    nameless: (
      <p className={ruleState ? "" : "hidden"}>
        雙方採用船戰規則。攻擊敵方時可以黑鋼砲攻擊當作弱點打擊，共 5
        次可將目標擊退。
        <br /> ※ 因強烈的憤恨，第一次血量歸零時將會留有 1 點血量。
        <br />
        <br />
        【敵方戰鬥回合】
        <br /> 奇數回：攻擊(COIN) <br />I → <br />
        ［穿刺晶體］(DICE80-120) <br />P / 特殊骰 →<br />
        ［遍布藍霧］(DICE100-120)+20，被擊中的船隻於 下回合開始 持續 3
        回合[負面效果-腐蝕]，每次－10點耐久。
        <br />
        偶數回：增益(COIN)＋目標(DICE1-人數) <br />I →<br />
        ［加速癒合］恢復(DICE50-100)點血量。
        <br /> P / 特殊骰 →<br />
        ［多重震波］所有角色進行速度擲骰，低於20者受落石攻擊，立即－50點血量，並且下回合暫停行動
        1 次。
      </p>
    ),
  };
  const [btn1, btn2] = btnText[monster];
  const { hp, speed } = monsterState[monster];
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
      <div className={!battleEnd ? "container" : "hidden"}>
        <img src={UiDown} alt="" className="battle-ui" />
        <p className="hp">{hp}</p>
        <p className="speed">{speed}</p>
        <p className="battle-name">{monsterName[monster]}</p>
        <img src={monsterType[monster]} alt="" className={monster} />
        {battleType === "human" ? (
          <img src={human} alt="" className="battle-human" />
        ) : (
          <img src={ship} alt="" className="battle-ship" />
        )}
        <img src={UiUp} alt="" className="battle-ui down" />
        <img src={frame} alt="" className="battle-rule" />
        <div className="rule">
          {battleText[monster]}
          {ruleText[monster]}
        </div>
        <button
          className="btn"
          onClick={() => {
            showrule(false);
            dispatch(setBattleState());
          }}
        >
          <p>{btn1}</p>
        </button>
        <button
          className="btn down"
          onClick={() => {
            showrule(false);
            showAfterBattle(true);
          }}
        >
          <p>{btn2}</p>
        </button>
      </div>
      <div className={battleEnd ? "container" : "hidden"}></div>
    </section>
  );
}
export default BattleScene;
