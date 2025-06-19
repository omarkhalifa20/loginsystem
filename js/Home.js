var cor = localStorage.getItem("cor") ;
cor = JSON.parse(localStorage.getItem("cor")) ;
var profile = document.querySelector ("#profile")



    var cartoona = "";
    
      cartoona += `<h1 class="mb-5 text-primary ">Welcome ${cor.name} !</h1>
     <a href="./index.html" class="btn btn-outline-dark d-block m-auto w-75">
     Logout
     </a>`

    
    
    
    profile.innerHTML = cartoona

