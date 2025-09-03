import { useState } from "react";
import axios from "axios";


const Insert = () => {
    const [input, setInput] = useState('')
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInput(values =>({...values, [name] : value}));
    }

    const handleSubmit = async() => {
        let api = "http://localhost:3000/student";
        const response = await axios.post(api, input);
        console.log(response.data );
        alert("Data is submitted");
    }

  return (
   <>
    <h1>Application Form</h1>
    Enter Roll no : <input type="text" name="roll_no" onChange={handleInput} />
    Enter Name : <input type="text" name="name" onChange={handleInput} />
    Enter City : <input type="text" name="city" onChange={handleInput} />
    Enter Fees : <input type="text" name="fees" onChange={handleInput} />
    <button onClick={handleSubmit}>Click here</button>

   </>
  )
}

export default Insert