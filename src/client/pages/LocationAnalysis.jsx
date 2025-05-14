import React from 'react';
import { useNavigate } from 'react-router-dom';
import AnalysisCard from '../components/AnalysisCard';

const LocationAnalysis = () => {
  const navigate = useNavigate();

  const handleFeedback = (isCorrect) => {
    navigate('/feedback', { state: { isCorrect } });
  };

  return (
    <div className="analysis-container">
      <h2>장소 분석 결과</h2>
      <div className="analysis-results">
        <AnalysisCard 
          location="도쿄 시부야"
          confidence={85}
          onFeedback={handleFeedback}
        />
        {/* 추가 분석 결과 카드들 */}
      </div>
    </div>
  );
};

export default LocationAnalysis;