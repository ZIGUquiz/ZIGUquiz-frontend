import React from 'react';
import Navbar from './Navbar';
import google from './img/google.png';

const LoginPage = ({ setPage }) => {
    return (
        <div className='startPageLayout'>
            <Navbar/>
            <div className='startmainbox'>
                <div className='maintext'>
                </div>
                <div className='loginimg'>
                    <img src={google}/>
                </div>
            </div>
        </div>
  );
};

export default LoginPage;