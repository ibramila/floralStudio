import React from 'react'
import "./style.scss"
import { NavLink } from "react-router-dom";

function NavbarSide() {
    const activeNavbar = {
        fontWeight: 900,
        color: "#faba84"
    }
    return (
        <>
            <nav>
                <div className='container'>
                    <div className='nav'>
                        <div style={{fontWeight:900, color:"white"}}>FLORAL STUDIO</div>
                        <ul>
                            <li>
                                <NavLink style={({ isActive }) => (isActive ? activeNavbar : null)} to="/"> Home</NavLink>

                            </li>
                            <li>
                                <NavLink style={({ isActive }) => (isActive ? activeNavbar : null)} to="/add"> Add</NavLink>
                            </li>
                            <li>
                                <NavLink style={({ isActive }) => (isActive ? activeNavbar : null)} to="/contacts"> Contacts</NavLink>
                            </li>
                            <li>
                                <NavLink style={({ isActive }) => (isActive ? activeNavbar : null)} to="/aboutus"> About Us</NavLink>
                            </li> <li>
                                <NavLink style={({ isActive }) => (isActive ? activeNavbar : null)} to="/portfolio"> Portfolio</NavLink>
                            </li> 
                            <li>
                                <NavLink style={({ isActive }) => (isActive ? activeNavbar : null)} to="/pricing"> Pricing</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavbarSide