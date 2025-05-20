import React from 'react';
import { useNavigate } from 'react-router-dom';

const LocationAnalysis = ({ imageUrl }) => {
  const navigate = useNavigate();

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '1.5rem',
      maxWidth: '450px',
      margin: '0 auto',
      height: '100vh',
      fontFamily: '"Noto Sans KR", sans-serif',
      backgroundColor: '#ffffff'
    },
    imageCard: {
      width: '100%',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      marginBottom: '1.5rem',
      aspectRatio: '3/4',
      backgroundColor: '#000000',
      position: 'relative'
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover', 
      display: 'block'
    },
    resultText: {
      textAlign: 'center',
      marginBottom: '2rem',
      width: '100%'
    },
    smallText: {
      fontSize: '0.9rem',
      color: '#666',
      marginBottom: '0.5rem'
    },
    locationText: {
      fontSize: '1.3rem',
      fontWeight: 'bold',
      color: '#333'
    },
    highlightText: {
      color: '#000',
      fontWeight: 'bold'
    },
    primaryButton: {
      width: '100%',
      backgroundColor: '#03A9F4',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      padding: '1rem',
      fontSize: '1rem',
      fontWeight: '500',
      cursor: 'pointer',
      marginBottom: '1rem',
      textAlign: 'center'
    },
    secondaryButton: {
      width: '100%',
      backgroundColor: 'white',
      color: '#666',
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '1rem',
      fontSize: '1rem',
      fontWeight: '500',
      cursor: 'pointer',
      textAlign: 'center'
    }
  };

  const handleCorrect = () => {
    navigate('/feedback', { state: { isCorrect: true } });
  };

  const handleIncorrect = () => {
    navigate('/feedback', { state: { isCorrect: false } });
  };
  
  return (
    <div style={styles.container}>
      <div style={styles.imageCard}>
        {imageUrl && (
          <img 
            src={imageUrl} 
            alt="여행 사진" 
            style={styles.image}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        )}
      </div>
      
      <div style={styles.resultText}>
        <p style={styles.smallText}>이 나라는 <span style={styles.highlightText}>대한민국</span> 입니다.</p>
        <p style={styles.locationText}>그 중에서도 제주도 같아요!</p>
      </div>
      
      <button 
        style={styles.primaryButton}
        onClick={handleCorrect}
      >
        맞췄어요!
      </button>
      
      <button 
        style={styles.secondaryButton}
        onClick={handleIncorrect}
      >
        아쉽지만 아니에요
      </button>
    </div>
  );
};

export default LocationAnalysis;