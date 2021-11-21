
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyD3iM3Tc4x1vZRz68El5giY0k9g3zoO0nk",
      authDomain: "kwitter-7fa84.firebaseapp.com",
      databaseURL: "https://kwitter-7fa84-default-rtdb.firebaseio.com",
      projectId: "kwitter-7fa84",
      storageBucket: "kwitter-7fa84.appspot.com",
      messagingSenderId: "854925774028",
      appId: "1:854925774028:web:90a1989c67e8c21591c669",
      measurementId: "G-WV1F852Q5F"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

//GET THE NAME ME IN FUTURE-PAST YOU ME
user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML= user_name+"ヽ(゜▽゜　)－";

    function getData() { firebase.database().ref("/").on('value', function(snapshot)  { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name",Room_names);
row= "<div class='room_name' id='"+Room_names+"' onclick='redirect_room(this.id)'>"+Room_names+"</div>";
document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();



function logout(){
      window.location = "index.html";
      localStorage.removeItem("room_name");
      }

function addroom(){
      room_name= document.getElementById("addroom").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"add room name"
      });
localStorage.setItem("room_name",room_name);
window.location = "kwitter_page.html";}


function redirect_room(id){
      localStorage.setItem("room_name",id);
      window.location = "kwitter_page.html";
}