import React, { useState } from 'react';
import ArMain from '../components/ar_main/ar_main';
import Header from '../components/header/header';

const Ar = () => {
  const [toggleState, setToggleState] = useState(false);

  const handleToggle = state => {
    setToggleState(state);
  };

  return (
    <>
      <ArMain toggleState={toggleState} />
      <Header/>
    </>
  );
};

export default Ar;
