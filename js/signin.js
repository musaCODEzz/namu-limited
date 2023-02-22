
// importing firebase config
import { firebaseApp } from './config.js';

const auth = firebaseApp.auth();
const realtimedb = firebaseApp.database();





document.getElementById('submit').addEventListener('click', function(event){
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(email, password);
  
   auth.signInWithEmailAndPassword(email, password)
   .then((userCredentials) => {
    console.log(userCredentials.user);
    sessionStorage.setItem('user', JSON.stringify(userCredentials.user));
    window.location.href = "/namu-limited/html/welcome.html";


   })
   .catch((err) => {
    console.log(err.code);
    alert(err.message);
   }) 
    
    
});


// Contact Form Submit

const contactFormDb = realtimedb.ref('contactForm');




document.getElementById('contactForm').addEventListener('submit', function(event){
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('emailid').value;
    var subject = document.getElementById('subject').value;
    var msgContent = document.getElementById('msgContent').value;
    console.log('====================================');
    console.log(name, email, subject, msgContent);
    console.log('====================================');

    
     const saveContactForm = contactFormDb.push();
     saveContactForm.set({
         name: name,
         email: email,
         subject: subject,
         msgContent: msgContent
     })
     document.getElementById('contactForm').reset();
});