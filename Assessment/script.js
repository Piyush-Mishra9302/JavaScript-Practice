 function changeBigImageById(imageId) {
    var smallImage = document.getElementById(imageId); 
    var bigImage = document.getElementById("mainDisplayImg");
    bigImage.src = smallImage.src; 
  }