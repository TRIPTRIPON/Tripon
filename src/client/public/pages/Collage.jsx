import React from 'react';
import CollageGrid from '../components/CollageGrid';

const Collage = () => {
  const handleSave = () => {
    // 콜라주 저장 로직
  };

  return (
    <div className="collage-container">
      <h2>여행 콜라주</h2>
      <CollageGrid />
      <div className="collage-controls">
        <button onClick={handleSave}>저장하기</button>
        <button>공유하기</button>
      </div>
    </div>
  );
};

export default Collage;