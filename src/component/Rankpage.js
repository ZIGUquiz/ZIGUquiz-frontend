import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import Sharerank2 from './Sharerank2';
import { useNavigate } from 'react-router-dom';

const Rankpage = ({ setPage }) => {
    const navigate = useNavigate();

    const [rankings, setRankings] = useState([]); // 국가별 순위 정보를 저장할 배열

    useEffect(() => {

        axios.get('http://35.208.142.216:8080/quiz/rank')
            .then(response => {
                // API 응답에서 국가별 정보를 배열로 변환
                console.log(response.data);
                const rankArray = Object.entries(response.data).map(([countryName, count], index) => ({
                    countryName,
                    count,
                    rank: index + 1
                }));
                setRankings(rankArray);
            })
            .catch(error => console.error(error));

    }, []);


{/* <img src="https://flagcdn.com/48x36/za.png"></img> */}
// =>  /사이즈/국가코드(소문자).png


    return (
        <div className='startPageLayout'>
            <Navbar/>
            <div className='startmainbox'>
                <div className='maintext'>
                    {rankings.map(({ countryName, count, rank }) => (
                        <div key={countryName} className={`rank-${rank}`}>
                            <img src={`https://flagcdn.com/48x36/${countryName.toLowerCase()}.png`} alt={countryName} />
                            <span>{rank} {count} people participate</span>
                        </div>
                    ))}
                    <div className='line'></div>
                </div>
                <div onClick={() => navigate("/")} className='againButton'>
                    <div className='buttonstart'>Go To Main</div> 
                </div>
                <Sharerank2/>
            </div>
        </div>
    );
};

export default Rankpage;