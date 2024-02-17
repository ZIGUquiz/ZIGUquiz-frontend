import { useState, useEffect, useRef } from 'react';
import './App.css';
import questionList from './questionList';
import StartPage from './StartPage';
import QuestionLayout from './QuestionLayout';
import ResultPage from './ResultPage';


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
      console.log('결과보기');
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