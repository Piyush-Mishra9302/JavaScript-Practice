import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Diaplay = () => {
  const [myData, setMyData] = useState([]);

  let getData = async () => {
    let api = "http://localhost:3000/student";
    const response = await axios.get(api);
    
    setMyData(response.data);  
  };

  let answer = myData.map((key) => {
    return(
      <tr key = {key.id}>
        <td>{key.roll_no}</td>
        <td>{key.name}</td>
        <td>{key.city}</td>
        <td>{key.fees}</td>
      </tr>
    )
  })

  useEffect( () => {
    getData();
  }, [])
  return (
   <>
    <h1>Display Data</h1>
    <table border="1">
      <tr>
        <th>Roll No.</th>
        <th>name</th>
        <th>city</th>
        <th>fees</th>
      </tr>
      {answer}
    </table>
   </>
  )
}

export default Diaplay