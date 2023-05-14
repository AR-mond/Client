import React, { useRef, useEffect } from 'react';
import styles from './plantviewer.module.css';

function PlantViewer() {
  const modelViewerVariantsRef = useRef(null);
  const selectRef = useRef(null);

  useEffect(() => {
    const modelViewerVariants = modelViewerVariantsRef.current;
    const select = selectRef.current;

    modelViewerVariants.addEventListener('load', () => {
      const names = modelViewerVariants.availableVariants;
      select.innerHTML = '';
      for (const name of names) {
        const option = document.createElement('option');
        option.value = name;
        option.textContent = name;
        select.appendChild(option);
      }
    });

    select.addEventListener('input', event => {
      modelViewerVariants.variantName =
        event.target.value === 'default' ? null : event.target.value;
    });
  }, []);

  return (
    <section className={styles.main}>
      <div className={styles.modelViewer}>
        <model-viewer
          ref={modelViewerVariantsRef}
          src="3d/plant.glb"
          camera-controls
          ar
          ar-modes="webxr scene-viewer quick-look"
          shadow-intensity="2"
          shadow-softness="0"
          autoplay
        >
          <div className={styles.controls}>
            <div>
              <h3>화분의 소재를 변경 해보세요~</h3>
              <select ref={selectRef}></select>
            </div>
          </div>
        </model-viewer>
      </div>
    </section>
  );
}

export default PlantViewer;
