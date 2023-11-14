import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import ParentComponent from './components/Props/ChildToParent/Parent';
import Parent from './components/Props/ParentToChild/Parent';
import ParentComp from './components/Props/ChildToChild/ParentComp';

function App() {
  const [counter, setCounter] = useState(0);

  const handleCounter =(event) =>{
      // setCounter(counter+1);
      console.log(event.target.value,"setCounter");
      setCounter(event.target.value);
  }

  return (
    <div className="App">
      {/* <Header /> */}
      {/* <button onClick={handleCounter}>+</button> */}
      {/* <input type='text' onChange={(e)=>{handleCounter(e)}} />
      <p>{counter}</p> */}
      <ParentComponent />
      {/* <Parent /> */}
      {/* <ParentComp /> */}
    </div>
  );
}

export default App;
