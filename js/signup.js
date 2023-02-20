const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyA2cpiKOc-QTntZhixngoDJPQNeBBr0L20",
    authDomain: "trial-66a86.firebaseapp.com",
    projectId: "trial-66a86",
    storageBucket: "trial-66a86.appspot.com",
    messagingSenderId: "656510144104",
    appId: "1:656510144104:web:4d7e25348fe003a91df5dd"



 });

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

   })
   .catch((err) => {
    console.log(err.code);
    alert(err.message);
   }) 

});

