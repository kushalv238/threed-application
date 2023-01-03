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

const ApplicationPage = (props) => {
    const[page, setPage] = useState(1);
    const[panelActive, setPanelActive] = useState(false);
    
    if(props.user === undefined) {
        window.location.pathname='/'
    }
    
    else {
        return (
            <>
                <Sidebar panelActive={panelActive} isPanelActive={(panelState) => setPanelActive(panelState)}/>
                { page === 1 && <Home panelActive={panelActive} isPanelActive={(panelState) => setPanelActive(panelState)} /> }
                { page === 2 && <Search panelActive={panelActive} isPanelActive={(panelState) => setPanelActive(panelState)} /> }
                { page === 3 && <Features panelActive={panelActive} isPanelActive={(panelState) => setPanelActive(panelState)} /> }
                { page === 4 && <User user={props.user} panelActive={panelActive} isPanelActive={(panelState) => setPanelActive(panelState)} /> }
                <BottomNavbar panelActive={panelActive} isPanelActive={(panelState) => setPanelActive(panelState)} onPageChange = {(newPage) => setPage(newPage)} page={page}/> {/* className: 'bottomNavBar' */}
            </>
        );
    }
};

export default ApplicationPage