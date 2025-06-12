let valid = () => {
  let Name = document.querySelector("#name").value.trim();
  let Num = document.querySelector("#number").value.trim();
  let Email = document.querySelector("#email").value.trim();
  let Password = document.querySelector("#password").value.trim();
  let Cpassword = document.querySelector("#cpassword").value.trim();

  let errname = document.querySelector("#errname");
  let errnum = document.querySelector("#errnum");
  let erremail = document.querySelector("#erremail");
  let errpass = document.querySelector("#errpass");
  let errcpass = document.querySelector("#errcpass");

  //Name Validation
  if (Name == "") {
    errname.innerHTML = "Please enter the name";
    return false;
  }
  
  //Number Validation
  else if (Num == "") {
    errnum.innerHTML = "Please enter the Number";
    return false;
  } else if(Num.length != 10){
    errnum.innerHTML = "Please enter 10 digits only";
     return false
  } else if (isNaN(Num)){
    errnum.innerHTML = "Please enter number Only";
     return false
  }


   else if (Email == "") {
    erremail.innerHTML = "Please enter the E-mail";
    return false;
  } else if (Password == "") {
    errpass.innerHTML = "Please enter the Password";
    return false;
  } else if (Cpassword == "") {
    errcpass.innerHTML = "Please enter the Confirm Password";
    return false;
  }
};
