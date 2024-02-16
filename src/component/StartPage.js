import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie'
import main from './img/main.png';
import Navbar from './Navbar';
import Sharerank from './Sharerank';
import LoginPage from './LoginPage.js';

const StartPage = ({ setPage }) => {
    const [showLoginPage, setShowLoginPage] = useState(false);
    const [userName, setUserName] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {

        if (Cookies.get('accessToken')) {
            try {
                const token = Cookies.get('accessToken');
                const decodedToken = jwtDecode(token);
                setUserName(decodedToken.name);
                setIsLoggedIn(true);
            } catch (error) {
                console.log('Invalid access token');
            }
        }
    }, []);

    const handleLoginLogoutClick = () => {
        //로그아웃 처리
        if (isLoggedIn) {
            // document.cookie = 'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            Cookies.remove('accessToken',{path : ''})
            setIsLoggedIn(false);
            setUserName('');
            // Optionally, redirect to homepage or refresh the page
        } else {
            setShowLoginPage(true);
        }
    };

    return (
        <>
            {showLoginPage ? (
                <LoginPage />
            ) : (
                <>
                    <div className='loginbttn' onClick={handleLoginLogoutClick}>
                        {isLoggedIn ? 'Logout' : 'Login'}
                    </div>
                    <div className='startPageLayout'>
                        <Navbar/>
                        <div className='startmainbox'>
                            <div className='maintext'>
                                <div>
                                    {userName && <div className='welcomeMessage'>Hi! {userName}</div>}
                                    How much do you know about the environment?<br/><br/>
                                    Through ZIGU QUIZ<br/><br/>
                                    Check out your environmental scores!
                                </div>
                            </div>
                            
                            <div className='mainImg'>
                                <img src={main} width='250px'/>
                            </div>
                        </div>
                        <div onClick={() => setPage(1)} className='startButton'>
                            <div className='buttonstart'>TEST START!</div>
                        </div>
                        <Sharerank/>
                    </div>
                </>
            )}
        </>
    );
};

export default StartPage;
