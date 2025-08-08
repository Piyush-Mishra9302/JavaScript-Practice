
import { useState } from 'react'
import Comp1 from './Comp1'

const App = () => {
  const [user, setUser] = useState("Piyush Mishra")
  return (
    <div>
      <h1>Welcome : ---- {user}</h1>
      <Comp1 user = {user}/>
    </div>
  )
}

export default App