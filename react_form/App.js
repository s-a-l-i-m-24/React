import React, { useState } from 'react';

const App = () => {
  const [fullName, setFullName] = useState({
    fname : '',
    lname: '',
    email: '',
    phone: '',
  });
 
  const onSubmits = (event) => {
    event.preventDefault();
    alert('Form Submitted Successfully')
  };

  const InputEvent = (event) => {    
    const {value, name} = event.target;

    setFullName((preValue) => {
      if(name === "fname"){
        return{
          fname: value,
          lname: preValue.lname,
          email: preValue.email,
          lname: preValue.phone,
        };
        }else if(name === "lname"){
          return{
            fname:preValue.fname,
            lname: value,
            email:preValue.email,
            phone:preValue.phone,
          };
        }else if(name === "email"){
          return{
            fname:preValue.fname,
            lname:preValue.lname,
            email: value,
            phone:preValue.phone,
          };
        }else if(name === "phone"){
          return{
            fname:preValue.fname,
            lname:preValue.lname,
            email:preValue.email,
            phone: value,
          };
        }
      }
    );
  };

  return(
    <>
    <div className='main_div'>
    <form onSubmit={onSubmits}>
    <div>
      <h1> Hello {fullName.fname} {fullName.lname} </h1>
      <p>{fullName.email}</p>
      <p>{fullName.phone}</p>
      <input type='text'
      placeholder='Enter Your FirstName' 
      name='fname'
      onChange={InputEvent}
      value={fullName.fname}
      autoComplete='off'
       />

       <input type='text'
      placeholder='Enter Your LastName' 
      name='lname'
      onChange={InputEvent}
      value={fullName.lname}
      autoComplete='off'
       />

<input type='email'
      placeholder='Enter Your Email' 
      name='email'
      onChange={InputEvent}
      value={fullName.email}
      autoComplete='off'
       />

<input type='number'
      placeholder='Enter Your Mobile Number' 
      name='phone'
      onChange={InputEvent}
      value={fullName.phone}
      autoComplete='off'
       />

      <button type='submit'>Click Me </button>
      </div>
      </form>
      </div>
    </>
  )
}

export default App;