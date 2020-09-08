import React, { useReducer, useState } from 'react';
import { reducer, data } from './reducers/reducer';
import './App.css';

function App() {
  const [items, dispatch] = useReducer(reducer, data);
  const [value, setValue] = useState('');

  function handleSubmit(e) {
    e.preventDefault()
    dispatch({type: 'ADD_TODO', payload: value})
    setValue('')
  }
  function handleClear(e) {
    e.preventDefault();
    dispatch({type: 'CLEAR'})  
  }

  return (
    <div className="App">
      <ul>
        {items.length > 0 && items.map((item, index) => {
          return (
            <li
              className={item.completed && 'strikethrough'}
              key={item.id}
              onClick={() =>
                dispatch({type: 'MARK', payload: index})}      
            >
              {item.item}
            </li>
          )
        })} 
      </ul>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={e => setValue(e.target.value)} value={value}/>
      <button type='submit' >Add</button>
      <button onClick={e => handleClear(e)} >Clear</button>
    </form>
    </div>
  );
}

export default App;
