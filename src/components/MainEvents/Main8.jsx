import { useState } from "react";
const data = [
  "發光的藍色晶礦成簇的鑲在了濡濕的暗色肉壁上，隨著細小的氣流微微起伏著。可以確定你們應該是被一隻難以想像的巨獸一口吞入了腹中，牠體內的空間大得出奇，你們的船隻航行地毫不費力，這怪物似乎仗著體型龐大就什麼都想來上一口，一些破敗的殘骸在下方的水面飄著。",
  "錯誤……孽……",
  "先是細小的碎屑，接著開始出現較大的沉積物，看著眼前斜著插在水中的桅杆，你明白這肯定不是這隻怪物第一次把船隻當零嘴吞下。",
  "……日……晶……出口",
  "那道從你們深入魚腹就混在低吟裡的聲音，喃喃低語著什麼，破碎的字句隨著前進愈發清晰。",
  "我們不該……錯了……報……",
  "聲音從一個黑暗的角落傳來，你們必須非常靠近肉牆才能稍微辨識出聲音的來源。",
  "對……但不能……那條路是……可以……",
  "那是一個人類，大概是。<br/>他半個身體埋在濕滑的肉壁內，肢體不自然地扭曲著，嘶啞的嗓音不停呢喃著混亂的話語，你沒辦法從凌亂的鬍鬚和頭髮中窺視到他的神情，但從聲音和暴露在外的軀體來看，就算沒被鑲在巨大海怪的體內，他也應該已經半隻腳踏入棺材。",
  "在你們足夠靠近時，囈語的人猛然抬起頭，毛髮下的一雙眼睛映著藍光。",
];

function Main8() {
  const [textState, showText] = useState(0);
  return <div className="text-box"></div>;
}
export default Main8;
