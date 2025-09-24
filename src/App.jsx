import "./App.css";

import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import Navbar from "./components/Navbar/Navbar";
import { Suspense, useState } from "react";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return await res.json();
};

function App() {
  const playerPromise = fetchPlayers();

  const [toggle, setToggle] = useState(true);

  return (
    <>
      <Navbar></Navbar>

      <div className=" w-[1200px] mx-auto flex justify-between items-center">
        <h1 className="font-bold text-2xl">Available players</h1>
        <div className="font-bold">
          <button onClick={() =>setToggle(true)}  className={`border-1 border-gray-400 rounded-l-xl py-3 px-4 border-r-0 text-black ${toggle===true?"bg-[#E7FE29]":""}`}>
            Available
          </button>
          <button onClick={() =>setToggle(false)} className={`border-1 border-gray-400 rounded-r-xl py-3 px-4 border-l-0 text-black ${toggle===false?"bg-[#E7FE29]":""}`}>
            Selected <span>(0)</span>{" "}
          </button>
        </div>
      </div>

      {toggle === true ? (
          <Suspense
            fallback={
              <span className="loading loading-spinner loading-xl"></span>
            }
          >
            <AvailablePlayers playerPromise={playerPromise}></AvailablePlayers>
          </Suspense>
        ) : (
          <Suspense fallback={<h3></h3>}>
            <SelectedPlayers></SelectedPlayers>
          </Suspense>
        )}
    </>
  );
}

export default App;
