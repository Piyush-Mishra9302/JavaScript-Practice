import axios from "axios";
import { useEffect, useState } from "react";

const OurCources = () => {
  const [myData, setMyData] = useState([]);

  let getdata = async () => {
    let api = "http://localhost:3000/student";
    const response = await axios.get(api);
    setMyData(response.data);
  };

  useEffect(() => {
    getdata();
  }, []);

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
  );
};

export default OurCources;
