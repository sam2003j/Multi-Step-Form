// FirstPage.js
import React, { useState } from 'react';
import './firstpage.css'; 
export default function firstpage({ onNextStep }){
  // eslint-disable-next-line react-hooks/rules-of-hooks
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
    <div className="first-page-container">
      <div className="first-progress-container">
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: '20%' }}></div>
      </div>
      </div>
      <div className="content">
        <p className="big-text">Which describes you the best?</p>
        <p className="small-text">This will help you personalise your experience.</p>
      </div>
      <div className="options-container">
        <div className="option-box">
          <button onClick={() => handleOptionSelect('Student')} className={`option-button ${selectedOption === 'Student' ? 'selected' : ''}`}>
            <img src="https://assets-modified.embeddables.com/UkI2pO4KD0xXQLHkN1GG%2FLife-Stage%3DStudent_830823629321515.png" alt="Student" className="option-icon" />
            <p>Student or soon to be enrolled</p></button>
          <button onClick={() => handleOptionSelect('Professional')} className={`option-button ${selectedOption === 'Professional' ? 'selected' : ''}`}><img src="https://assets-modified.embeddables.com/UkI2pO4KD0xXQLHkN1GG%2FLife-Stage%3DProfessional_3183921264115743.png" alt="Professional" className="option-icon" />
          Professional pursuing a career</button>
          <button onClick={() => handleOptionSelect('Parent')} className={`option-button ${selectedOption === 'Parent' ? 'selected' : ''}`}> <img src="https://assets-modified.embeddables.com/UkI2pO4KD0xXQLHkN1GG%2FLife-Stage%3DParent_6858243195481246.png" alt="Parent" className="option-icon" /> 
          Parent of a school-age child</button>
          <button onClick={() => handleOptionSelect('Lifelong Learner')} className={`option-button ${selectedOption === 'Lifelong Learner' ? 'selected' : ''}`}> <img src="https://assets-modified.embeddables.com/UkI2pO4KD0xXQLHkN1GG%2FExport_Retired%20(1)_42157333845339884.png" alt="Learner" className="option-icon" /> 
          Lifelong Learner</button>
          <button onClick={() => handleOptionSelect('Teacher')} className={`option-button ${selectedOption === 'Teacher' ? 'selected' : ''}`}><img src="https://assets-modified.embeddables.com/UkI2pO4KD0xXQLHkN1GG%2FLife-Stage%3DTeacher_3477887921150866.png" alt="Teacher" className="option-icon" /> 
          Teacher</button>
          <button onClick={() => handleOptionSelect('Other')} className={`option-button ${selectedOption === 'Other' ? 'selected' : ''}`}> <img src="https://assets-modified.embeddables.com/UkI2pO4KD0xXQLHkN1GG%2FLife-Stage%3DOther_39497974702587735.png" alt="Other" className="option-icon" /> 
          Other</button>
        </div>
      </div>
      <button className="continueButton" onClick={handleContinueClick} disabled={!selectedOption}>Continue</button>

    </div>
  );
}