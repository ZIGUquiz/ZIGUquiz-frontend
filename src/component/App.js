import { useState, useEffect, useRef } from 'react';
import './App.css';
import questionList from './questionList';
import StartPage from './StartPage';
import QuestionLayout from './QuestionLayout';
import ResultPage from './ResultPage';
import axios from 'axios';
import Cookies from 'js-cookie'
// axios.defaults.withCredentials = true; // withCredentials 전역 설정

function App() {
  const setVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  useEffect(() => {
    setVh();

    function onResize() {
      setVh();
    }

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const [page, setPage] = useState(0);

  const [testList, setTestList] = useState([
    { name: 'correct', count: 0 },
    { name: 'worng', count: 0 },
  ]);

  const handleCkAnswer = (type, idx) => {
    let ls = [...testList]; // testList 복사하여 새 배열 생성
    for (let i = 0; i < ls.length; i++) {
      if (ls[i].name === type) {
        ls[i].count = ls[i].count + 1;
      }
    }

    setTestList(ls);
    setPage(page + 1);

    if (idx + 1 === questionList.length) {
      // @@@@@@배포 전에 주석 해제 필수 @@@@@@@@@@@@@
      // if (Cookies.get('accessToken')) {
      // axios.patch('http://35.208.142.216:8080/quiz/update-rank', {  //맞춘 정답 전송(유저 쿠키 생성 꼭 되어있어야해), 로컬에선 작동안하지만 배포시엔 동작하는 것 확인했음
      //       score : ls[0].count
      //   },
      //   { withCredentials: true } //쿠키 전송 필수
      //   )
      //   .then(response => {
      //     console.log(response.data);
      //   })
      // }
    }
  };

  const correctCount = testList.find((item) => item.name === 'correct').count;

  return (
    <div className="testlayout">
        {page === 0 ? (
          <StartPage setPage={setPage} />
        ) : page <= questionList.length ? (
          <QuestionLayout
            page={page}
            setPage={setPage}
            handleCkAnswer={handleCkAnswer}
          />
        ) : (
          <ResultPage setPage={setPage} correctCount={correctCount} />
        )}
    </div>
  );
}

export default App;