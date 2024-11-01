import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './components/Greeting'
import Button from './components/Button'
import Header from './components/Header'
import Form from './components/Form'
import Card from './components/Card'
import Light from './components/Light'

function App() {
  const [dark, setDark] = useState(false);
  return (
    <>
    <div className={`text-white ${dark ? "bg-black" : "bg-white"} h-screen w-screen`}>
    <Header></Header>
      <div className='flex flex-row h-screen w-screen place-content-center'>
      <Card name="Daniel" desc='pcool guy'></Card>    
      <Card></Card>    
      <Card></Card>    
      <Light dark={dark} setDark={setDark}></Light>
      </div>
      
    </div>
    </>
  )
}

export default App
