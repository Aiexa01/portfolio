import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Part1 } from './sections/1presentation/part_1'
import { Part2 } from './sections/2projects/part_2'
import { Part3 } from './sections/3skills/part_3'
import { Part4 } from './sections/4about_me/part_4'
import { Part5 } from './sections/5contacts/part_5'
import { Icons } from './sections/00icons/icons'
import { Header } from './sections/0encabezado/header'
import { Footer } from './sections/footer/footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div id='container'>
      <Icons></Icons>
      <Header></Header>
      <div className='body-container'>
        <Part1></Part1>
        <Part2></Part2>
        <Part3></Part3>
        <Part4></Part4>
        <Part5></Part5>
      </div>
      <Footer></Footer>
      
    </div>
  
  )
}

export default App