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
    <model-viewer
      className={styles.model}
      src="3d/sample2.gltf"
      alt="sample"
      ar
      ar-rotate
      auto-rotate
      camera-controls
      // stage-light-intensity="3"
      // environment-intensity="2"
    ></model-viewer>
  );
};

export default Test1;
