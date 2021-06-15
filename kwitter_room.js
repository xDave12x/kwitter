var firebaseConfig = {
      apiKey: "AIzaSyBSrsUeiVUsdur0IeG1aMgXYT1ihQkHOos",
      authDomain: "kwitter-18eda.firebaseapp.com",
      databaseURL: "https://kwitter-18eda-default-rtdb.firebaseio.com",
      projectId: "kwitter-18eda",
      storageBucket: "kwitter-18eda.appspot.com",
      messagingSenderId: "928414048299",
      appId: "1:928414048299:web:360c3947f9f837ede4ca6e"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome"+user_name+"!";
function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirecttoroomname(name){
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}