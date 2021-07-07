// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAqoH0WYfzIkG0NTux19eQpvnD_rG41Uw8",
  authDomain: "let-s-chtting.firebaseapp.com",
  projectId: "let-s-chtting",
  storageBucket: "let-s-chtting.appspot.com",
  messagingSenderId: "252178035749",
  appId: "1:252178035749:web:de2cd8e714a320f5b8bbcc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  
 
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Start code
        
        
  
        //End code
        });});}
  getData();
 
  
  