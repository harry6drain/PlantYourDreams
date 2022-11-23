import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getFirestore,
    query,
    collection,
    onSnapshot,
    updateDoc,
    doc,
    addDoc,
    deleteDoc,
} from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js';
import {getAuth,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";



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
const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
const db=getFirestore(app);
const auth = getAuth(app);









// function todo(){
//     // Create todo
//     //need to write uid as well
//     const createTodo = async (e) => {
//         e.preventDefault(e);
//         if (input === '') {
//           alert('Please enter a valid todo');
//           return;
//         }
//         await addDoc(collection(db, 'todos'), {
//           text: input,
//           completed: false,
//         });
//         setInput('');
//       };
    
      // Read todo from firebase
        //need to add uid filter
    //   useEffect(() => {
    //     const q = query(collection(db, 'todos'));
    //     const unsubscribe = onSnapshot(q, (querySnapshot) => {
    //       let todosArr = [];
    //       querySnapshot.forEach((doc) => {
    //         todosArr.push({ ...doc.data(), id: doc.id });
    //       });
    //       setTodos(todosArr);
    //     });
    //     return () => unsubscribe();
    //   }, []);
    
//       // Update todo in firebase
//       const toggleComplete = async (todo) => {
//         await updateDoc(doc(db, 'todos', todo.id), {
//           completed: !todo.completed,
//         });
//       };
    
//       // Delete todo
//       const deleteTodo = async (id) => {
//         await deleteDoc(doc(db, 'todos', id));
//       };
// }

