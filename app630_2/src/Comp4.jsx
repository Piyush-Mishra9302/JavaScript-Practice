
import Comp5 from './Comp5'
import { useContext } from 'react'
import { myContext } from './App'

const Comp4 = () => {
  const {user} = useContext(myContext);
  return (
   <>
    <h1>Welcome to Component {user}</h1>
    <Comp5 />
   </>
  )
}

export default Comp4