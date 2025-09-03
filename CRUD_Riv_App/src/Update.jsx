import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';


const Update = () => {
  const [myData, setMyData] = useState([]);
  const navigate = useNavigate();

  let getdata = async () => {
    let api = "http://localhost:3000/student";
    let response = await axios(api);
    console.log(response.data);
  }

  useEffect(() => {
    getdata();
  }, [])

  let deleteData = async(id) => {
    let api = `http://localhost:3000/student/${id}`
    let response = await axios.delete(api)
  }
  return (
    <>

    </>
  )
}

export default Update