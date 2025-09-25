import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';


const SelectedPlayers = ({purchasedPlayer, removePlayer}) => {
    
    return (
        <div className='max-w-[1200px] mx-auto'>
            {
                purchasedPlayer.map(player => <SelectedCard removePlayer={removePlayer} player={player}></SelectedCard>)
            }
        </div>
    );
};

export default SelectedPlayers;