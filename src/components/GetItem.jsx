import { useSelector } from "react-redux";
import closeIcon from "/UI/cross.png";

function GetItem({ itemState, showItem }) {
  const itemList = useSelector((state) => state.item.item);
  const crystal = useSelector((state) => state.item.crystal);
  const uncrystal = useSelector((state) => state.item.uncrystal);
  const gold = useSelector((state) => state.item.gold);
  const sliver = useSelector((state) => state.item.sliver);
  const bronze = useSelector((state) => state.item.bronze);

  return (
    <div className={itemState ? "item" : "hidden"}>
      <button
        className="close"
        onClick={() => {
          showItem(false);
        }}
      >
        <img src={closeIcon} alt="" />
      </button>
      <ul>
        {crystal > 0 && <li>藍晶 x{crystal}</li>}
        {uncrystal > 0 && <li>未打磨的藍晶 x{uncrystal}</li>}
        <li>
          錢財 - {gold > 0 && `${gold}金 `}
          {sliver > 0 && `${sliver}銀 `}
          {bronze > 0 && `${bronze}銅`}
        </li>
        {itemList.map((el, i) => (
          <li key={i}>{el}</li>
        ))}
      </ul>
    </div>
  );
}

export default GetItem;
