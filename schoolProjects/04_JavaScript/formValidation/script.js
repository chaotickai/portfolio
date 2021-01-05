const email = document.getElementById("inputEmail3").value;
const password = document.getElementById("inputPassword3").value;
const subButton = document.getElementById("subBtn")

function valid8(){
    if(email == "" || password == ""){
        alert("Please check the fields and make sure that they are not blank.");
        return false;
    }
}

subButton.onclick = valid8