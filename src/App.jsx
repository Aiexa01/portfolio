import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './comun.css'

import { Header } from './sections/Header'
import { Icons } from './sections/Icons'
import { Bodycontainer } from './Bodycontainer'
import { PiedePag } from './sections/PiedePag'
import { Ejemplo } from './Ejemplo/Usuarios'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div id='container'>
      <Icons></Icons>
      <Header></Header>
      {/* <Ejemplo></Ejemplo> */}
      <Bodycontainer></Bodycontainer>
      <PiedePag></PiedePag>
      {/* 1 _ quitar los numeros 
          2 poner mayusculas a los titulos
          3 _ hacer lo mismo del header con todos los archivos
          ctrl + shift + p 
          4_ crear una carpeta Bodycontainer que contenga las partes
          investigar sobre los ciclos for */}
    </div>
  
  )
}

export default App
