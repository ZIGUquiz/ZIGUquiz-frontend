import React from 'react';
import Navbar from './Navbar';
import google from './img/google.png';
import Cookies from "js-cookie";
import axios from 'axios';
import { useGoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from "@react-oauth/google";

const GoogleLoginButton = () => {
    const signIn = useGoogleLogin({
        onSuccess: (res) => { 
            axios.post('http://35.208.142.216/auth/login', {
                access_token: res.access_token,
                scope: res.scope
            })
            .then(response => {
                Cookies.set('accessToken', response.data);
                console.log('응답 데이터: ', response.data);
                window.location.reload();
            })
            .catch(error => {
                console.log('에러 발생: ', error);
            });
        },
        onError: error => console.log(error),
    });

    return (
        <div onClick={() => signIn()}>
            <img src={google} alt="Login with Google" style={{ cursor: 'pointer' }} />
        </div>
    );
};

const LoginPage = () => {
    const clientId = '756646843649-gg9n9b7fvtttk7pg6sd20mcriadmn2bp.apps.googleusercontent.com';

    return (
        <div className='startPageLayout'>
            <Navbar />
            <div className='startmainbox'>
                <div className='maintext'></div>
                <div className='loginimg'>
                    <GoogleOAuthProvider clientId={clientId}>
                        <GoogleLoginButton />
                    </GoogleOAuthProvider>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
