import { useState } from 'react'
import Axios from 'Axios'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [data, setdata] = useState("");


  const fact=(type)=>{
    // Axios.get(`https://excuser-three.vercel.app/v1/excuse/${type}/`).then((res)=>{
    //   setdata(res.data[0].excuse);
    // })
   fetch(`https://excuser-three.vercel.app/v1/excuse/${type}/`).then((res)=>res.json()).then((res)=>{
    setdata(res[0].excuse);
   });

  }
  

  return (
    <>
      <h1>Generate an Excuse</h1>
      <button name="family" onClick={(e)=>fact(e.target.name)}>Family</button>
      <button name="office" onClick={(e)=>fact(e.target.name)}>Office</button>
      <button name="party" onClick={(e)=>fact(e.target.name)}>Party</button> 

      <h3>{data}</h3>
    </>
  )
}

export default App
