import { useContext } from 'react'
import AuthApp from './AuthApp'
import UnAuthApp from './UnAuthApp'
import { MyLoginContext } from './LoginContext'


const App = () => {
  const {user} = useContext(MyLoginContext);
  return (
   <>
    <h1>Login System</h1>
    {user.auth ? <AuthApp/> : <UnAuthApp/>}
   </>
  )
}

export default App