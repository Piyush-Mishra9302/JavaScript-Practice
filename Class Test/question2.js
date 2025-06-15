let valid = () => {
    let Name = document.querySelector("#name").value.trim();
    let errname =  document.querySelector("#errname")
    let Email = document.querySelector("#email").value.trim();
    let erremail = document.querySelector("#erremail");

    if(Name == ""){
        errname.innerHTML = "Enter your Name";
        return false;
    } else if(Email == ""){
        erremail.innerHTML = "Please Enter your Email"
        return false;
    } else if(!(Email.includes("@") && Email.includes(".com"))){
        erremail.innerHTML = "Please enter the valid email"
        return false;
    }
}