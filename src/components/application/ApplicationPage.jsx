/*
    Location: '/application'
*/


import BottomNavbar from "./bottomNavigation/BottomNavbar";
import { useState } from 'react';

import Home from "./homePage/Home";
import Search from './searchPage/Search';
import Features from "./featuresPage/Features";
import User from "./userPage/User";
import Sidebar from "./sidebar/Sidebar";
import Theme from "./applicationTheme/Theme";

const ApplicationPage = (props) => {
    const[page, setPage] = useState("home");
    const[panelActive, setPanelActive] = useState(false);
    const user = {
        "firstName": "Alan",
        "lastName": "Rodrigues",
        "username": "alanr149",
        "emailId": "alanrodri149@example.com",
        "phoneNo": 8732191096,
        "dob": "14/09/1998",
        "gender": "M",
        "profession": "Doctor",
        "userID": 1
    }
    // console.log(props.user);
    return (
        <>
            <Sidebar panelActive={panelActive} isPanelActive={(panelState) => setPanelActive(panelState)}/>
            <Theme />
            { page === "home" && <Home panelActive={panelActive} isPanelActive={(panelState) => setPanelActive(panelState)} /> }
            { page === "search" && <Search panelActive={panelActive} isPanelActive={(panelState) => setPanelActive(panelState)} /> }
            { page === "feat" && <Features panelActive={panelActive} isPanelActive={(panelState) => setPanelActive(panelState)} /> }
            { page === "user" && <User user={user} panelActive={panelActive} isPanelActive={(panelState) => setPanelActive(panelState)} /> }
            <BottomNavbar panelActive={panelActive} isPanelActive={(panelState) => setPanelActive(panelState)} onPageChange = {(newPage) => setPage(newPage)} page={page}/> {/* className: 'bottomNavBar' */}
        </>
    );
};

export default ApplicationPage