
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyA7etgrGVrQf__ysotwq6qjyoYy2zcMeKI",
      authDomain: "kwitter-10031.firebaseapp.com",
      databaseURL: "https://kwitter-10031-default-rtdb.firebaseio.com",
      projectId: "kwitter-10031",
      storageBucket: "kwitter-10031.appspot.com",
      messagingSenderId: "661215471054",
      appId: "1:661215471054:web:6b3d66576908c53670779f"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - ", + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function addRoom(){
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
purpose : "adding room"
  });

  localStorage.setItem("room_name", room_name);

  window.location="kwitter_page.html"
}

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location="kwitter_page.html";

}
function logout(){
  console.log("loged out succesfully!!");
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
  console.log("loged out succesfully!!");
}