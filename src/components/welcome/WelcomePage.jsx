/*
    Location: '/'
*/


import { useState, useEffect } from 'react';

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
    var User;
    var userFound = false;

    
    useEffect(() => {
        if(document.cookie.length !== 0 ) {
            var result = document.cookie.match(new RegExp('userInfo=([^;]+)'));
                result && (result = JSON.parse(result[1]));
    
            if(result !== undefined && result !== null) {
                window.location.pathname='/application';
                return;
            }
        }
    }, [])

    function loginUser(checkUser, rememberStatus) {
        users.map (
            (user, key) => {
                if(user.username === checkUser.username && pass[key].password === checkUser.password) {
                    User = user;
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
            rememberStatus ?
            saveUser(User) :
            props.getUser(User);
        }
    }
    
    function saveUser(userInfo) {
        const today = new Date();
        var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    
        document.cookie = `userInfo=${JSON.stringify(userInfo)}; expires=${days[today.getDay()]}, ${today.getDate()+7} ${today.getMonth()} ${today.getFullYear()} 12:00:00 UTC; path=/`;
        document.cookie = `userInfo=${JSON.stringify(userInfo)}; expires=${days[today.getDay()]}, ${today.getDate()+7} ${today.getMonth()} ${today.getFullYear()} 12:00:00 UTC; path=/application`;
        
        setLoginInfoCorrect(true);
        props.getUser(userInfo);
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
                {page === 'login' && <Login onPageChange={(newPage) => setPage(newPage)} userUpdate={(userInfo, rememberStatus) => loginUser(userInfo, rememberStatus)} loginInfoCorrect={loginInfoCorrect} /> }
                {page === 'signup' && <SignUp onPageChange={(newPage) => setPage(newPage)} userUpdate={(userInfo, rememberStatus) => rememberStatus ? saveUser(userInfo) : props.getUser(userInfo) } loginInfoCorrect={loginInfoCorrect} /> }
            </div>
        </>
    )
}

export default WelcomePage;