// importing firebase config
import { firebaseApp } from './config.js';

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const today = new Date();

document.getElementById("signup").addEventListener('click', function(event){
   event.preventDefault();

   const email = document.getElementById('1email').value;
   const password = document.getElementById('1password').value;
   console.log(email, password);
   auth.createUserWithEmailAndPassword(email, password)
    .then((userCredentials) => {
    console.log(userCredentials.user);
      db.collection('users').doc(userCredentials.user.uid).set({
         email: email,
         password: password,
         date: today
      })
      window.location.href = "/namu-limited/html/index.html";

   })
   .catch((err) => {
    console.log(err.code);
    alert(err.message);
   }) 
});

