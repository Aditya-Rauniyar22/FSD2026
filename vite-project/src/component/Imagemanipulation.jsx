import { useState } from 'react';
import cat from '../Images/cat.png';

function ImageManipulation() {
  const [imageHeight, setImageHeight] = useState(180);
  const [imageRotation, setImageRotation] = useState(0);
  const [leftMargin, setLeftMargin] = useState(10);
  const [rightMargin, setRightMargin] = useState(10);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
        padding: '16px',
        border: '2px solid #000',
        borderRadius: '12px',
        backgroundColor: '#f5f5f5'
      }}
    >
      <h2
        style={{
          color: 'blue',
          backgroundColor: 'black',
          padding: '8px',
          margin: 0
        }}
      >
        Image Manipulation
      </h2>

      <img
        src={cat}
        alt="Cat illustration"
        style={{
          height: `${imageHeight}px`,
          width: 'auto',
          marginLeft: `${leftMargin}px`,
          marginRight: `${rightMargin}px`,
          transform: `rotate(${imageRotation}deg)`,
          transition: 'all 0.2s ease-in-out'
        }}
      />

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
        <button onClick={() => setImageHeight((prev) => prev + 20)}>
          Increase Height
        </button>

        <button onClick={() => setImageRotation((prev) => prev + 30)}>
          Rotate Image
        </button>

        <button onClick={() => setLeftMargin((prev) => prev + 10)}>
          Move Right
        </button>

        <button onClick={() => setRightMargin((prev) => prev + 10)}>
          Move Left
        </button>
      </div>
    </div>
  );
}

export default ImageManipulation;