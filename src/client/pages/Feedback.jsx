import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Feedback = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isCorrect = location.state?.isCorrect;

  const handleContinue = () => {
    navigate('/collage');
  };

  return (
    <div className="feedback-container">
      <h2>피드백 감사합니다!</h2>
      <p>
        {isCorrect 
          ? "정확한 분석이었네요!" 
          : "다음에는 더 정확하게 맞춰보겠습니다."}
      </p>
      <button onClick={handleContinue}>콜라주 만들기</button>
    </div>
  );
};

export default Feedback;