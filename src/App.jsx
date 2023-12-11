import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
 //let count = 25
 let [Counter, setCounter] = useState(15)

 const increaseCount = () =>{
  //console.log(count++);
  if(Counter<=20){
    setCounter(Counter+1)
  }
  else{
    setCounter("Not Possible")
  }
  
 }

 const decreaseCount =()=>{
 // console.log(count--)
 if(Counter>0){
  setCounter(Counter-1)
 }
 else{
  setCounter("Sorry")
 }
 
 }

  return (
    <>
      <h1> React With Ashish Rathor</h1>
      <h2>Simple Hook Project {Counter}</h2>
      <button onClick={increaseCount}>Maximun Count: {Counter}</button>
      <br></br>
      <br></br>
      <button onClick={decreaseCount}>Minimun Count: {Counter}</button>
    </>
  )
}

export default App
