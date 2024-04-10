import { useState, useEffect } from "react";

function TypingEffect({ text, closeBlackScene, blackState }) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, updateIndex] = useState(0);
  useEffect(() => {
    setDisplayText("");
    updateIndex(0);
  }, [blackState]);

  useEffect(() => {
    setTimeout(
      () => {
        if (currentIndex < text.length) {
          setDisplayText(displayText + text[currentIndex]);
          updateIndex(currentIndex + 1);
        }
      },
      currentIndex < 27 ? 200 : 1000
    );
    if (currentIndex == text.length) {
      setTimeout(() => {
        closeBlackScene();
      }, 2000);
    }
  }, [currentIndex]);
  return <p>{displayText}</p>;
}

function BlackScene({ blackState, closeBlackScene }) {
  return (
    <section className={blackState ? "darkness" : "hidden"}>
      <TypingEffect
        text={"物體破水而出的聲音傳進腦子，巨大的牆壁從四周猛地竄起，然後"}
        closeBlackScene={closeBlackScene}
        blackState={blackState}
      ></TypingEffect>
    </section>
  );
}

export default BlackScene;
