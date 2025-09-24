import React, { use } from "react";
import Player from "../Player/Player";


const AvailablePlayers = ({ playerPromise }) => {
  const playerData = use(playerPromise);
  console.log(playerData);
  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 mt-10 gap-4">

    {
        playerData.map(player =>  <Player player={player}></Player>)
    }

     
    </div>
  );
};

export default AvailablePlayers;
