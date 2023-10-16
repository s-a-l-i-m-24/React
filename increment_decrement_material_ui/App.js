import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const TodoList = () => {
  const [num, setNum] = useState(0);

  const increment = () => {
    setNum(num + 1);
  }
  const decrement = () => {
    if(num > 0){
    setNum(num - 1);
    }else{
      alert('Zero Limit Reached');
      setNum(0)
    }
  }
  return(
    <>
      <div className="main_div">
        <div className="center_div">
        <h1> Increment And Decrement</h1>
          <h2> {num} </h2>
          <div className="btn_div">
            <button onClick={increment}>< AddIcon /></button>
            <button onClick={decrement}> < RemoveIcon /> </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default TodoList;