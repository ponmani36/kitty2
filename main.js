function adduser(){
    user_name = document.getElementById("user_name").value;
    password=document.getElementById("password").value;
    
    localStorage.setItem("name of the user",user_name);
    localStorage.setItem("password of the user",password);
    window.location="index2.html";
}
