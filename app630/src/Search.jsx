import { useState } from "react"
import axios from "axios";

const Search = () => {
    const [rno, setRno] = useState("");
    const [myData, setMyData] = useState([]);


    const handleSubmit = async() => {
        let api = `http://localhost:3000/students/?roll_no=${rno}`;
        let response = await axios(api);
        setMyData(response.data);
    }

    
  let answer = myData.map((key) => {
    return (
      <tr key={key.id}>
        <td>{key.roll_no}</td>
        <td>{key.name}</td>
        <td>{key.city}</td>
        <td>{key.fees}</td>
      </tr>
    );
  });
  return (
    <>
        <h1>Search Page</h1>
        Enter Roll no. : <input type="text" value={rno} onChange={(e) =>{setRno(e.target.value)}} />
        <button onClick={handleSubmit}>Search</button>

        <hr/>
        <table width='600' border='1'>
            <tr>
                <th>Rollno</th>
                <th>Name</th>
                <th>City</th>
                <th>Fees</th>
            </tr>
            {answer}
        </table>
    </>
  )
}

export default Search