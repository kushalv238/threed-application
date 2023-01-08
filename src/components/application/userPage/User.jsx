import './../../../stylesheets/users.css';

import UserInfo from './UserInfo';

const User = (props) => {
    function getGender () {
        if(props.user.gender === 'M') return "Male"
        else if(props.user.gender === 'F') return "Female"
        else if(props.user.gender === 'O') return "Others"
        else if(props.user.gender === '') return ''
    }
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
            <UserInfo infoName="Gender" info={getGender()} />
            <div className="logoutButton">
                <button onClick={() => {document.cookie = 'userInfo= ; expires=; path=/'; document.cookie = 'userInfo=; expires=; path=/application'; window.location.pathname = '/';}} className='btn'>Log out</button>
            </div>
        </div>
    );
};

export default User;