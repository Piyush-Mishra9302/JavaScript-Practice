let getPrompt = () => {
    let ptag = document.querySelector("#text")
    
    let promptText = prompt("Enter Text :");
    let result = promptText.toUpperCase();
    ptag.innerHTML = result;
}