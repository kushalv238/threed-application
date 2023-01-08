/*
    Location: '/application'
*/


import BottomNavbar from "./bottomNavigation/BottomNavbar";
import { useState, useEffect } from 'react';

import Home from "./homePage/Home";
import Search from './searchPage/Search';
import Features from "./featuresPage/Features";
import User from "./userPage/User";
import Sidebar from "./sidebar/Sidebar";

const ApplicationPage = (props) => {
    const[page, setPage] = useState(1);
    const[panelActive, setPanelActive] = useState(false);
    const[user, setUser] = useState(props.user);

    useEffect(() => {
        if(props.user !== undefined) {
            setUser(props.user);
            return;
        }

        if(document.cookie.length !== 0) {
            var result = document.cookie.match(new RegExp('userInfo=([^;]+)'));
            result && (result = JSON.parse(result[1]));

            if((result === undefined || result === null)) {
                window.location.pathname='/';
                return;
            }

            setUser(result);
        }
    }, [props.user])
    

    return (
        <>
            <Sidebar panelActive={panelActive} isPanelActive={(panelState) => setPanelActive(panelState)}/>
            { page === 1 && <Home panelActive={panelActive} isPanelActive={(panelState) => setPanelActive(panelState)} /> }
            { page === 2 && <Search panelActive={panelActive} isPanelActive={(panelState) => setPanelActive(panelState)} /> }
            { page === 3 && <Features panelActive={panelActive} isPanelActive={(panelState) => setPanelActive(panelState)} /> }
            { page === 4 && <User user={user} panelActive={panelActive} isPanelActive={(panelState) => setPanelActive(panelState)} /> }
            <BottomNavbar panelActive={panelActive} isPanelActive={(panelState) => setPanelActive(panelState)} onPageChange = {(newPage) => setPage(newPage)} page={page}/>
        </>
    );
};

export default ApplicationPage