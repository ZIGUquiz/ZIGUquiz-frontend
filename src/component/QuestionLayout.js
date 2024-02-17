import React from 'react';
import questionList from './questionList';
import QNavbar from './QNavbar';

const QuestionLayout = ({ page,handleCkAnswer }) => {
  return (
    <div className='questionLayout'>
        <QNavbar/>
      <div className='testTitle'>
        <div>{`${page}/${questionList.length}`}</div>
      </div>
        {questionList.map((val, idx) => (
        <div className='questionList' style={{ display: page === idx + 1 ? 'flex' : 'none' }} key={idx}>
            <div className='questionItemLayout'>
                <div className='mainbox'>
                    <div className='chatListLayout'>
                        {val.q.map((qval, qidx) => (
                            <div key={qidx} className='question'>
                                <div className='memo'>{qval}</div>
                            </div>
                        ))}
                    </div>

                    <div className='answerItemLayout'>
                        {val.a.map((aval, aidx) => (
                        <div key={aidx} className='answerBox' onClick={() => handleCkAnswer(aval.type, idx)}>
                            {aval.text}
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      ))}
    </div>
  );
};

export default QuestionLayout;