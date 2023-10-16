import React, { useState } from "react";

const App = () => {
  const time = new Date().toLocaleTimeString();
  // const state = useState();
  const[ctime, setTime] = useState(time);

  const UpdateTime = () => {
    let newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  return(
    <>
        <h1>{time}</h1>
        <button onClick={UpdateTime}>get Time</button>
    </>
  );
};

export default App;