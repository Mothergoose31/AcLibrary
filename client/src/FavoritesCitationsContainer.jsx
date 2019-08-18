import React, {useState, useEffect} from 'react';
import favorites from './Favorites'
import Citations from './Citations'

import {
    BrowserRouter as Router,
    Link,
} from 'react-router-dom';

const FavoritesCitationsContainer = props => {
    return(
        <body className = 'mainContainer'>
            <h2>Favorites page</h2>

            <div className = 'favoritesContainer'>
                <favorites></favorites>
            </div>
            <div className = 'citationsContainer'>

            </div>
        </body>
    )
}

export default FavoritesCitationsContainer
