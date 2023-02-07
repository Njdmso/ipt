function login(){
    var p = document.getElementById("pass").value;
    var n = document.getElementById("uname").value;
    if (valemail(n)) {
        if(!valipas(p)){
            alert("Invalid Password");
        }
        else{
            alert("Welcome!");
        }
    } 
    else if (!valemail(n) && (!valipas(p))){
        alert("Either Email or Password is not valid");
    }
    else {
        alert("Invalid Email");
    }
      
}
function showp(){
    var x = document.getElementById("pass");
    if (x.type === "password"){
        x.type = "text";
    }
    else{
        x.type = "password";
    }
}
var n = document.getElementById("uname").value;
function valemail(n) {
    var em = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return em.test(String(n).toLowerCase());
}
var p = document.getElementById("pass").value;
function valipas(p){
    var pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return pattern.test(p);
}