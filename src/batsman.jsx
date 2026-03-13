import { useState } from "react";

export default function Batsman() {
  const [run, setRun] = useState(0);
  const [sixes, setSixes] = useState(0);

  const handleSingle = () => {
    const updatedRuns = run + 1;
    setRun(updatedRuns);
  };

  const handleFour = () => {
    let updatedRuns = run + 4;
    setRun(updatedRuns);
  };

  const handleSix = () => {
    let updatedRun = run + 6;
    let updatedSixes = sixes + 1;
    setRun(updatedRun);
    setSixes(updatedSixes);
  };

  return (
    <div>
      <h3>Player: Bangladeshi peanut</h3>
      <h2>Score: {run}</h2>
      <button onClick={handleSingle}>Singles</button>
      <button onClick={handleFour}>Four</button>
      <button onClick={handleSix}>Six</button>

      <br />
      <br />
      <p>sixes: {sixes}</p>
    </div>
  );
}
