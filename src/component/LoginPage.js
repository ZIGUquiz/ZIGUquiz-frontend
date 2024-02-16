import React from 'react';
import Navbar from './Navbar';
import google from './img/google.png';

import { useGoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from "@react-oauth/google";

const GoogleLoginButton = () => {
    const signIn = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
        onError: error => console.log(error),
        // Authorization code flow를 사용하려면 flow: 'auth-code'와 관련 설정이 필요할 수 있습니다.
    });

    return (
        <div onClick={() => signIn()}>
            <img src={google} />
        </div>
    );
};


const LoginPage = ({ setPage }) => {
    const clientId = '756646843649-gg9n9b7fvtttk7pg6sd20mcriadmn2bp.apps.googleusercontent.com';
    return (
        <div className='startPageLayout'>
            <Navbar />
            <div className='startmainbox'>
                <div className='maintext'>
                </div>
                <div className='loginimg'>
                    {/* GoogleOAuthProvider로 감싸고 clientId를 제공합니다. */}
                    <GoogleOAuthProvider clientId={clientId}>
                        <GoogleLoginButton />
                    </GoogleOAuthProvider>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;