import React, { useState } from 'react'

const Contador = () => {

  const [counter, setCounter] = useState(0);


  const sumar = () =>{
    setCounter(counter + 1);
  }

  const restar = () =>{
    setCounter(counter - 1);
  }

  return (
    <div>
      <h4>{counter}</h4>
      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>

      <p>usamos <em>useState</em> para actualizar el el estado del contador a traves de los botones.</p>
    </div>
  )
}

export default Contador