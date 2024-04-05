// LoadingPage.js
import React from 'react';
import './loadingpage.css'; // Import CSS file for styling

export default function LoadingPage() {
  return (
    <div className="loading-page-container">
      <div className="loading-spinner"></div>
      <p className="loading-text">Finding learning path recommendations for you based on your responses</p>
    </div>
  );
}
