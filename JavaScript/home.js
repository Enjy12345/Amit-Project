
let usernametxt = document.getElementById("username");
let userdata = JSON.parse(localStorage.getItem("allUsers"));
let logoutbtn = document.getElementById("logoutbtn");
console.log(userdata[0].userName);
usernametxt.textContent =  "Hi " + userdata[0].userName;
let mybutton = document.getElementById("btn-back-to-top");
const burgerMenuBtn = document.querySelector(".burgerMenu");
const loading = setTimeout(load, 4500);
const slide = setTimeout(slideUp, 2500);

function load() {
  document.querySelector(".loadingPage").classList.remove("loadingPage-active");
}
function slideUp() {
  document.querySelector(".loadingPage").classList.add("loadingPage-slide");
  document.querySelector(".loadingImg").classList.add("d-none");
}

function randomNumber(){
  let randomNum=  document.querySelectorAll(".reviewNumber");
    for(var i=0;i<randomNum.length;i++){

        let x = Math.floor((Math.random() * 5000) + 1);
      randomNum[i].innerHTML =x+'K';
    }


};

setInterval(randomNumber,2000);

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
logoutbtn.addEventListener("click",function(){
    localStorage.clear();
    location.href="../Html/LoginPage.html";}
);

  function showitems() {
    document.querySelector("#centered-items").classList.toggle("flex");
    console.log( document.querySelector(".userdata"));
    document.querySelector(".userdata").classList.toggle("flex");


  }
  burgerMenuBtn.addEventListener("click", showitems);