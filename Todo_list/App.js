import React, { useState } from 'react';
import TodoLists from './TodoLists';

const App = () => {
  const [inputList, setInputList] = useState("");

  const [items, setItems] = useState([]);   //2

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {        //2
    setItems( (oldItems) => {
      return[...oldItems, inputList];
    });
    setInputList("");                  // input field empity
  };

  const deleteItem = (id) => {
    // console.log("Deleted Items");
    setItems((oldItems) => {
      return oldItems.filter((errElem, index) => {
        return index !== id;
      });
    });
}

  return( 
    <>
        <div className='main_div'>
          <div className='center_div'>
            <br />
            <h1> ToDo List </h1>
            <br />
            <input type='text' placeholder='Add a Items' onChange={itemEvent} value={inputList}/>
            <button onClick={listOfItems}>+</button>

            <ol>
              {/* <li>{inputList} </li> */}
              {items.map( (itemsval, index) => {          //2
                return < TodoLists 
                key={index} 
                id = {index} 
                text = {itemsval} 
                onSelect = {deleteItem}
                />;
              })}
            </ol>
          </div>
        </div>
    </>
  )
}

export default App;