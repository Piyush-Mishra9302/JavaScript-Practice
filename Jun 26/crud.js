let fetchdata = async() => {
    let db_url = "http://localhost:3000/hotel";
    let res =  await fetch(db_url, {method:"GET"});
    let data = await res.json();
    console.log(data);
}
fetchdata();