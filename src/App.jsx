import "./App.css";
import Batsman from "./batsman";

function App() {
  function handleClick() {
    alert("someone clicked");
  }

  const handClicker3 = () => {
    alert("why did u click on me?");
  };

  const showBonus = (num) => {
    const newSalary = num * 5;
    alert(newSalary);
  };
  return (
    <>
      <h1>Get started</h1>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handClicker3}>Hi There</button>
      <button onClick={() => showBonus(5)}>Get Bonus</button>
      <Batsman />
    </>
  );
}

export default App;
