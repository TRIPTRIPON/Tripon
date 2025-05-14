import React from 'react';
import { useNavigate } from 'react-router-dom';
import UploadButton from '../components/UploadButton';

const Home = () => {
  const navigate = useNavigate();

  const handleUpload = (files) => {
    // 파일 업로드 처리 후 Resize 페이지로 이동
    navigate('/resize', { state: { files } });
  };

  return (
    <div className="home-container">
      <h1>여행 사진으로 장소 맞추기</h1>
      <p>여행 사진을 업로드하고 AI가 장소를 맞춰보세요!</p>
      <UploadButton onUpload={handleUpload} />
    </div>
  );
};

export default Home;