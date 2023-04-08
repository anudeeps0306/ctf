import React from 'react'
import './contest_page.css'
import background from '../../assets/background.png';

export const Contest_page = () => {
  return (
    <div className='main-contest-page'>
        <div className='main-contest-page-switch'>
            <button>Home</button>
            <button>LeaderBoard</button>
        </div>
        <div className='main-contest-page-content'>
            <div className='main-contest-page-content-title'>
                <h1 className='author-name'>Anudeep Sanapala</h1>
                <h1 className='main-content-page-title'>Contest Title</h1>
                <p>We've been told it is possible to revolutionize the payment 
                    industry. We have not reinvented the wheel, we decided to
                     build upon it - successfully.
                </p>
            </div>

            <div>
                <button>Catch the Flag</button>
            </div>
        </div>
        <div className='main-contest-page-image'>
            <img src={background} alt="Background" />
        </div>
    </div>
  )
}
