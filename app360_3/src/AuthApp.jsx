import { UserContext } from "./MyContext"
import { MyLoginContext } from "./LoginContext"
import { useContext } from "react"

const AuthApp = () => {
    const {user, logout} = useContext(MyLoginContext);
  return (
    <>
        <h1>Welcome {user.name}</h1>  
        <button onClick={logout}>Logout</button>
    </>
  )
}

export default AuthApp;