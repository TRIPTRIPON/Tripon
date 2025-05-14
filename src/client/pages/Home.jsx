import React from 'react';
import { useNavigate } from 'react-router-dom';
import UploadButton from '../components/UploadButton';

const styles = {
  homeContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    minHeight: '100vh'
  },
  welcomeHeader: {
    textAlign: 'center',
    marginBottom: '3rem'
  },
  welcomeTitle: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '1rem'
  },
  welcomeText: {
    fontSize: '1.2rem',
    color: '#666'
  },
  mainContent: {
    textAlign: 'center',
    maxWidth: '600px'
  },
  mainTitle: {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '1rem'
  },
  mainText: {
    fontSize: '1.1rem',
    color: '#666',
    marginBottom: '2rem'
  }
};

const Home = () => {
  const navigate = useNavigate();

  const handleUpload = (files) => {
    // 파일 업로드 처리 후 Resize 페이지로 이동
    navigate('/resize', { state: { files } });
  };

  return (
    <div style={styles.homeContainer}>
      <header style={styles.welcomeHeader}>
        <h1 style={styles.welcomeTitle}>Tripon에 오신 것을 환영합니다!</h1>
        <p style={styles.welcomeText}>여행 계획을 쉽게 만들어보세요.</p>
      </header>
      <div style={styles.mainContent}>
        <h2 style={styles.mainTitle}>여행 사진으로 장소 맞추기</h2>
        <p style={styles.mainText}>여행 사진을 업로드하고 AI가 장소를 맞춰보세요!</p>
        <UploadButton onUpload={handleUpload} />
      </div>
    </div>
  );
};

export default Home;