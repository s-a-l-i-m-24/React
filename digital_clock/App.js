import React, { useState } from "react";

const App = () => {
  const time = new Date().toLocaleTimeString();
  const[ctime, setTime] = useState(time);

  const UpdateTime = () => {
    let newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  };

  setInterval(UpdateTime, 1000);
  return(
    <>
        <h1>{time}</h1>
    </>
  );
};

export default App;