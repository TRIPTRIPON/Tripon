import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Autocomplete from 'react-google-autocomplete';
import ImageCountModal from './modal';

const Feedback = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isCorrect = location.state?.isCorrect;
  const [showModal, setShowModal] = useState(false);
  const [selectedCity, setSelectedCity] = useState('');

  const handleContinue = () => {
    setShowModal(true);
  };

  const handlePlaceSelect = (place) => {
    if (place) {
      setSelectedCity(place.formatted_address);
    }
  };

  return (
    <div className="feedback-container">
      {showModal && <ImageCountModal onClose={() => setShowModal(false)} />}
      <h2>피드백 감사합니다!</h2>
      <p>
        {isCorrect 
          ? "정확한 분석이었네요!" 
          : "다음에는 더 정확하게 맞춰보겠습니다."}
      </p>
      {!isCorrect && (
        <div className="city-input-container">
          <p>정확한 도시 이름을 입력해주세요:</p>
          <Autocomplete
            apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
            onPlaceSelected={handlePlaceSelect}
            options={{
              types: ['(cities)'],
              fields: ['formatted_address', 'geometry', 'name']
            }}
            style={{
              width: '100%',
              height: '40px',
              padding: '0 12px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              marginBottom: '20px'
            }}
            placeholder="도시 이름을 입력하세요"
          />
        </div>
      )}
      <button onClick={handleContinue}>콜라주 만들기</button>
    </div>
  );
};

export default Feedback;