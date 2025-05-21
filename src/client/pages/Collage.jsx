import CollageGrid from '../components/CollageGrid';
import html2canvas from 'html2canvas';

const Collage = () => {

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
    const file = new File([blob], 'tripon_collage.png', { type: 'image/png' });

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
    <img src="/logo.png" alt="logo" className="logo" />
    <div className="collage-wrapper">
      <CollageGrid />
      <div className="indicator-dots">
        <div className="dot active" />
        <div className="dot" />
      </div>
    </div>
    <div className="collage-controls">
      <button onClick={handleSave}>⬇️</button>
      <button>📸</button>
      <button>😊</button>
    </div>
  </div>
);

}

export default Collage;