import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Update = () => {

    const [myData, setMyData] = useState([]);
    const navigate = useNavigate();

  let getdata = async () => {
    let api = "http://localhost:3000/students";
    const response = await axios.get(api);
    setMyData(response.data);
  };

   useEffect(() => {
    getdata();
  }, []);

  let deleteData = async(id) => {
    let api = `http://localhost:3000/students/${id}`;
    let response = await axios.delete(api);
    alert("Data is deleted");
    getdata(); 
  }

  let editData = (id) =>{
    
    navigate(`/EditData/${id}`)
  }

  let answer = myData.map((key) => {
    return (
      <tr key={key.id}>
        <td>{key.roll_no}</td>
        <td>{key.name}</td>
        <td>{key.city}</td>
        <td>{key.fees}</td>
        <td>
          <button onClick={() => {deleteData(key.id)}}>Delete</button>
        </td>
        <td>
          <button onClick={() => {editData(key.id)}}>Edit</button>
        </td>
      </tr>
    );
  });
  return (
     <>
      <h1>Display Page</h1>
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

export default Update