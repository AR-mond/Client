import React, { useState } from 'react';
import ArHeader from '../ar_header/ar_header';
import ArMain from '../ar_main/ar_main';
import styles from './ar.module.css';

const Ar = () => {
  const [toggleState, setToggleState] = useState(false);

  const handleToggle = state => {
    setToggleState(state);
  };

  return (
    <>
      <ArHeader
        modelName={'Chair'}
        designerName={'Designer'}
        toggleState={handleToggle}
      />
      <ArMain toggleState={toggleState} />
    </>
  );
};

export default Ar;
