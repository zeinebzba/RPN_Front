import React, { useState } from "react";

import './App.css';


function App() {
  const [stackItems, setStackItems] = useState([]);
  const [number, setNumber] = useState();


  const  onPush =  () => {
    setStackItems((t) => [...t, number]);
  
   };
   const  onAdd =  () => {
    const  a=Number(stackItems.pop());
    const  b=Number(stackItems.pop());
   setStackItems((t) => [...t, a+b]);
   };
   const  onDiv =  (e) => {
    const  a=Number(stackItems.pop());
    const  b=Number(stackItems.pop());
   setStackItems((t) => [...t, a/b]);   };
   const  onSub=  (e) => {
    const  a=Number(stackItems.pop());
    const  b=Number(stackItems.pop());
   setStackItems((t) => [...t, a-b]);
   };
   const  onMul =  (e) => {
    const  a=Number(stackItems.pop());
    const  b=Number(stackItems.pop());
   setStackItems((t) => [...t, a*b]);
   };
   const  onClean =  (e) => {
    setStackItems([]);
   };
   
  return (
    <div>
      
      <div>
        <h2>My Stack</h2>
        {stackItems.map((p, index) => {
          return <p key={index}>{p}</p>;
        })}
      </div>
      <hr />
      <div>
      <input
    type='number'
    value={number}
    id="number"
    onChange={(e) => setNumber(e.target.value)}
    className='form-control'
     />
    <button onClick={onPush}>Push</button>
    </div>
    <div>
    <button onClick={onAdd}>+</button>
    </div>
    <div>
    <button onClick={onSub}>-</button>
    </div>
    <div>
    <button onClick={onMul}>*</button>
    </div>
    <div>
    <button onClick={onDiv}>/</button>
    </div>
    <div>
    <button style={{ background: "red" }} onClick={onClean}>Clean Stack</button>;
    </div>
   
    </div>
  );
};
export default App;
