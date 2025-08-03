import React, { useState, useEffect } from 'react'
import axios from 'axios';



const Cybrom = () => {

 const[input, setInput] = useState('');


  let handleInput = (e) =>{
   let name = e.target.name;
   let value = e.target.value;
   setInput(values =>({...values, [name] : value}))
   console.log(input)
  }

  let handleSubmit = async () => {
    let api = "http://localhost:3000/students";
    const response = await axios.post(api, input);
    console.log(response);
    alert("data successfully saved");
  }

  return (
    <>
    <h1>Application Form</h1>
    Enter Roll no : <input type='text' name='roll_no' onChange={handleInput} />
    Enter Name : <input type='text' name='name' onChange={handleInput} />
    Enter City : <input type='text' name='city'  onChange={handleInput} />
    Enter fees : <input type='text' name='fees'  onChange={handleInput}/>
    <button onClick={handleSubmit}>Click</button>


    </>
  );
};

export default Cybrom;
