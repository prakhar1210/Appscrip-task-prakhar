import React from 'react';
import "./Navbar.css";
import Logo from "../../Albums/Logo.jpg";
import Icons from "../../Albums/Icons.png";

const Navbar = () => {
    return (
        <div>
            <div className='NavbarMainContainer'>
                <div className='NavbarLogoContainer'>
                    <img src={Logo} alt="Logo" />
                    <h2>LOGO</h2>
                    <img src={Icons} alt="icons" />
                </div>
                <div className='NavbarAuxilaryContainer'>
                    <h3>Shop</h3>
                    <h3>Skills</h3>
                    <h3>Stories</h3>
                    <h3>About Us</h3>
                    <h3>Contact Us</h3>
                </div>
            </div>
        </div>
    )
}

export default Navbar
// C:\Users\hp\OneDrive\Desktop\AssignmentV\appscrip\appscrip-assignment\src\Albums\
