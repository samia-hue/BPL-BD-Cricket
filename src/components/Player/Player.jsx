import React, { useState } from "react";
import user1Img from "../../assets/user1.jpg";
import flagIcon from "../../assets/report1.png";

const Player = ({
  player,
  setAvailableBalance,
  availableBalance,
  purchasedPlayer,
  setPurchasedPlayer,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelected = (playerData) => {
    const playerPrice = parseInt(
      playerData.price.split("$").join("").split(",").join("")
    );

    if (availableBalance < playerPrice) {
      alert("Not enough coins!!");
      return;
    }

    setIsSelected(true);
    setAvailableBalance(availableBalance - playerPrice);

    setPurchasedPlayer([...purchasedPlayer , playerData])
  };

  return (
    <div className="card bg-white  shadow-sm text-black ">
      <figure>
        <img
          className=" h-[300px] object-cover"
          src={player.player_img}
          alt="Players image"
        />
      </figure>
      <div className="mt-4">
        <div className="flex gap-1">
          <img className="rounded-full " src={user1Img} alt="" />
          <h2 className="card-title ml-2"> {player.player_name} </h2>
        </div>

        <div className="flex justify-between mt-4 border-b p-b-2 border-gray-200">
          <div className="flex items-center p-2">
            <img className="w-[20px] h-[20px]" src={flagIcon} alt="" />
            <span className="ml-2"> {player.player_country} </span>
          </div>
          <div className="p-2">
            <button className="btn"> {player.playing_role} </button>
          </div>
        </div>

        <div className="flex justify-between font-semibold p-2">
          <span> Rating </span>
          <span className="text-gray-400"> {player.rating} </span>
        </div>
        <div className="flex justify-between mt-4 p-2">
          <span className="font-semibold"> {player.batting_style} </span>
          <span className="text-gray-400"> {player.bowling_style} </span>
        </div>

        <div className="card-actions mt-4 flex justify-between mb-4 items-center p-2">
          <p className="font-semibold">Price: {player.price} </p>
          <button
            disabled={isSelected}
            onClick={() => {
              handleSelected(player);
            }}
            className="btn "
          >
            {" "}
            {isSelected === true ? "Selected" : "Choose player"}{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
