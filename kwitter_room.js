var firebaseConfig = {
      apiKey: "AIzaSyC9SJab1Sh-uvkO8qP83w9b50gqQrwVJf0",
      authDomain: "kwitter-c4ba1.firebaseapp.com",
      databaseURL: "https://kwitter-c4ba1-default-rtdb.firebaseio.com",
      projectId: "kwitter-c4ba1",
      storageBucket: "kwitter-c4ba1.appspot.com",
      messagingSenderId: "1061070487670",
      appId: "1:1061070487670:web:326a19549120a898ca9f57"
    };
    
     firebase.initializeApp(firebaseConfig);
     user_name=localStorage.getItem("user_name")
     document.getElementById("user_name").innerHTML="welcome"+user_name+"!"
     function addroom(){
      room_name=document.getElementById("room_name").value
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      })
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html"
     }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
console.log("Room name-"+Room_names)
row="<div class='room_name'id="+Room_names+"onclick='rediectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
document.getElementById("output").innerHTML=row
      });});}
getData();
function rediectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_oage.html"      
}

function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location="index.html"
}