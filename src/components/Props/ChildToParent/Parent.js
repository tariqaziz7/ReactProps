// ParentComponent.js

import React, { useState } from 'react';
import ChildComponent from './Child';

const ParentComponent = () => {
  const [childData, setChildData] = useState(null);

  const handleChildData = (dataFromChild) => {
    setChildData(dataFromChild);
  };

  return (
    <div>
      <h1>Data from Child: {childData}</h1>
      <ChildComponent onDataFromChild={handleChildData} />
    </div>
  );
};

export default ParentComponent;
