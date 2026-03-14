import "./App.css";
import Batsman from "./batsman";
import Friends from "./friends";
import ChangeDecoration from "./click";
import Button from "./button";
import { Suspense } from "react";
import Albums from "./albums";
import ClickToCount from "./count";
import ShowHide from "./visibility";

const fetchFriends = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

const fetchAlbums = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  return res.json();
};

function App() {
  const friendsPromise = fetchFriends();

  const albumsPromise = fetchAlbums();

  // function handleClick() {
  //   alert("someone clicked");
  // }

  // const handClicker3 = () => {
  //   alert("why did u click on me?");
  // };

  // const showBonus = (num) => {
  //   const newSalary = num * 5;
  //   alert(newSalary);
  // };
  return (
    <>
      {/* <h1>Get started</h1>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handClicker3}>Hi There</button>
      <button onClick={() => showBonus(5)}>Get Bonus</button> */}

      <ShowHide></ShowHide>

      <Batsman />

      <Suspense fallback={<h2>Loading....</h2>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>

      <Suspense fallback={<h1>Album Loading.....</h1>}>
        <Albums albumsPromise={albumsPromise}></Albums>
      </Suspense>

      {/* <button onClick={ChangeDecoration}>Hello</button> */}
      {/* <Button></Button> */}

      <ClickToCount></ClickToCount>
    </>
  );
}

// function useName(initialName) {
//   let name = initialName;
//   function setName(newName) {
//     name = newName;
//   }
// }

export default App;
