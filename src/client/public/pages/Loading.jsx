import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // AI 분석이 완료되면 LocationAnalysis 페이지로 이동
    const timer = setTimeout(() => {
      navigate('/analysis');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <h2>AI가 장소를 분석중입니다...</h2>
      <p>잠시만 기다려주세요</p>
    </div>
  );
};

export default Loading;