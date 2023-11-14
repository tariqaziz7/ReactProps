// ChildComponent.js

import React, { useState } from 'react';

const ChildComponent = (props) => {
  const [dataToSend, setDataToSend] = useState('Hello from Child!');

  const sendDataToParent = () => {
    props.onDataFromChild(dataToSend);
  };

  return (
    <div>
      <button onClick={sendDataToParent}>Send Data to Parent</button>
    </div>
  );
};

export default ChildComponent;
