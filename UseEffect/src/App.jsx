import { useState } from 'react'
import './App.css'
import Text from '../Components/Text';

function App() {
  
    const [flag, setflag] = useState(false);

    const toggle=()=>{
      setflag(!flag);
    }
  return (
    <>
      <button onClick={toggle}>Show/Hide Text</button>
      {
       flag && <Text/>
      }
    </>
  )
}

export default App
