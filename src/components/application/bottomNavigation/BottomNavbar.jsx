import './../../../stylesheets/bottomNavbar.css';

import { useState } from 'react';

import { faHome, faSearch, faUser, faTimeline } from '@fortawesome/free-solid-svg-icons';
import NavigationIcon from './NavigationIcon';

const BottomNavbar = (props) => {
    const[prevPage, setPrevPage] = useState(1);

    function handlePageChange (page) {
        setPrevPage(props.page);
        props.onPageChange(page);
    }

    return (
        <div className={`bottomNavBar${props.panelActive ? ' overlay' : ''}`} onClick={()=>props.isPanelActive(false)}>
            <NavigationIcon prevPage = {prevPage} pageId={1} activePage={props.page} title="Home" onPageChange = {(page)=>handlePageChange(page)} icon={faHome} />
            <NavigationIcon prevPage = {prevPage} pageId={2} activePage={props.page} title="Search" onPageChange = {(page)=>handlePageChange(page)} icon={faSearch} />
            <NavigationIcon prevPage = {prevPage} pageId={3} activePage={props.page} title="Features" onPageChange = {(page)=>handlePageChange(page)} icon={faTimeline} />
            <NavigationIcon prevPage = {prevPage} pageId={4} activePage={props.page} title="User" onPageChange = {(page)=>handlePageChange(page)} icon={faUser} />
        </div>
    );
};

export default BottomNavbar;