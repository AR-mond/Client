import React, { useState } from 'react';
import ArHeader from '../components/ar_header/ar_header';
import ArMain from '../components/ar_main/ar_main';

const Ar = () => {
  const [toggleState, setToggleState] = useState(false);

  const handleToggle = state => {
    setToggleState(state);
  };

  return (
    <>
      <ArHeader
        modelName={'Bear'}
        designerName={'Designer'}
        toggleState={toggleState}
        handleToggle={handleToggle}
      />
      <ArMain toggleState={toggleState} />
    </>
  );
};

export default Ar;
