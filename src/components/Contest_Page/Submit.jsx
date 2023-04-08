import React from 'react'
import './contest_page.css'

const Submit = () => {
  return (
    <div className="main-page-submit-form">
        <div className="main-page-submit-form-title">
            <h1 className='main-page-submit-heading'>Submit your Flag 🚩</h1>
        </div>
        <div className="main-page-submit-form-input">
            <input type="text" placeholder="Enter your flag here"/>
            <submit>Submit</submit>
        </div>
    </div>
  )
}

export default Submit