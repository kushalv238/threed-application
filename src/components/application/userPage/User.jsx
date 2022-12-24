import './../../../stylesheets/users.css';

import { Link } from 'react-router-dom';

import UserInfo from './UserInfo';

const User = (props) => {
    return (
        <div
            className={`usersPage${props.panelActive ? ' overlay' : ''}`}
            onClick={()=>props.isPanelActive(false)}
        >
            <UserInfo infoName="First Name" info={props.user.firstName}/>
            <UserInfo infoName="Last Name" info={props.user.lastName}/>
            <UserInfo infoName="Profession" info={props.user.profession}/>
            <UserInfo infoName="Username" info={props.user.username}/>
            <UserInfo infoName="Email" info={props.user.emailId}/>
            <UserInfo infoName="Phone No." info={props.user.phoneNo}/>
            <UserInfo infoName="Date of Birth" info={props.user.dob}/>
            <UserInfo infoName="Gender" info={props.user.gender === 'M' ? 'Male' : 'Female'}/>
            <div className="logoutButton">
                <Link to='/'>
                        <button className='btn'>Log out</button>
                </Link>
            </div>
        </div>
    );
};

export default User;