import React, {useState, useEffect} from 'react';
import Favorites from './Favorites'
import Citations from './Citations'
import axios from 'axios';

import {
    BrowserRouter as Router,
    Link,
} from 'react-router-dom';

const FavoritesCitationsContainer = props => {
    const [favorites, setFavorites] = useState([])

    //when clicked  nodemon  breaks
    const deleteArticle = (favorites) => {
        console.log(props.article._id);
        axios.delete(`/users/5d573e62ea5bb30e9fe49fb3/articles/${props.article._id}`).then((response) => {
            
            
            })
    }
    
    
    
    useEffect(()=>{
        
        console.log(props.user);
        axios.get(`/users/5d573e62ea5bb30e9fe49fb3/articles`).then((response) =>{
            console.log("hitting the route");
            console.log(response.data);
            setFavorites(response.data);
        })
    },[])
    

    return(
        <>
            <h2>Favorites page</h2>
            <div className =  'mainContainer'>

                <div className = 'favoritesContainer'>
                    <Favorites favorites={favorites} deleteArticle={deleteArticle} />
                </div>
                <div className = 'citationsContainer'>

                </div>
        </div>
        </>
    )
}

export default FavoritesCitationsContainer
