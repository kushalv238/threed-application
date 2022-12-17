import { useState } from 'react';

import './../../stylesheets/welcomePage.css';

import Login from './loginSignin/Login';
import LoginSignup from './loginSignin/LoginSignup';

const WelcomePage = () => {
    const pageWidth = Math.floor(window.innerWidth);
    // const pageWidth = 500;
    const [page, setPage] = useState("home");

    return (
        <>
            <div className='images'>
                <div className="img">
                    <img src={`https://picsum.photos/${pageWidth}/220`} alt='sampleImg1' title='img1'/>
                </div>
                <div className="img">
                    <img src={`https://picsum.photos/${pageWidth}/221`} alt='sampleImg1' title='img2'/>
                </div>
            </div>
            <div className='loginSignup'>
                {page === "home" && <LoginSignup onPageChange={(newPage) => setPage(newPage)}/> }                
                {page === "login" && <Login onPageChange={(newPage) => setPage(newPage)}/> }
                {page === "signup" && <><h1>Signup page here</h1><button className='btn' onClick={() => setPage("home")}>go back</button></> }
            </div>
        </>
    )
}

export default WelcomePage;