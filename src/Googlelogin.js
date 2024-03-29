import {GoogleOAuthProvider,GoogleLogin,googleLogout} from "@react-oauth/google";
import Cookies from "js-cookie";
import axios from 'axios';
// import { response } from "express";

const Googlelogin = () => {
    const clientId = '756646843649-gg9n9b7fvtttk7pg6sd20mcriadmn2bp.apps.googleusercontent.com';
    return (
        <>
            <GoogleOAuthProvider clientId={clientId}>
                <GoogleLogin
                    onSuccess={(res) => {
                        Cookies.set('accessToken',res.credential);

                        axios.post('http://35.208.142.216:8080/auth/login',{
                            token: res.credential
                            })
                            .then(response =>{
                                console.log('응답 데이터: ',response.data);
                            })
                            .catch(error =>{
                                console.log('에러 발생: ',error);
                            })

                            console.log(res);
                        }}
                    onFailure={(err) => {
                        console.log(err);
                    }}
                />
                <button onClick={()=>{
                   Cookies.remove('accessToken');
                }
                }>logout</button>
               
            </GoogleOAuthProvider>
        </>
    );
};

export default Googlelogin