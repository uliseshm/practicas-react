import React, { useState } from 'react'

const Mensaje = () => {

  const [mostrar, setMostrar] = useState(true);

  const handleMostrar = () => {
    setMostrar(!mostrar);
  }

  return (
    <div>
      <button onClick={handleMostrar}>{mostrar === true ? "Ocultar" : "Mostrar"}</button>

      {mostrar && <h3>Mensaje con <em>useState</em></h3>}

      <p>se usa <em>useState</em> para ocultar o mostrar el mensaje, a traves de la variable mostrar.</p>
    </div>
  )
}

export default Mensaje