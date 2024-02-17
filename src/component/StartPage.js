import React, { useState } from 'react';
import main from './img/main.png';
import Navbar from './Navbar';
import Sharerank from './Sharerank';
import LoginPage from './LoginPage';

const StartPage = ({ setPage }) => {
    const [showLoginPage, setShowLoginPage] = useState(false);

    const handleLoginClick = () => {
        setShowLoginPage(true);
    };

    return (
        <>
            {showLoginPage ? (
                <LoginPage /> 
            ) : (
                <>
                    <div className='loginbttn' onClick={handleLoginClick}>
                        Login
                    </div>
                    <div className='startPageLayout'>
                        <Navbar/>
                        <div className='startmainbox'>
                            <div className='maintext'>
                                <div>
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
