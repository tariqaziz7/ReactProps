// ChildComponent1.jsx
import React, { useState } from 'react';

const ChildComponent1 = ({ onDataFromChild1 }) => {
  const [dataToSend, setDataToSend] = useState('Hello from ChildComponent1');

  const sendDataToParent = () => {
    // Call the function passed from the parent to send data
    onDataFromChild1(dataToSend);
  };

  return (
    <div>
      <p>Data from ChildComponent1: {dataToSend}</p>
      <button onClick={sendDataToParent}>Send Data to ChildComponent2</button>
    </div>
  );
};

export default ChildComponent1;
