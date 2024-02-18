import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import Sharerank2 from './Sharerank2';

const Rankpage = ({ setPage }) => {

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
                    <div className='ranking'>
                    {rankings.map(({ countryName, count, rank }) => (
                        <div key={countryName} className={`rank-${rank}`}>
                            <img className='countryimg' src={`https://flagcdn.com/48x36/${countryName.toLowerCase()}.png`} alt={countryName} />
                            <span>{rank}. {count} people participate</span>
                        </div>
                    ))}
                    </div>
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