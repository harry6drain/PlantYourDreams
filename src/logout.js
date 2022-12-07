import { auth} from "./firebase.js"
import {signOut} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"



// const logout = async() => {
//     await signOut(auth);
// }

// logOutBtn.addEventListener('click',logout);
logoutBtn.addEventListener("click", () => {
    const logoutBtn = document.getElementById('logoutBtn');

    signOut(auth)
        .then(() => {
            console.log('user signed out')
        })
        .catch((err) => {
            console.log(err.message)
        })
})