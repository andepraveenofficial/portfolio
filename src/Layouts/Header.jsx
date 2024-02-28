/* -----> Third Party packages <----- */
import React from 'react'
import { Link } from 'react-router-dom'

/* -----> Component <----- */
const Header = () => {
    console.log("   Header Layout")

    // Return JSX
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">Home</Link>
        </div>
    )
}

/* -----> Export <-----*/
export default Header