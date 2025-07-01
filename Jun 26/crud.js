let FetchData=async()=>{

    let url='http://localhost:3000/railway'

    let res= await fetch(url);

    let data= await res.json()

    console.log(data)

    let show=document.querySelector("#datashow")

    data.map((e)=>{

        show.innerHTML+=`
        
                <tr>
                   <td> ${e.name}</td>
                   <td> ${e.adhar}</td>
                   <td> ${e.checkIn}</td>
                   <td> ${e.checkOut}</td>
                   <td> ${e.city}</td>
                   <td> ${e.totalPrice}</td>
                   <td onclick="Del('${e.id}')">Delete</td>
                </tr>`
    })
}

let Del=(id)=>{

    let url=`http://localhost:3000/railway/${id}` ;

    fetch(url,{method:"DELETE"});
}

FetchData()