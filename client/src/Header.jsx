import React from 'react';

import {
    BrowserRouter as Router,
    Link,
    
} from 'react-router-dom';

const Header = props => {
    var user = props.user;
    
    if (user) {
        var userLogin = (
            <nav>
                <Router>
                    <Link to='/' onClick={props.logout}>Logout</Link>
                </Router>
            </nav>
        )
    } else {
        var userLogin = (
            <nav>
                <Router>
                    <Link to='/login' >Login</Link>
                    <Link to='/signup'>Sign Up</Link>
                </Router>
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