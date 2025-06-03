import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/store';

const CounterComponent = () => {

  const counter = useSelector(state => state.counter)
  const show = useSelector(state => state.showCounter)
  const dispatch = useDispatch();

  // const increment = () => dispatch({type : "increment"})
  // const decrement = () => dispatch({type : "decrement"})
  // const toggleCounter = () => dispatch({type : "toggle"})

  const increment = () => dispatch(counterActions.increment())
  const decrement = () => dispatch(counterActions.decrement())
  const toggleCounter = () => dispatch(counterActions.toggleCounter())

  const cardStyle = {
    width: '300px',
    margin: '100px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9'
  };

  const headerStyle = {
    marginBottom: '15px',
    fontSize: '24px',
    color: '#333'
  };

  const counterStyle = {
    fontSize: '20px',
    marginBottom: '20px',
    color: 'darkblue'
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  };

  return (
    <div style={cardStyle}>
      <h2 style={headerStyle}>Counter</h2>

      {show && (
        <div style={counterStyle}>
          Counter Value: {counter}
        </div>
      )}

      <button onClick={toggleCounter} style={buttonStyle}>
        Toggle Counter
      </button>

      <div style={{ marginTop: '15px' }}>
  <button
    onClick={increment}
    style={{
      marginRight: '10px',
      padding: '10px 20px',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    }}
  >
    Increment
  </button>

  <button
    onClick={decrement}
    style={{
      padding: '10px 20px',
      backgroundColor: '#2196F3',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    }}
  >
    Decrement
  </button>
</div>
    </div>
  );
};

export default CounterComponent;
