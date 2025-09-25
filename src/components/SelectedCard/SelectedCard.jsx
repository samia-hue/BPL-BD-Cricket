import React from 'react';
import deleteImg from '../../assets/Frame.png'


const SelectedCard = ({player, removePlayer}) => {
  
const handleRemove = () =>{
    removePlayer(player)
}

    return (
        <div className='border-2 border-gray-300 flex justify-between items-center p-2 rounded-xl mt-3'>
                 
                 <div className='flex '>
                    <img src={player.player_img} className='w-[50px] h-[50px] rounded-xl ' alt="" />
                    <div className='ml-2'>
                        <h1> {player.player_name} </h1>
                        <p> {player.playing_role} </p>
                    </div>
                 </div>
                 <div onClick={handleRemove}>
                    <img src={deleteImg} alt="" />
                 </div>
            </div>
    );
};

export default SelectedCard;