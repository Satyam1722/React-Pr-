import React, { useEffect, useState } from 'react'

const Text = () => {
    const [text, settext] = useState("")

    const func=(e)=>{
        settext(e.target.value)
    }

    useEffect(() => {
            console.log("mounted");
    
      return () => {
        console.log("unmountetd");
      }
    }, [text])
    
  return (
    <div>
        <input type="text" name="text" id="" onChange={(e)=>{
            func(e);
        }} />
        <div>{text}</div>
    </div>
  )
}

export default Text