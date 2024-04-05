import React, { useState } from 'react';
import './fifthpage.css'; // Import CSS file for styling


export default function fifthpage({ onPrevStep, onNextStep }) {
  const handleContinueClick = () => {
      onNextStep();
  };
  return (
    <div className="fifth-page-container">
    <div className="fifth-progress-container">
        {onPrevStep && <button className="back-button" onClick={onPrevStep}>{'<'}</button>}
        <div className="progress-bar">
            <div className="progress-bar-fill" style={{ width: '100%' }}></div>
        </div>
    </div>
    <div className="fifth-video-container">
        <video className="fifth-video" autoPlay loop muted playsInline>
  <source src="https://brilliant.org/site_media/version-0/images/nux-animations/cheerleader-blorb.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
        <div className="text-container">
            <h2 className="big-text">You’re on your way!</h2>
            <div className="stars">★★★★★</div>
            <p className="small-text">"Through its engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real world problem solving situations."</p>
            <br />
            <p>- Jacob S.</p>
        </div>
    </div>
    <button className="continueButton" onClick={handleContinueClick} >Continue</button>
    </div>
  );
}