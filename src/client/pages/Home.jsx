import React, { useState } from 'react';

const TripOnPage = () => {
  const [files, setFiles] = useState([]);

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '1.5rem',
      maxWidth: '450px',
      margin: '0 auto',
      height: '100vh',
      fontFamily: '"Noto Sans KR", sans-serif'
    },
    titleContainer: {
      textAlign: 'center',
      marginBottom: '2rem',
      width: '100%'
    },
    titleHighlight: {
      color: '#888',
      fontSize: '1.1rem',
      marginBottom: '0.5rem'
    },
    titleQuestion: {
      color: '#333',
      fontSize: '1.5rem',
      fontWeight: '700',
      margin: '0'
    },
    uploadContainer: {
      width: '100%',
      marginBottom: '2rem'
    },
    uploadCard: {
      backgroundColor: '#8CD3E8',
      borderRadius: '12px',
      height: '30rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    },
    uploadPlaceholder: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      cursor: 'pointer'
    },
    plusIcon: {
      width: '5rem',
      height: '5rem',
      backgroundColor: 'white',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '24px',
      color: '#8CD3E8',
      marginBottom: '1rem'
    },
    uploadText: {
      color: 'white',
      fontSize: '1rem',
      marginBottom: '0.3rem'
    },
    uploadLimit: {
      color: 'rgba(255, 255, 255, 0.8)',
      fontSize: '0.9rem',
      margin:'0'
    },
    previewContainer: {
      width: '100%',
      height: '100%'
    },
    imagePreview: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    instructionContainer: {
      textAlign: 'center',
      marginBottom: '2rem'
    },
    instructionText: {
      color: '#666',
      fontSize: '1rem',
      lineHeight: '1.5'
    },
    buttonContainer: {
      display: 'flex',
      width: '100%',
      gap: '1rem'
    },
    primaryButton: {
      flex: '1',
      backgroundColor: '#039BE5',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      padding: '1rem',
      fontSize: '1rem',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    },
    secondaryButton: {
      flex: '1',
      backgroundColor: 'white',
      color: '#666',
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '1rem',
      fontSize: '1rem',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    }
  };

  const handleAddPhoto = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.multiple = false;
    fileInput.onchange = (e) => {
      if (e.target.files.length > 0) {
        setFiles(Array.from(e.target.files));
      }
    };
    fileInput.click();
  };

  const handleReset = () => {
    setFiles([]);
  };

  const handleConfirm = () => {
    // 사진 처리 후 resize 페이지로
  };

  return (
    <div style={styles.container}>
      <div style={styles.titleContainer}>
        <p style={styles.titleHighlight}>✨ 당신의 여행 사진 속엔</p>
        <p style={styles.titleQuestion}>어떤 성격이 숨어있을까요?</p>
      </div>
      
      <div style={styles.uploadContainer}>
        <div style={styles.uploadCard}>
          {files.length === 0 ? (
            <div style={styles.uploadPlaceholder} onClick={handleAddPhoto}>
              <div style={styles.plusIcon}>+</div>
              <p style={styles.uploadText}>여행사진을 1장 선택해주세요</p>
              <p style={styles.uploadLimit}>(3:4 권장)</p>
            </div>
          ) : (
            <div style={styles.previewContainer}>
              <img src={URL.createObjectURL(files[0])} alt="Preview" style={styles.imagePreview} />
            </div>
          )}
        </div>
      </div>
      
      <div style={styles.instructionContainer}>
        <p style={styles.instructionText}>
          AI가 사진 속 장소를 추측하고,
          <br />
          당신만의 여행 캐릭터까지 분석해드려요.
        </p>
      </div>
      
      <div style={styles.buttonContainer}>
        <button style={styles.primaryButton} onClick={handleReset}>
          다시 선택
        </button>
        <button style={styles.secondaryButton} onClick={handleConfirm}>
          확인
        </button>
      </div>
    </div>
  );
};

export default TripOnPage;