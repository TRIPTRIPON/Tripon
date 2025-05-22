import React, { useState } from 'react';
import CollageGrid from '../components/CollageGrid';
import '../styles/Collage.css';
import Indicator from '../components/Indicator';
import html2canvas from 'html2canvas';

const Collage = () => {
  const [page, setPage] = useState(0);
  const totalPages = 2;

  const handleSave = () => {
    const collageElement = document.querySelector('.collage-container');

    html2canvas(collageElement).then(canvas => {
      const link = document.createElement('a');
      link.download = 'tripon_collage.png';
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  const handleShare = async () => {
    const canvas = await html2canvas(document.querySelector('.collage-container'));
    canvas.toBlob(async (blob) => {
      const file = new File([blob], 'tripon.png', { type: 'image/png' });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: 'TRIP:ON 여행 콜라주',
          text: '내 여행 콜라주를 확인해봐!',
        });
      } else {
        alert('공유를 지원하지 않는 브라우저입니다.');
      }
    });
  };

  return (
    <div className="collage-container">
      <img src="/asset/icon_width.png" alt="logo" className="logo" />
      <div className="collage-wrapper">
        <CollageGrid page={page} />
        <Indicator total={totalPages} current={page} />
      </div>
      <div className="collage-controls">
        <button onClick={handleSave}>⬇️</button>
        <button>
          <img src="/asset/kakao.png" alt="kakao" className='kakao' />
        </button>
        <button>
          <img src="/asset/instagram.png" alt="instagram" className='instagram' />
        </button>
      </div>
    </div>
  );
};

export default Collage;
