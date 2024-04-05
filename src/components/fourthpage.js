// FirstPage.js
import React, { useState } from 'react';
import './fourthpage.css'; // Import CSS file for styling

export default function FourthPage({ onPrevStep, onNextStep }) {
  
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
    <div className="fourth-page-container">
      <div className="fourth-progress-container">
        {onPrevStep && <button className="back-button" onClick={onPrevStep}>{'<'}</button>}
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: '80%' }}></div>
      </div>
      </div>
      
      <div className="fourth-content">
        <p className="big-text">What is your math comfort level?</p>
        <p className="small-text">Choose the highest level you feel confident in — you can always adjust later.</p>
      </div>
      <div className="options-container">
        <div className={`option-box ${selectedOption === 'arithmetic' ? 'selected' : ''}`} onClick={() => handleOptionSelect('arithmetic')}>
          <div className="ButtonCard">
            <span className="button-icon img">
              <img src="https://ds055uzetaobb.cloudfront.net/answer-images/arithmetic-pC3bWR.png" alt="Arithmetic"/>
            </span>
            <div className="ButtonText">Arithmetic</div>
            <div className="description">Introductory</div>
          </div>
        </div>
        <div className={`option-box ${selectedOption === 'basic_algebra' ? 'selected' : ''}`} onClick={() => handleOptionSelect('basic_algebra')}>
          <div className="ButtonCard">
            <span className="button-icon img">
              <img src="https://assets-modified.embeddables.com/UkI2pO4KD0xXQLHkN1GG%2Fnumber_08117739254383571.png" alt="Basic Algebra"/>
            </span>
            <div className="ButtonText">Basic Algebra</div>
            <div className="description">Foundational</div>
          </div>
        </div>
        <div className={`option-box ${selectedOption === 'intermediate_algebra' ? 'selected' : ''}`} onClick={() => handleOptionSelect('intermediate_algebra')}>
          <div className="ButtonCard">
            <span className="button-icon img">
              <img src="https://ds055uzetaobb.cloudfront.net/answer-images/intermediate-algebra-HlLTYk.png" alt="Intermediate Algebra"/>
            </span>
            <div className="ButtonText">Intermediate Algebra</div>
            <div className="description">Intermediate</div>
          </div>
        </div>
        <div className={`option-box ${selectedOption === 'calculus' ? 'selected' : ''}`} onClick={() => handleOptionSelect('calculus')}>
          <div className="ButtonCard">
            <span className="button-icon img">
              <img src="https://ds055uzetaobb.cloudfront.net/answer-images/Frame_2-qvqAR5.png" alt="Calculus"/>
            </span>
            <div className="ButtonText">Calculus</div>
            <div className="description">Advanced</div>
          </div>
        </div>
      </div>
      <br />
      <button className="continueButton" onClick={handleContinueClick} disabled={!selectedOption}>Continue</button>
    </div>
  );
}