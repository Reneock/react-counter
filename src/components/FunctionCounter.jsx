import React, {useState} from 'react';

function FunctionCounter (){
  const[count, setCount]=useState(0);
  const HandleIncrease=()=>{setCount(count + 1);};
  const HandleDecrease=()=>{setCount(count - 1);};

  return(
    <div className='box'>
      <h1>Function Component : {count}</h1>
      <button onClick={HandleIncrease}>Increase Count</button>
      <button onClick={HandleDecrease}><span>Decrease Count</span></button>
    </div>
  )
}

export default FunctionCounter