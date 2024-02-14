import { useState } from 'react'
import Axios from 'Axios'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [data, setdata] = useState(null);
  const [name, setname] = useState("");

  

  const fact=(name)=>{
    Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
      setdata(res.data);
    })
  }
  

  return (
    <>
      <input type="text" placeholder='Ex.. Satyam' onChange={(e)=>setname(e.target.value)}/>
      <button onClick={()=>fact(name)}>Click</button>
      <h1>Name : {data?.name}</h1>
      <h1>Age : {data?.age}</h1>
      <h1>Count : {data?.count}</h1>
    </>
  )
}

export default App
