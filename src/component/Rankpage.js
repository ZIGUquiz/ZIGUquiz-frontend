import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Sharerank2 from './Sharerank2';

const Rankpage = ({ setPage }) => {
    const [counting, setCounting] = useState(null); // 참여 인원수

    useEffect(() => {
        fetch('백엔드 서버의 URL') // 백엔드 서버에 요청을 보냅니다
            .then(response => response.json())
            .then(data => setCounting(data.count)) // 받아온 데이터를 상태에 저장합니다
            .catch(error => console.error(error)); // 에러가 발생하면 콘솔에 에러를 출력합니다
    }, []);

    return (
        <div className='startPageLayout'>
            <Navbar/>
            <div className='startmainbox'>
                <div className='maintext'>
                    <div className='first'>1 {counting} people participate</div>
                    <div className='second'>2 {counting} people participate</div>
                    <div className='third'>3 {counting} people participate</div>
                    <div className='line'></div>
                </div>
                <div onClick={() => window.location.reload()} className='againButton'>
                    <div className='buttonstart'>TEST AGAIN!</div> 
                </div>
                <Sharerank2/>
                
            </div>
        </div>
    );
};

export default Rankpage;