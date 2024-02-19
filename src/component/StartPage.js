import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie'
import main from './img/main.png';
import Navbar from './Navbar';
import Sharerank from './Sharerank';
import { useNavigate } from 'react-router-dom';

const StartPage = ({ setPage }) => {
    const navigate = useNavigate();

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
                Cookies.remove('accessToken');
            }
        }
    }, []);

    const handleLoginLogoutClick = () => {
        //로그아웃 처리
        if (isLoggedIn) { // 로그인 상태에서 로그아웃 과정
            // document.cookie = 'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            Cookies.remove('accessToken',{path : ''})
            setIsLoggedIn(false);
            setUserName('');
            // Optionally, redirect to homepage or refresh the page
        } else { //로그아웃 상태에서 로그인 과정
            setShowLoginPage(true);
            // navigate("/main");
        }
    };

    return (
        <>
            {showLoginPage ? (
                navigate("/loginpage")
            ) : (
                <>
                    <div className='loginbttn' onClick={handleLoginLogoutClick}>
                        {isLoggedIn ? 'Logout' : 'Login'}
                    </div>
                    <div className='startPageLayout'style={{ position: 'absolute' }}>
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
                        <div onClick={() => {setPage(1);
                        if(!Cookies.get('accessToken')){
                            navigate('/loginpage');
                        }
                        }} className='startButton'>
                            <div className='buttonstart'>TEST START!</div>
                        </div>
                        <Sharerank />
                    </div>
                </>
            )}
        </>
    );
};

export default StartPage;
