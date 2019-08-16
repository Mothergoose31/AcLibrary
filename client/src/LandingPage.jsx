import React from 'react'
import {
    BrowserRouter as Router,
    Link,
} from 'react-router-dom';

const LandingPage = props => {
    return(
        <>
            <h2>LoginPage</h2>
            <div className = ''>
                
                    <Link className="login" to='/login' >Login</Link>
                    <Link className="signup" to='/signup'>Sign Up!</Link>
                
            </div>
        </>
    )
}

export default LandingPage;
