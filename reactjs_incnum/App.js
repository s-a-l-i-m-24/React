import React, { useState } from "react";

const App = () => {
  const state = useState();
  const[count, setCount] = useState(0);

  const incNum = () => {
    setCount(count + 1);
  }
  return(
    <>
        <h1>{count}</h1>
        <button onClick={incNum}>Click Me</button>
    </>
  );
};

export default App;