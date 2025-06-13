// AnalysisCard.jsx

import React from 'react';
import './AnalysisCard.css';

function AnalysisCard({ title, description }) {
  return (
    <div className="result-card">
      <div className="result-heading">✨당신의 여행 사진 속엔 어떤 성격이 숨어있을까요?</div>
      <div className="result-description">{description}</div>
      <div className="result-title">{title}</div>
    </div>
  );
}

export default AnalysisCard;