import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';

const EditData = () => {
    const {id} = useParams();
    const [myData, setMydata] = useState({});

    
  let getdata = async () => {
    let api = `http://localhost:3000/students/${id}`;
    const response = await axios.get(api);
    setMydata(response.data);
  };

    let handleInput = (e) =>{
   let name = e.target.name;
   let value = e.target.value;
   setMydata(values =>({...values, [name] : value}));
   console.log(input)
  }

  useEffect(() =>{
    getdata()
  },[])

  let handleSubmit = async() => {
    let api = `http://localhost:3000/students/${id}`;
    let response = await axios.put(api, myData);
    alert('Data Updated')
  }
  return (
    <>
    <h1>Edit records</h1>
    Enter Roll no : <input type='text' name='roll_no' value={myData.roll_no} onChange={handleInput} />
    Enter Name : <input type='text' name='name' value={myData.name} onChange={handleInput} />
    Enter City : <input type='text' name='city' value={myData.city} onChange={handleInput} />
    Enter fees : <input type='text' name='fees' value={myData.fees} onChange={handleInput}/>
    <button onClick={handleSubmit}>Click</button>
    </>
  )
}

export default EditData