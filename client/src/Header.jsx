import React from 'react';
import {
    BrowserRouter as Router,
    Link,
} from 'react-router-dom';

const Header = props => {
    var user = props.user;
    
    if (user) {
        var userLogin = (
            <nav className= 'nav'>
                <Link to="/">&larr; Back Home</Link>
                <Link to='/' onClick={props.logout}>Logout</Link>
                <Link to='/favorites'>Favorites</Link>  
            </nav>
        )
    } else {
        var userLogin = (
            <nav className='nav'>
                
                    <Link to='/login' >Login</Link>
                    <Link to='/signup'>Sign Up</Link>
                
            </nav>
        );
    }
    return (
        <header className="App-header">
            {userLogin}
        </header>
    );
}

export default Header;