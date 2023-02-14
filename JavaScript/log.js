let registerbtn = document.getElementById("registerbtn");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let alert = document.querySelector(".alert");
let alerttxt = document.querySelector(".alertText");
var userData = [];
registerbtn.addEventListener("click",function(){
    if(emailValidaton()=== false){
        alert.style.display="block";
        alerttxt.innerHTML = "Email inValid ...!"
    }
    if(userNameValidaton()===false){
        alert.style.display="block";
        alerttxt.innerHTML = "Name Invalid...!"
    }
    if(passwordValidaton() === false){
        alert.style.display="block";
        alerttxt.innerHTML = "Password Invalid...!"
    }
if(emailValidaton()==true && passwordValidaton()== true && userNameValidaton() == true){
    let users = {
        userName : username.value ,
        userEmail : email.value ,      
        userPassword : password.value
    };
    console.log(users);
    userData.push(users);
    localStorage.setItem("allUsers" , JSON.stringify(userData));
    location.href= "../Html/movies.html";
} 
});
   
function emailValidaton(){
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(re.test(email.value)){
    return true;
}
else{
    return false;
}
}
function userNameValidaton(){
    var re = /^.{3,7}$/  ;
if(re.test(username.value)){
    return true;
}
else{
    return false;
}
}
function passwordValidaton(){
    let regex = /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,16}$/;
if(regex.test(password.value)){
    return true;
}
else{

    return false;

}
}