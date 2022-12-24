const UserInfo = (props) => {
    return(
        <div className="userInfo">
            <h2>{props.infoName}</h2>
            <p className='userInformation'>{props.info}</p>
        </div>
    );
};

export default UserInfo;