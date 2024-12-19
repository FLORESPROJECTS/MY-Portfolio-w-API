function zz(){
    let pass = "angelo";
    let password = document.getElementById("pass").value;

    if(password == pass){
        alert('loggin successfuly');
        window.location.href = "home.html";
    }else{
        alert('please try again');
    }
}