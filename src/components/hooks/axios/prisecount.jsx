
import React, { useState } from 'react'


const PriseCount = () => {
    
    const [count, setCount] = useState(1);
const [price, setPrice]=useState(200)

const handlePlus = () => {
    setCount(count+1);
    if (count + 1) {
        setPrice(price + 200);
      }
  };
  
  const handleMinus = () => {
   setCount(count-1 || count >0);
   if (count - 1 ) {
    setPrice(price - 200);
  }
  };
  const handleReset = () => {
    setCount(1);
    setPrice(200);
  };

  return (
    <div style={{border:"1px solid black"}}>
        <div style={{display:"flex"}}>
           
           <div> <button onClick={handleMinus}> - </button></div>
        
        <div>
            {count}
            </div>
        
        <div> <button onClick={handlePlus}> + </button></div>
        
        <div> <button onClick={handleReset}>RESET</button></div>
        </div>

        <div> <h4>Narx</h4>
        <p>${price}</p></div>
    </div>
  )
}

export default PriseCount