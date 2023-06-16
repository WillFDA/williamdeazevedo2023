"use client"
import React, {useState} from "react";
import { Link } from "react-scroll";
import Logo from '../components/Logo';
import { FaChevronDown, FaTimes } from "react-icons/fa"

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    function handleNavMenuClick(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        setIsOpen(!isOpen)
    }

    return (
        <nav className='navbar'>
            <a href="/" className='logo'><Logo /></a>
            <div className='navbar__menu-container'>
                <button onClick={handleNavMenuClick} className='navbar__menu-button'>
                    Menu
                    {isOpen ? <FaTimes className='navbar__menu-icon'/> : <FaChevronDown className='navbar__menu-icon'/>}
                </button>
                { isOpen && (<nav className="nav_links">
                    <ul>
                        <Link 
                            activeClass="active"
                            to="technos"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <li className="nav_links_li">Mes Technologies</li>
                        </Link>
                        <Link 
                            activeClass="active"
                            to="work"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <li className="nav_links_li">Mes Projets</li>
                        </Link>
                        <Link 
                            activeClass="active"
                            to="abouts"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >
                            <li className="nav_links_li">A propos de moi</li>
                        </Link>
                        <a target="_blank" href="https://github.com/WillFDA"><li className="nav_links_li">Mon github</li></a>
                    </ul>
                </nav>)}
            </div>
        </nav>
    )
}

export default Navbar;
