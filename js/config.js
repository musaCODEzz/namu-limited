// // function initializeApp() {
// //     const firebaseConfig = {
// //         apiKey: "AIzaSyCgzjk0NeNch-NxwjWVa0Z7g6CIJPE9sHQ",
// //         authDomain: "namu-cars.firebaseapp.com",
// //         projectId: "namu-cars",
// //         storageBucket: "namu-cars.appspot.com",
// //         messagingSenderId: "907556560324",
// //         appId: "1:907556560324:web:d7e521bf8f65f98dd35891",
// //         measurementId: "G-X0HNPZ9R7T"
// //       };
    
// //       // Initialize Firebase
// //       firebase.initializeApp(firebaseConfig);
      
    

// //       const login = ((e)  => {
// //         e.preventDefault();
        
// //         const email = document.getElementById('email').value;
// //         const password = document.getElementById('password').value;
// //         const today = new Date();

// //         firebase.auth().createUserWithEmailAndPassword(email, password)
// //         .then((userCredential) => {
                
// //                 firebase.firestore().collection("users").doc().set({
// //                     email: email,
// //                     userId: userCredential.user.uid,
// //                     created_at: today.getFullYear() + " " + (today.getMonth() + 1) + " " + today.getDate() 
// //                 })
// //             })   
// //         });
        

        




// // }
  
  
 










// script type="module">
//     // Import the functions you need from the SDKs you need
//     import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
//     import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
//     import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";


//     // TODO: Add SDKs for Firebase products that you want to use
//     // https://firebase.google.com/docs/web/setup#available-libraries
  
//     // Your web app's Firebase configuration
//     // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//     const firebaseConfig = {
//       apiKey: "AIzaSyCgzjk0NeNch-NxwjWVa0Z7g6CIJPE9sHQ",
//       authDomain: "namu-cars.firebaseapp.com",
//       projectId: "namu-cars",
//       storageBucket: "namu-cars.appspot.com",
//       messagingSenderId: "907556560324",
//       appId: "1:907556560324:web:d7e521bf8f65f98dd35891",
//       measurementId: "G-X0HNPZ9R7T"
//     };
  
//     // Initialize Firebase
//     const app = initializeApp(firebaseConfig);
//     const analytics = getAnalytics(app);
//     const auth = getAuth();


//     const register = () => {
//                 const email = document.getElementById('email').value;
//                 const password = document.getElementById('password').value;
                
//             auth.createUserWithEmailAndPassword(email, password)
//                 .then((res) => {
//                 // Signed in
//                 console.log(res.user);
            
//                 // ...
//                 })
//                 .catch((error) => {
//                 console.log(error.code);
//                 console.log(error.message);
//                 // ..
//                 });

   
  
//   }


//   </script>




// <!--/firebase cdn-->






















// // // // configurring the Firebase Auth


// // // const firebaseConfig = {
// // //     apiKey: "AIzaSyCgzjk0NeNch-NxwjWVa0Z7g6CIJPE9sHQ",
// // //     authDomain: "namu-cars.firebaseapp.com",
// // //     projectId: "namu-cars",
// // //     storageBucket: "namu-cars.appspot.com",
// // //     messagingSenderId: "907556560324",
// // //     appId: "1:907556560324:web:d7e521bf8f65f98dd35891",
// // //     measurementId: "G-X0HNPZ9R7T"
// // //   };
  
// // //   // Initialize Firebase
// // //   const firebase = initializeApp(firebaseConfig);

  
  
// // // //   const login = document.getElementById('submit').onclick = ((e)  => {
// // // //       e.preventDefault();
      
// // // //       const email = document.getElementById('email').value;
// // // //       const password = document.getElementById('password').value;
// // // //       const today = new Date();
  
// // // //       firebase.auth().createUserWithEmailAndPassword(email, password)
// // // //       .then((userCredential) => {
  
// // // //           firebase.firestore().collection("users").doc().set({
// // // //               email: email,
// // // //               userId: userCredential.user.uid,
// // // //               created_at: today.getFullYear() + " " + (today.getMonth() + 1) + " " + today.getDate() 
// // // //           })
// // // //         })
  
// // // //   });