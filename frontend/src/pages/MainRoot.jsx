import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection/HeroSection"
import NavbarSide from "../components/Navbar/NavbarSide";
function MainRoot() {
    return (
        <>
            <NavbarSide />
            <Outlet />
            <Footer />
        </>
    );
}

export default MainRoot;