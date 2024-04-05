// FinalPage.js
import React from 'react';
import './finalpage.css'; // Import CSS file for styling

export default function FinalPage() {
  return (
    <div className="final-page-container">
      <h2 className="big-text">Learning paths based on your answers</h2>
      <p className="small-text">Choose one to get started. You can switch anytime.</p>
      <div className="final-option-boxes">
        {/* First option box with "Popular" tag */}
        <div className="final-option-box">
          <div className="final-popular-tag">MOST POPULAR</div>
          
          <p><strong>Foundation Math</strong> Build your foundational skills in algebra, geometry, and probability.</p>
          <img src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Pre-Algebra_puzzles-A75iXn.png" alt="Foundation Math" />
        </div>

        {/* Second option box */}
        <div className="final-option-box">
          
          <p> <strong>Mathematical Thinking</strong> Build your foundational skills in algebra, geometry, and probability.</p>
          <img src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Pre-Algebra_puzzles-A75iXn.png" alt="Mathematical Thinking" />
        </div>
      </div>
    </div>
  );
}
