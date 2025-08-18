
import { useState } from 'react'
import { createContext } from 'react'
import Bhopal from './Bhopal';

const myContext = createContext();
const App = () => {
  const [user, setUser] = useState("Piyush Mishra")
  return (
    <div>
      <button onClick={() => {setUser("Satna")}}>Set City</button>
     <h1>Welcome to app : {user}</h1>
     <myContext.Provider value={{user}}>
      <Bhopal/>
     </myContext.Provider>
    </div>
  )
}

export default App
export {myContext};