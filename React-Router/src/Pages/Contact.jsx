import React from 'react'
import { useNavigate , useParams } from 'react-router-dom'

const Contact = () => {
  let navigate=useNavigate();

  let {username}=useParams();
  return (
    <>
    <div>This is contact page of {username}</div>
    <button onClick={()=>{
      navigate("/")
    }}>Home Page</button>
    </>
  )
}

export default Contact