//YOUR FIREBASE LINKS

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

      user_name= localStorage.getItem("user_name");
      room_name= localStorage.getItem("room_name");
    function send(){
      msg= document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      })
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name =message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>" + name + "<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>"
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag ="<span class='glyphicon glyphicon-tumbs-up'>Like: "+like+"<span><button><hr>";

row= name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();

function updateLike(message_id){
      console.log("clicked on like button"+message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_Like=Number(likes)+1;
      console.log(updated_Like);

      firebase.database().ref(room_name).child(message_id).update({
            like:updated_Like
      });
}
function logout(){
      console.log("loged out succesfully!!");
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
      console.log("loged out succesfully!!");
    }