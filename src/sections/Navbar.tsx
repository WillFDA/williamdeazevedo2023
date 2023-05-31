import React from "react";
import Logo from '../components/Logo';
import { FaChevronDown } from "react-icons/fa"
function Navbar() {
    return (
        <nav className='navbar'>
                <a href="/" className='logo'><Logo /></a>
            <div className='navbar__menu-container'>
                <button className='navbar__menu-button'>Menu <FaChevronDown className='navbar__menu-icon'/> </button>
            </div>
        </nav>

    )
}

export default Navbar;