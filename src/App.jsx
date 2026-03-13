import { Suspense } from "react";
import "./App.css";
import Batsman from "./batsman";
import Friends from "./friends";

const fetchFriends = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

function App() {
  const friendsPromise = fetchFriends();

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

      <Suspense fallback={<h2>Loading....</h2>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>
    </>
  );
}

export default App;
