import { useState } from 'react'
import './App.css'
import { WrongUseEffect } from './WrongUseEffect'
import { CorrectUseEffect } from '../CorrectUseEffect'

function App() {

  return (
    <>
      {/* <WrongUseEffect/> --> cause infinite loop     */}
      <CorrectUseEffect/>
    </>
  )
}

export default App
