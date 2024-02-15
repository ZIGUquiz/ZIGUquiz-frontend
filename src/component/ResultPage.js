import React, { useState } from 'react';
import Navbar from './Navbar';
import happy from './img/happy.png';
import satisfied from './img/satisfied.png';
import awkward from './img/awkward.png';
import sick from './img/sick.png';
import Sharerank from './Sharerank';
import Project from './Project';
import { Link } from 'react-router-dom';

function setTest(correctCount) {
  let mc = [
    { test: 'The Earth is sick', content: "You need to care a little more about the environment. Study a little more and participate in the test again. Help the Earth. Don't let it get sicker!", picture: <img src={sick} /> },
    { test: 'The Earth feels awkward', content: "The Earth is upset. It doesn't seem to like the result. Please study a little more and participate in the test again to make the Earth happy!", picture: <img src={awkward} /> },
    { test: 'The Earth is satisfied', content: "The Earth is delighted with your interest in the environment! If you get a perfect score, I think the Earth will be even happier. Shall we try it again?", picture: <img src={satisfied} /> },
    { test: 'The Earth is happy', content: "The Earth's heart has warmed! If you continue to care for the Earth, you'll be able to meet a healthier Earth.", picture: <img src={happy} /> }
  ];

  let result;

  if (correctCount === 10) {
    result = mc.find(data => data.test === 'The Earth is happy');
  } else if (correctCount >= 7) {
    result = mc.find(data => data.test === 'The Earth is satisfied');
  } else if (correctCount >= 4) {
    result = mc.find(data => data.test === 'The Earth feels awkward');
  } else {
    result = mc.find(data => data.test === 'The Earth is sick');
  }

  return result;
}

const ResultPage = ({ setPage, correctCount }) => {
    const result = setTest(correctCount);
    const [showProjectPage, setShowProjectPage] = useState(false);
  
    const handleProjectClick = () => {
      setShowProjectPage(!showProjectPage);
    };
  
    return (
      <div className='startPageLayout'>
        <Navbar />
        {showProjectPage ? (
          <Project />
        ) : (
          <>
            <div className='mainbox'>
              <div className='picture'>{result.picture}</div>
              <div className='result1'>{result.test}</div>
              <div className='result2'>{result.content}</div>
            </div>
            <div onClick={() => window.location.reload()} className='startButton'>
              <div className='buttonstart'>TEST AGAIN!</div>
            </div>
            <div className='aboutpro' onClick={handleProjectClick}>
              about our project
            </div>
            <Sharerank />
          </>
        )}
      </div>
    );
  };
  
  export default ResultPage;