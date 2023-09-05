// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACj6cl3xeGBLRA8Tg9xgevFN-jPpXdA8o",
  authDomain: "mainproject-c5244.firebaseapp.com",
  databaseURL: "https://mainproject-c5244-default-rtdb.firebaseio.com",
  projectId: "mainproject-c5244",
  storageBucket: "mainproject-c5244.appspot.com",
  messagingSenderId: "596851507396",
  appId: "1:596851507396:web:3b05036c621d58f89f0991",
  measurementId: "G-3G86RS80C6"
};

// Initialize Firebase
firebase. initializeApp(firebaseConfig);

user_name= localStorage.getItem("name of the user").value;
document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";

function addstudent()
{
    student_name = document.getElementById("student_name").value;
    firebase.database().ref("/").child(student_name).update({
        purpose:"adding student name"
    });
    localStorage.setItem("student_name",student_name);
    
    window.location="index3.html";
}