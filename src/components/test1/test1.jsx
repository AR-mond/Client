import React from 'react';
import styles from './test1.module.css';

const Test1 = () => {
  // useEffect(() => {
  //   const scriptModelView = document.createElement('script');
  //   scriptModelView.type = 'module';
  //   scriptModelView.id = 'ModelViewr';
  //   scriptModelView.src =
  //     'https://unpkg.com/@google/model-viewer/dist/model-viewer.js';
  //   document.body.appendChild(scriptModelView);
  // }, []);
  return (
    <div className={styles.container}>
      <model-viewer
        alt="sample"
        // ar-rotate
        camera-controls
        touch-action="pan-y"
        auto-rotate
        src="3d/sample2.gltf"
        ar
        // stage-light-intensity="3"
        // environment-intensity="2"
      ></model-viewer>
    </div>
  );
};

export default Test1;
