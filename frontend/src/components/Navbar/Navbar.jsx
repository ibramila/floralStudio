import React from 'react'
import "./style.scss"
import { NavLink } from "react-router-dom";

function NavbarSide() {
    const activeNavbar = {
        fontSize: 25,
        fontWeight: 900,
        color: "#7971ea"
    }
    return (
        <>
            <nav style={{ position: "absolute", zIndex: 999 }}>
                <div className='container'>
                    <div className='nav'>
                        <ul>
                            <li style={{ fontWeight: 900, color: "white" }}>OneSchool</li>
                            <li>
                                <NavLink style={({ isActive }) => (isActive ? activeNavbar : null)} to="/"> Home</NavLink>

                            </li>
                            <li>
                                <NavLink style={({ isActive }) => (isActive ? activeNavbar : null)} to="/add"> Add</NavLink>
                            </li>
                            <li>
                                <NavLink style={({ isActive }) => (isActive ? activeNavbar : null)} to="/dashboard"> Dashboard</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavbarSide