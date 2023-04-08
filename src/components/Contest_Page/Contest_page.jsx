import React, { useState } from 'react';
import './contest_page.css';
import background from '../../assets/background.png';
import Contest_home from './Contest_home';
import Submit from './Submit';
import Leaderboard from './Leaderboard';

const Contest_page = () => {
  const [activeButton, setActiveButton] = useState('home');
  
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  }

  return (
    <div className='main-contest-page'>
      <div className='main-contest-page-switch'>
        <button
          className={`main-contest-home ${activeButton === 'home' ? 'active' : ''}`}
          onClick={() => handleButtonClick('home')}
        >
          Home
        </button> 
        <button
          className={`main-contest-submit ${activeButton === 'submit' ? 'active' : ''}`}
          onClick={() => handleButtonClick('submit')}
        >
          Submit
        </button>
        <button
          className={`main-contest-leaderboard ${activeButton === 'leaderboard' ? 'active' : ''}`}
          onClick={() => handleButtonClick('leaderboard')}
        >
          LeaderBoard
        </button> 
      </div>

        {/* make routes here */}
        <div className='main-contest-page-content'>
            <Leaderboard/>
        </div>



      <div className='main-contest-page-image'>
        <img src={background} alt="Background" />
      </div>
    </div>
  )
}

export default Contest_page;
