/*
    Location: '/application'
*/


import BottomNavbar from "./bottomNavigation/BottomNavbar";
import { useState } from 'react';

import Home from "./homePage/Home";
import Search from './searchPage/Search';
import Features from "./featuresPage/Features";
import User from "./userPage/User";

const ApplicationPage = () => {
    const[page, setPage] = useState("home");
    return (
        <>
            { page === "home" && <Home /> }
            { page === "search" && <Search /> }
            { page === "feat" && <Features /> }
            { page === "user" && <User /> }
            <BottomNavbar onPageChange = {(newPage) => setPage(newPage)} page={page}/> {/* className: 'bottomNavBar' */}
        </>
    );
};

export default ApplicationPage