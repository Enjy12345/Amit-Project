let api_key ="751b7081ce23c8cec0c5d69471b3c4fa";
let baseurl = `https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}`;
let container="";
let imgHalf= "https://image.tmdb.org/t/p/w500";
let usernametxt = document.getElementById("username");
let userdata = JSON.parse(localStorage.getItem("allUsers"));
let logoutbtn = document.getElementById("logoutbtn");
console.log(userdata[0].userName);
const burgerMenuBtn = document.querySelector(".burgerMenu");
usernametxt.textContent =  "Hi " + userdata[0].userName;
const loading = setTimeout(load, 4500);
const slide = setTimeout(slideUp, 2500);
function load() {
  document.querySelector(".loadingPage").classList.remove("loadingPage-active");
}
function slideUp() {
  document.querySelector(".loadingPage").classList.add("loadingPage-slide");
  document.querySelector(".loadingImg").classList.add("d-none");
}
function get_movies(){
$.get(baseurl, function(data,status){
    // console.log(data);
    let{results}=data;
    for (var i=0; i<results.length; i++) 
    {
        
        let{title,vote_average ,poster_path}=results[i];
// console.log(title ,vote_average ,poster_path);
        container +=`
        <div class="col-md-3 col-sm-6 py-3">
        <div class="movie ">
        <img src = "${imgHalf}${poster_path}" class=" img-fluid shadow-lg rounded">
                <span class="text-white imgHeader">${vote_average}</span>
             
       </div>
        </div>`

    }
    // console.log(container);

    document.getElementById("movies").innerHTML = container;

console.log(document.getElementById("movies").innerHTML);
});

}
get_movies();

logoutbtn.addEventListener("click",function(){
localStorage.clear();
location.href="../Html/LoginPage.html";
});

function showitems() {
  document.querySelector("#centered-items").classList.toggle("flex");
  document.querySelector(".userdata").classList.toggle("flex");

}
burgerMenuBtn.addEventListener("click", showitems);