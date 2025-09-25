import React, { use } from "react";
import Player from "../Player/Player";


const AvailablePlayers = ({ playerPromise, setAvailableBalance , availableBalance, setPurchasedPlayer , purchasedPlayer}) => {
  const playerData = use(playerPromise);
  
  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 mt-10 gap-4">

    {
        playerData.map(player =>  <Player player={player} setAvailableBalance={setAvailableBalance} availableBalance={availableBalance} purchasedPlayer={purchasedPlayer} setPurchasedPlayer ={setPurchasedPlayer} ></Player>)
    }

     
    </div>
  );
};

export default AvailablePlayers;
