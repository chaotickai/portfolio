const regEmail = new RegExp('^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$');
const regPass = new RegExp ('^.{6,15}$');

$('button[type="button"]').click(function (){
    if(regEmail.test($('input[type="email"]').val()) === false){
        $("#warningtext").text("Please enter a valid email")
    }else if(regPass.test($('input[type="password"]').val()) === false){
        $("#warningtext").text("Password is too short")
    }else {
        $("#warningtext").text(" ")
    }
});