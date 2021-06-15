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
room_name=localStorage.getItem("room_name");

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

