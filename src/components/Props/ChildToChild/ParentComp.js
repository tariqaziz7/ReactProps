// ParentComponent.jsx
import React, { useState } from 'react';
import ChildComponent1 from './Child1';
import ChildComponent2 from './Child2';

const ParentComp = () => {
  const [dataFromChild1, setDataFromChild1] = useState(null);

  const handleDataFromChild1 = (data) => {
    // This function will be passed as a prop to ChildComponent1
    // and will be called when ChildComponent1 sends data
    setDataFromChild1(data);
  };

  return (
    <div>
      <ChildComponent1 onDataFromChild1={handleDataFromChild1} />
      <ChildComponent2 dataFromChild1={dataFromChild1} />
    </div>
  );
};

export default ParentComp;
