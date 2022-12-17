import './../../../stylesheets/bottomNavbar.css';
import { faHome, faSearch, faUser, faStar } from '@fortawesome/free-solid-svg-icons';
import NavigationIcon from './NavigationIcon';

const BottomNavbar = (props) => {
    return (
        <div className="bottomNavBar">
            <NavigationIcon page={props.page} Page="home" title="Home" onPageChange = {props.onPageChange} icon={faHome}/>
            <NavigationIcon page={props.page} Page="search" title="Search" onPageChange = {props.onPageChange} icon={faSearch}/>
            <NavigationIcon page={props.page} Page="feat" title="Features" onPageChange = {props.onPageChange} icon={faStar}/>
            <NavigationIcon page={props.page} Page="user" title="User" onPageChange = {props.onPageChange} icon={faUser}/>
        </div>
    );
}

export default BottomNavbar