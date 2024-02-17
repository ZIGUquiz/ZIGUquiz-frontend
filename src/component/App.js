// import { useState, useEffect, useRef } from 'react';
import './App.css';
// import questionList from './questionList';
import StartPage from './StartPage';
// import QuestionLayout from './QuestionLayout';
// import ResultPage from './ResultPage';
import Country from './Country';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main';
import LoginPage from './LoginPage';
import QuestionLayout from './QuestionLayout';


function App() {
  return(
    <Router>
          <Routes>
            <Route path="/" element={
              <Main></Main>
            }/>
            <Route path="/main" element={
              <Main></Main>
            }/>
            <Route path="loginpage" element={
              <LoginPage></LoginPage>
            }/>
            <Route path="/startpage" element={
              <StartPage></StartPage>
            }/>
            <Route path="/country" element={
              <Country></Country>
            }/>
            <Route path="/loginpage" element={
              <LoginPage></LoginPage>
            }/>
            <Route path="/questionlayout" element={
              <QuestionLayout></QuestionLayout>
            }/>
          </Routes>
          
        </Router>  
        );
}

export default App;