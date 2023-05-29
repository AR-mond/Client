import React from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

function Loading() {
  return (
    <div className="contentWrap">
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <BeatLoader
          color="#FFB21D"
          height={15}
          width={5}
          radius={2}
          margin={2}
        />
      </div>
    </div>
  );
}

export default Loading;
