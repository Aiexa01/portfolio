import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Part1 } from './sections/1_Presentation/part_1'
import { Part2 } from './sections/2_Projects/part_2'
import { Part3 } from './sections/3skills/part_3'
import { Part4 } from './sections/4_About_me/part_4'
import { Part5 } from './sections/5_Contacts/part_5'
import { Icons } from './sections/00_Icons/icons'
import { Header } from './sections/0_Encabezado/header'
import { Footer } from './sections/Footer/footer'

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
