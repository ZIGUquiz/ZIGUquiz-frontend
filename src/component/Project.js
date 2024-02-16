import React from 'react';
import Navbar from './Navbar';
import Sharerank from './Sharerank';

const Project = ({ setPage }) => {
    return (
        <>
            <div className='startPageLayout'>
                <div className='startmainbox'>
                    <div className='maintext'>
                        <div className='ending'>
                            A lot of people say 10 years later,<br/>
                            100 years later 
                            The planet predicts that global warming will cause serious problems.<br/>
                            Most people are not aware of this seriousness.<br/>
                            You can evaluate how much you know about the environment through this project.<br/>
                            I hope it'll be an opportunity to share it<br/> with my friends
                            and put a little effort into protecting our planet and the environment
                        </div>
                    </div>
                </div>
                <div onClick={() => window.location.reload()} className='startButton'>
                    <div className='buttonstart'>TEST AGAIN!</div>
                </div>
                <Sharerank/>
            </div>
        </>
  );
};

export default Project;
