import React from 'react'
import { useContext } from 'react'
import { UserContext } from './MyContext'

const Cybrom = () => {
    const {user, setUser} = useContext(UserContext);
  return (
    <>
   <h1>Welcome to Cybrom : {user}</h1>
   <button onClick={() => {setUser("Vashu")}}>Click</button> 
   
    </>
  )
}

export default Cybrom