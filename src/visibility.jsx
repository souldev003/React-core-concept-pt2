import { useState } from "react";

export default function ShowHide() {
  const [visible, setVisible] = useState("Click the buttons and See Magic");

  function showText() {
    const text = "Hello React Learner (⊙_◎)";
    setVisible(text);
  }

  function hideText() {
    const text = "";
    setVisible(text);
  }

  return (
    <div className="hideAndSeek">
      <h2>{visible}</h2>
      <button onClick={showText}>Show</button>
      <button onClick={hideText}>Hide</button>
    </div>
  );
}
