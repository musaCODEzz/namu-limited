
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






// const register = (event) =>{
//     event.preventDefault();
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     console.log(email, password);
  
//    auth.createUserWithEmailAndPassword(email, password)
//    .then((res) => {
//     console.log(res.user);
//    })
//    .catch((err) => {
//     console.log(err.code);
//     console.log(err.message);
//    })

   

// }

document.getElementById('submit').addEventListener('click', function(event){
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(email, password);
  
   auth.createUserWithEmailAndPassword(email, password)
   .then((res) => {
    console.log(res.user);
   })
   .catch((err) => {
    console.log(err.code);
    console.log(err.message);
   })


    
    
    
    
})