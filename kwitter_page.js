//YOUR FIREBASE LINKS
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

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(message_data);
console.log(firebase_message_id);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];

namewittag="<h4>"+name+"<img id='user_tick' src='tick.png'></h4>";
messagewittag="<h4 class=''message_h4>"+message+"</h4>";
likebutton="<button class='btn btn-warning' id='"+firebase_message_id+"' value="+like+" onclick='update_like(this.id)'>";
spanwittag="<span class='glyphicon glyphicon-thumbs-up' >  Like:"+like+"</span></button><hr>";

row=namewittag+messagewittag+likebutton+spanwittag;
document.getElementById("output").innerHTML+=row;


//End code
} });  }); }
function update_like(message_id){
console.log("clicked on like button"+message_id);
likes=document.getElementById(message_id).value;
updated_likes=Number(likes)+1
console.log(updated_likes);

firebase.database().ref(room_name).child(message_id).update({like:updated_likes});
};

getData();


function logout(){
      window.location = "index.html";
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");

}     

      
      function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });

  document.getElementById("msg").value = "";
}
