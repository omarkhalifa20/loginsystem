var emaillog = document.querySelector ("#email");
var passwordlog = document.querySelector ("#password");
var loginbtn = document.querySelector ("#loginbtn") 
var emaildanger  = document.querySelector ("#emaildanger") 
var passworddanger  = document.querySelector ("#passworddanger")
var success = document.querySelector ("#success")
var formdata = localStorage.getItem("formdata") ;
formdata = JSON.parse(localStorage.getItem("formdata")) ;






loginbtn.addEventListener("click",function (){
    signin()
})

function signin() {
    var found = false
    for (var i = 0; i < formdata.length; i++) {
      if (formdata[i].email === emaillog.value) {
        found = true;
      
        if (formdata[i].pass === passwordlog.value) {
            window.location.href = "Home.html"
            localStorage.setItem("cor" , JSON.stringify(formdata[i]))
            success.classList.remove("d-none");
            break;  
        } else {
            passwordlog.classList.add("is-invalid");
            passwordlog.classList.remove("is-valid");
            passworddanger.classList.remove("d-none");
        }
        
      }
        
      
        
    }
    if (!found) {
    emaillog.classList.add("is-invalid");
    emaillog.classList.remove("is-valid");
    emaildanger.classList.remove("d-none"); 
    }else {
    emaillog.classList.remove("is-invalid");
    emaillog.classList.add("is-valid");
    emaildanger.classList.add("d-none"); 
    }
}


