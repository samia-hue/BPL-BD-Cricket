import "./App.css";

import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import { Suspense, useState } from "react";
 import { ToastContainer } from 'react-toastify';
import Footer from "./components/Footer/Footer";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return await res.json();
};
const playerPromise = fetchPlayers();

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(10000000);
  const [purchasedPlayer, setPurchasedPlayer] = useState([]);
  const removePlayer =(p) =>{
    const filteredData = purchasedPlayer.filter(ply => ply.id!==p.id)
    console.log(filteredData)
    setPurchasedPlayer(filteredData) 
    setAvailableBalance(availableBalance+parseInt(p.price.split("$").join("").split(",").join("")))
  }

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>

      <div className=" w-[1200px] mx-auto flex justify-between items-center">
        <h1 className="font-bold text-2xl"> {toggle===true?"Available players":`Selected Players ( ${purchasedPlayer.length} /6)`} </h1>
        <div className="font-bold">
          <button
            onClick={() => setToggle(true)}
            className={`border-1 border-gray-400 rounded-l-xl py-3 px-4 border-r-0 text-black ${
              toggle === true ? "bg-[#E7FE29]" : ""
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`border-1 border-gray-400 rounded-r-xl py-3 px-4 border-l-0 text-black ${
              toggle === false ? "bg-[#E7FE29]" : ""
            }`}
          >
            Selected <span>( {purchasedPlayer.length} )</span>
          </button>
        </div>
      </div>

      <Banner></Banner>

      {toggle === true ? (
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <AvailablePlayers
            purchasedPlayer={purchasedPlayer}
            setPurchasedPlayer={setPurchasedPlayer}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            playerPromise={playerPromise}
          ></AvailablePlayers>
        </Suspense>
      ) : (<SelectedPlayers removePlayer={removePlayer} purchasedPlayer={purchasedPlayer}></SelectedPlayers>)}


      <Footer></Footer>

      <ToastContainer/>
    </>
  );
}

export default App;
