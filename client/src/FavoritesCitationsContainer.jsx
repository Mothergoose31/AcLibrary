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
    const deleteCitation = (citation) => {
        console.log(citation);
        axios.delete(`/users/5d5c33f1ba2d801a536e24a4/citations/${citations._id}`).then((response) => {
        })
    }
    

    
    const updateCitation = (citation) => {
        axios.put(`/users/5d5c33f1ba2d801a536e24a4/citations/${citation._id}`,{citation}).then((response)=>{
            axios.get(`/users/5d5c33f1ba2d801a536e24a4/citations`).then((response)=>{
                setCitations(response.data);
            })
        })
    }

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
            <h2>Favorites</h2>
            <div className =  'mainContainer'>

                <div className = 'favoritesContainer'>
                    <Favorites favorites={favorites} deleteArticle={deleteArticle}   />
                </div>
                <div className = 'citationsContainer'>
                    <Citations citations={citations} deleteCitation={deleteCitation} updateCitation={updateCitation} />
                </div>
        </div>
        </>
    )
}

export default FavoritesCitationsContainer
