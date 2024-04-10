// import React from 'react'
import './App.css'
import Contador from './components/Contador'
import Mensaje from './components/Mensaje'
import { Usuario } from './components/Usuario'

function App() {

  return (
    <>
      <h1>Ejercicios React </h1>
      <hr />
      <h2>Componentes y props (03)</h2>
      <Usuario nombre="Ulises" edad={30} pais="Mexico"/>
      <Usuario nombre="Paola" edad={20} pais="Mexico"/>
      <Usuario nombre="Carlos" edad={50} pais="Uruguay"/>
      <hr />
      <h2>useState y useEffect hooks (04)</h2>
      <Contador/>
      <Mensaje/>
    </>
  )
}

export default App
