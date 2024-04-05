// FirstPage.js
import React, { useState } from 'react';
import './secondpage.css'; // Import CSS file for styling

export default function SecondPage({ onPrevStep, onNextStep }) {
  
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleContinueClick = () => {
    if (selectedOption) {
      onNextStep();
    } else {
      console.log('Please select an option before continuing');
    }
  };

  return (
    <div className="second-page-container">
      <div className="second-progress-container">
        {onPrevStep && <button className="back-button" onClick={onPrevStep}>{'<'}</button>}
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: '40%' }}></div>
      </div>
      </div>
      
      <div className="second-content">
        <p className="big-text">Which are you most interested in?</p>
        <p className="small-text">Chose just one. This will help us get you started (but won't limit your experience).</p>
      </div>
      <div className="options-container">
        <div className="option-box">
          <button onClick={() => handleOptionSelect('Student')} className={`option-button ${selectedOption === 'Student' ? 'selected' : ''}`}>
            <img src="https://assets-modified.embeddables.com/UkI2pO4KD0xXQLHkN1GG%2FGraph_39027869147636407.png" alt="Other" className="option-icon" />
            Learning specific skill to advance my career</button>
          <button onClick={() => handleOptionSelect('Professional')} className={`option-button ${selectedOption === 'Professional' ? 'selected' : ''}`}><img src="https://assets-modified.embeddables.com/UkI2pO4KD0xXQLHkN1GG%2FEarth_5370636675847549.png" alt="Other" className="option-icon" />Exploring new topics I'm interested in</button>
          <button onClick={() => handleOptionSelect('Parent')} className={`option-button ${selectedOption === 'Parent' ? 'selected' : ''}`}><img src="https://assets-modified.embeddables.com/UkI2pO4KD0xXQLHkN1GG%2FFrame%2020246_6536191683530861.png" alt="Other" className="option-icon" />Refreshing my math foundations</button>
          <button onClick={() => handleOptionSelect('Lifelong Learner')} className={`option-button ${selectedOption === 'Lifelong Learner' ? 'selected' : ''}`}><img src="	https://assets-modified.embeddables.com/UkI2pO4KD0xXQLHkN1GG%2FTarget_581125172755395.png" alt="Other" className="option-icon" />Exercising my brain to stay sharp</button>
          <button onClick={() => handleOptionSelect('Teacher')} className={`option-button ${selectedOption === 'Teacher' ? 'selected' : ''}`}><img src="https://assets-modified.embeddables.com/UkI2pO4KD0xXQLHkN1GG%2FLife-Stage%3DOther_39497974702587735.png" alt="Other" className="option-icon" />Something else</button>
        </div>
      </div>
      <button className="continueButton" onClick={handleContinueClick} disabled={!selectedOption}>Continue</button>
    </div>
  );
}