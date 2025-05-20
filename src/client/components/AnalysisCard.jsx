// AnalysisCard.jsx

import React from 'react';
import './AnalysisCard.css'; // 스타일 따로 만들기

export default function AnalysisCard({ result }) {
  const [title, ...descLines] = result.split('\n');
  const desc = descLines.join('\n');

  return (
    <div className="analysis-card">
      <h2>{title.trim()}</h2>
      <p>{desc.trim()}</p>
    </div>
  );
}