import { initializeApp, } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
import { getFirestore,collection,addDoc } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAUS-fQ46Gv4kuLEqvYurwQJ5inCRkLA1U",
    authDomain: "plantyourdreams-8d08e.firebaseapp.com",
    databaseURL: "https://plantyourdreams-8d08e-default-rtdb.firebaseio.com",
    projectId: "plantyourdreams-8d08e",
    storageBucket: "plantyourdreams-8d08e.appspot.com",
    messagingSenderId: "63192119407",
    appId: "1:63192119407:web:c15c2b763e51e7f786b59a",
    measurementId: "G-XYRQCEW5L5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

registerbtn.addEventListener('click',(e) => {
    var email = document.getElementById('email').value;
    var password = document.getElementById('psw').value;
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        var lgDate = new Date();
        // ... user.uid
        alert(`${user.uid} created successfully!`);
        try {
            const docRef = addDoc(collection(db, "users"), {
              uid: user.uid,
              email: user.email,
              lastLogin: lgDate
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (error) {
            console.error("Error adding document: ", error);
        }
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        alert(errorMessage);
    });


    // signOut(auth).then(() => {
    //     // Sign-out successful.
    // }).catch((error) => {
    //     // An error happened.
    // });
})

loginbtn.addEventListener("click",(e) => {
    var email = document.getElementById('loginEmail').value;
    var password = document.getElementById('loginPsw').value;
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert(`User with uid ${user.uid} signs in successfully!`);
        // ...

        // save log in details into real time database
    //     var lgDate = new Date();
    //     update(ref(database, 'users/' + user.uid), {
    //         last_login: lgDate,
    //     })
    //         .then(() => {
    //             // Data saved successfully!
    //             alert('user logged in successfully');

    //         })
    //         .catch((error) => {
    //             // The write failed...
    //             alert(error);
    //         });
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
    });
})


// onAuthStateChanged(auth, (user) => {
//     if (user) {
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/firebase.User
//       const uid = user.uid;
//       // ...
//     } else {
//       // User is signed out
//       // ...
//     }
//   });
  