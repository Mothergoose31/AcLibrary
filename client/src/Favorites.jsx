import React from 'react';

function Favorites({article, favorites, deleteAFavorite}) {
    let content;
    content = favorites.map((favorite,id)=>{
        return (
        <div>
            <p key={id}>{favorite.toUpperCase()}</p>
            <button onClick={()=> deleteAFavorite(favorite)} className='button'>Remove Favorite</button>
        </div>
    )  
    })
    return (
        <div className="ArticleFaves">
            <p className="detail">Favorite Pokemon:</p>
            <p className="favs"> {content}</p>
        </div>
    )
}


export default Favorites