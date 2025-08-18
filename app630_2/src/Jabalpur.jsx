// import React from 'react'
// import { useContext } from 'react'
// import { myContext } from './App'

// const Jabalpur = () => {
//     const [name] = useContext(myContext);
//   return (
//    <>
   
//    <h1>Welcome to Jabalpur {name}</h1>
//    </>
//   )
// }

// export default Jabalpur
import Comp5 from './Comp5'
import { useContext } from 'react'
import { myContext } from './App'

const Jabalpur = () => {
  const {user} = useContext(myContext);
  return (
   <>
    <h1>Welcome to Jabalpur :  {user}</h1>
    <Comp5 />
   </>
  )
}

export default Jabalpur