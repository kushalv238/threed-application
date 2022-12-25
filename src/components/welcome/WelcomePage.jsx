import { useState } from 'react';

import './../../stylesheets/welcomePage.css';

import LoginSignup from './loginSignin/LoginSignup';
import Login from './loginSignin/Login';
import SignUp from './loginSignin/Signup';

import users from './../../database/users.json';
import pass from './../../database/passwords.json';

const WelcomePage = (props) => {
    const pageWidth = Math.floor(window.innerWidth);
    const [page, setPage] = useState('home');
    const [loginInfoCorrect, setLoginInfoCorrect] = useState(true);
    var userFound = false;

    function loginUser(checkUser) {
        users.map (
            (user, key) => {
                if(user.username === checkUser.username && pass[key].password === checkUser.password) {
                    props.getUser(user);
                    userFound = true;
                    return undefined;
                }
                return undefined;
            }
        );
        if(!userFound) {
            setLoginInfoCorrect(false);
        }
        else {
            setLoginInfoCorrect(true);
        }
    }

    return (
        <>
            <div className='images'>
                <div className='img'>
                    <img src={`https://picsum.photos/${pageWidth}/220`} alt='sampleImg1' title='img1'/>
                </div>
                <div className='img'>
                    <img src={`https://picsum.photos/${pageWidth}/221`} alt='sampleImg1' title='img2'/>
                </div>
            </div>
            <div className='loginSignup'>
                {page === 'home' && <LoginSignup onPageChange={(newPage) => setPage(newPage)} /> }                
                {page === 'login' && <Login onPageChange={(newPage) => setPage(newPage)} userUpdate={(userInfo) => loginUser(userInfo)} loginInfoCorrect={loginInfoCorrect} /> }
                {page === 'signup' && <SignUp onPageChange={(newPage) => setPage(newPage)} /> }
            </div>
        </>
    )
}

export default WelcomePage;