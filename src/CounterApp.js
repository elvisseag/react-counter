import React, { useState } from 'react'
import PropTypes from 'prop-types';

const CounterApp = ( { value = 10 } ) => {

  const [counter, setCounter] = useState( 0 );

  const handleAdd = () => {
    setCounter( counter + 1 );
  }
  const handleReset = () => {
    setCounter( value );
  }
  const handleSubstract = () => {
    setCounter( counter - 1 );
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2 style={{ color: '#FFFCA6' }}>{ counter }</h2>

      <button className='btnAdd' onClick={ () => { handleAdd() } }>+1</button>
      <button className='btnReset' onClick={ () => { handleReset() } }>Reset</button>
      <button className='btnSubstract' onClick={ () => { handleSubstract() } }>-1</button>
    </>
  )
}

CounterApp.propType = {
  value: PropTypes.number
}

export default CounterApp;