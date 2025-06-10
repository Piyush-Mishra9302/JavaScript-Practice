
// function removeText(){
//     let remove = document.querySelector("#text");
//         remove.style.display = "none"
    
// }
// function showText(){
//     let show = document.querySelector("#text");
//         show.style.display = "block"
// }

// const magic = () =>{
//      let visibility = document.querySelector("#text");
//      let btnChange = document.querySelector("#btn")

//      if (visibility.style.display == "none"){
//         visibility.style.display = "block"
//         btnChange.innerHTML = "Hide"
//      } else{
//          visibility.style.display = "none"
//           btnChange.innerHTML = "Show"
//      }
// }

function changeBigImageById(imageId) {
    var smallImage = document.getElementById(imageId); 
    var bigImage = document.getElementById("mainDisplayImg");
    bigImage.src = smallImage.src; 
  }

  let change = () =>{
    let changeImg = document.querySelector("#img1");
    changeImg.src = "/02.jpg"
  }