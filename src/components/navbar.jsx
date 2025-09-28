import React from "react"
import { Link } from "react-router-dom"



const Navbar = () => {
    return (
        <>
            <div className='flex items-center gap-5'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/services">Services</Link>
            </div>
            
        </>
    )
}

export default Navbar