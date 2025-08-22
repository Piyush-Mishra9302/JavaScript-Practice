import { useState, useContext } from "react";
import { MyLoginContext } from "./LoginContext";


const UnAuthApp = () => {
    const [inputValue, setInputValue] = useState('');
    const {login} = useContext(MyLoginContext);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleLogin = () => {
        login(inputValue);
    } 


  return (
  <div>
    <label>Enter Name : </label>
    <input
    type="text"
    value={inputValue}
    onChange={handleInputChange}
    placeholder="Enter Your Name"
    />

    <button onClick={handleLogin}>Login</button>
  </div>
  )
}

export default UnAuthApp