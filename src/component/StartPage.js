import React, { useState } from 'react';
import main from './img/main.png';
import Navbar from './Navbar';
import Sharerank from './Sharerank';
import LoginPage from './LoginPage.js';

const StartPage = ({ setPage }) => {
    const [showLoginPage, setShowLoginPage] = useState(false); // 로그인 페이지를 보여줄지 여부를 상태로 관리합니다

    const handleLoginClick = () => {
        setShowLoginPage(true); // 로그인 버튼을 클릭하면 로그인 페이지를 보여주도록 상태를 업데이트합니다
    };

    return (
        <>
            {showLoginPage ? (
                <LoginPage /> // showLoginPage 상태가 true이면 로그인 페이지를 보여줍니다
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
