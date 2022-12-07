import { auth} from "./firebase.js"
import {signOut, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"



// const logout = async() => {
//     await signOut(auth);
// }

// logOutBtn.addEventListener('click',logout);
const logoutBtn = document.getElementById('logoutBtn');
logoutBtn.addEventListener("click", () => {

    signOut(auth)
        .then(() => {
            console.log('user signed out')
        })
        .catch((err) => {
            console.log(err.message)
        })
})

let User;
onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      User = auth.currentUser;
      const uid = User.uid;
      console.log(uid);
      window.sessionStorage.setItem("uid",uid)
      // ...
    } else {
      // User is signed out
      // ...
      User = null;
      console.log("Uh-oh");
      window.location.replace("/index.html")
    }
});


