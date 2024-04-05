import React, { useState } from 'react';
import './thirdpage.css'; // Import CSS file for styling

export default function thirdpage({ onPrevStep, onNextStep }) {
  const handleContinueClick = () => {
      onNextStep();
  };

  return (
    <div className="third-page-container">
    <div className="third-progress-container">
        {onPrevStep && <button className="back-button" onClick={onPrevStep}>{'<'}</button>}
        <div className="progress-bar">
            <div className="progress-bar-fill" style={{ width: '60%' }}></div>
        </div>
    </div>
    <div className="video-container">
        <video className="third-video" autoPlay loop muted playsInline>
            <source src="https://brilliant.org/site_media/version-0/images/nux-animations/pulley-blob.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div className="text-container">
            <h2 className="big-text">You're in the right place!</h2>
            <p className="small-text">Brilliant gets you hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in maths, science and computer science.</p>
        </div>
    </div>
    <button className="continueButton" onClick={handleContinueClick} >Continue</button>
</div>
  );
}