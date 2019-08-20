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
    const [citations , setCitations] = useState([])
    var name = props.user ? props.user.name : '';
    //when clicked  nodemon  breaks
    const deleteArticle = (article) => {
        console.log(article);
        axios.delete(`/users/5d5c33f1ba2d801a536e24a4/articles/${article._id}`).then((response) => {
        })
    }
    

    // const addToFavorites = (event) => {
    //     axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('mernToken');
    //     const newFavs = [...favorites, sportsList]
    //     axios.post(`users/${user._id}/events/`, {name: event.name, date: event.date}).then((response) => {
    //       axios.get(`users/${user._id}/events`).then((res) => {
    //         setFavorites(res.data)
    //       })
    //     })
    //   }

    useEffect(()=>{
        axios.get(`/users/5d5c33f1ba2d801a536e24a4/articles`).then((response) =>{
            console.log("hitting the articles route");
            console.log(response.data);
            setFavorites(response.data);
        })
    },[])

    useEffect(()=>{
        axios.get(`/users/5d5c33f1ba2d801a536e24a4/citations`).then((response) =>{
            console.log("hitting the route citations");
            console.log(response.data);
            setCitations(response.data);
        })
    },[])
    

    return(
        <>
            <h2>Favorites page</h2>
            <div className =  'mainContainer'>

                <div className = 'favoritesContainer'>
                    <Favorites favorites={favorites} deleteArticle={deleteArticle}   />
                </div>
                <div className = 'citationsContainer'>
                    <Citations citations={citations}/>
                </div>
        </div>
        </>
    )
}

export default FavoritesCitationsContainer
