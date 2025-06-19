var namereg = document.querySelector ("#namereg");
var emailreg = document.querySelector ("#emailreg");
var passwordreg = document.querySelector ("#passwordreg");
var regbtn = document.querySelector ("#regbtn");
var namealert = document.querySelector ("#namealert");
var emailalert = document.querySelector ("#emailalert")
var emailfound = document.querySelector ("#emailfound")
var passwordalert = document.querySelector ("#passwordalert")
var success = document.querySelector ("#success")
var formdata ;


if (localStorage.getItem("formdata")) {
    formdata = JSON.parse(localStorage.getItem("formdata")) ; 
} else {
  formdata = [];
  
}





regbtn.addEventListener("click" , function(){
    addtolocal();
} )

function addtolocal() {
    if (nameregex() && emailregex() && passregex()) {
        var found = false;

        for (var i = 0; i < formdata.length; i++) {
            if (formdata[i].email === emailreg.value) {
                found = true;
                break;
            }
        }

        if (found) {
            emailreg.classList.add("is-invalid");
            emailreg.classList.remove("is-valid");
            emailfound.classList.remove("d-none"); 
        } else {
            emailreg.classList.add("is-valid");
            emailreg.classList.remove("is-invalid");
            emailfound.classList.add("d-none"); 
            success.classList.remove("d-none"); 
            var data = {
                name: namereg.value.trim(),
                email: emailreg.value.trim(),
                pass: passwordreg.value.trim(),
            };

            formdata.push(data);
            savetolocal();
            clearinput();
            window.location.href = "login.html";
        }
    }
}





function savetolocal() {
localStorage.setItem ("formdata", JSON.stringify(formdata))
}

function clearinput() {
    namereg.value = null ; 
    emailreg.value = null ; 
    passwordreg.value = null ; 
}



function nameregex() {
    var regex = /^([A-Z]|[a-z]){3,}$/
    if (regex.test(namereg.value)){
    
    namereg.classList.add("is-valid")
    namereg.classList.remove("is-invalid")
    namealert.classList.add("d-none")
    return true
    }
    else{
     namereg.classList.add("is-invalid")
    
    namealert.classList.remove("d-none")

    return false
    }
}

namereg.addEventListener("input" ,nameregex)

function emailregex() {
    var regex = /([a-z]|[A-Z]|[0-9])[@][a-z]/
    if (regex.test(emailreg.value)){
    
    emailreg.classList.add("is-valid")
    emailreg.classList.remove("is-invalid")
    emailalert.classList.add("d-none")
    return true
    }
    else{
        
    emailreg.classList.add("is-invalid")
    emailalert.classList.remove("d-none")

    return false
    }
}

emailreg.addEventListener("input" ,emailregex)



function passregex() {
    var regex = /^([0-9]|[A-Z]|[a-z]){6,}$/
    if (regex.test(passwordreg.value)){
    
    passwordreg.classList.add("is-valid")
    passwordreg.classList.remove("is-invalid")
    passwordalert.classList.add("d-none")
    return true
    }
    else{
    passwordreg.classList.add("is-invalid")
    passwordalert.classList.remove("d-none")
    

    return false
    }
}

passwordreg.addEventListener("input" ,passregex)

