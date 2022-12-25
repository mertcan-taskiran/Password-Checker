let parameters = {
    count : false,
    letters : false,
    numbers : false,
    special : false
}

let strengthBar = document.getElementById("strength-bar");
  
function strengthChecker(){

    let password = document.getElementById("password").value;
  
    parameters.upperCase = (/[A-Z]+/.test(password))?true:false;
    parameters.numbers = (/[0-9]+/.test(password))?true:false;
    parameters.special = (/[!\"$%&/()=?@~`\\.\';:+=^*_-]+/.test(password))?true:false;
    parameters.count = (password.length > 7)?true:false;
  
    let barLength = Object.values(parameters).filter(value=>value);
  
    strengthBar.innerHTML = "";
    for( let i in barLength){
        let span = document.createElement("span");
        span.classList.add("strength");
        strengthBar.appendChild(span);
    }
  
    let spanRef = document.getElementsByClassName("strength");
    for( let i = 0; i < spanRef.length; i++){
        switch(spanRef.length - 1){
            case 0 :
                spanRef[i].style.background = "#ff3e36";
                break;
            case 1:
                spanRef[i].style.background = "#ff691f";
                break;
            case 2:
                spanRef[i].style.background = "#ffda36";
                break;
            case 3:
                spanRef[i].style.background = "#0be881";
                break;
        }
    }

    parameters.upperCase == true ? (uppercase.checked = true):(uppercase.checked = false);
    parameters.numbers == true ? (numerical.checked = true):(numerical.checked = false);
    parameters.special == true ? (special.checked = true):(special.checked = false);
    parameters.count == true ? (count.checked = true):(count.checked = false);

    if(uppercase.checked && numerical.checked && special.checked && count.checked){
        document.getElementById("btn").classList.remove("disabled");
    }else{
        document.getElementById("btn").classList.add("disabled");
    }
 

}
  
function toggle(){
    let password = document.getElementById("password");
    let eye = document.getElementById("toggle");
  
    if(password.getAttribute("type") == "password"){
        password.setAttribute("type","text");
        eye.style.color = "#062b61";
    }
    else{
        password.setAttribute("type","password");
        eye.style.color = "#6b6868";
    }
}