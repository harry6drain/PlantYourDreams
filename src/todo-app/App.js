// import { AiOutlinePlus } from 'https://cdn.jsdelivr.net/npm/react-icons@4.6.0/ai/index.esm.js';
import Todo from './Todo.js';
import { db } from '../firebase.js'
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
  where
} from 'https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js';

const style = {
  bg: `flex w-full p-4 bg-gtransparent`,
  container: `bg-transparent content-center w-full rounded-md  shadow-xl p-4 leading-snug`,
  heading: `text-4xl font-bold text-center text-zinc-600 p-2`,
  form: `flex justify-between h-10`,
  input: `border p-2 w-full `,
  button: `flex border p-4 ml-2 bg-[#7C8B5C] text-slate-100 rounded-full items-center`,
  count: `text-center p-2`,
};

function App() {
  const [todos, setTodos] = React.useState([]);
  const [input, setInput] = React.useState('');
  const userUID = sessionStorage.getItem("uid");
  console.log(userUID);

  // Create todo
    //need to write uid as well
  const createTodo = async (e) => {
    e.preventDefault(e);
    if (input === '') {
      alert('Please enter a valid todo');
      return;
    }
    await addDoc(collection(db, 'todos'), {
      text: input,
      completed: false,
      uid: userUID
    });
    setInput('');
  };

  // Read todo from firebase
    //need to add uid filter
  React.useEffect(() => {
    const q = query(collection(db, 'todos'),where("uid","==", `${userUID}`));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);

  // Update todo in firebase
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      completed: !todo.completed,
    });
  };

  // Delete todo
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id));
  };

  return React.createElement("div", {
    className: style.bg
  }, React.createElement("div", {
    className: style.container
  }, React.createElement("h3", {
    className: style.heading
  }, "Your Tasks"), React.createElement("form", {
    onSubmit: createTodo,
    className: style.form
  }, React.createElement("input", {
    value: input,
    onChange: e => setInput(e.target.value),
    className: style.input,
    type: "text",
    placeholder: "What do you want to focus on"
  }), React.createElement("button", {
    className: style.button
  }, React.createElement('i', {
    className: 'fa fa-plus'}, null
    ))), React.createElement("ul", null, todos.map((todo, index) => React.createElement(Todo, {
    key: index,
    todo: todo,
    toggleComplete: toggleComplete,
    deleteTodo: deleteTodo
  }))), todos.length < 1 ? null : React.createElement("p", {
    className: style.count
  }, `You have ${todos.length} Tasks`)));
}

  // return React.createElement('div', {
  //   className: style.bg
  // }, (
  //   React.createElement('div', { className: style.container }, (
  //     React.createElement('h3', { className: style.heading }, 'Your task')
  //   ))
  // ));
  // return (
  //   <div className={style.bg}>
  //     <div className={style.container}>
  //       <h3 className={style.heading}>Your Tasks</h3>
  //       <form onSubmit={createTodo} className={style.form}>
  //         <input
  //           value={input}
  //           onChange={(e) => setInput(e.target.value)}
  //           className={style.input}
  //           type='text'
  //           placeholder='What do you want to focus on'
  //         />
  //         <button className={style.button}>
  //           <AiOutlinePlus size={30} />
  //         </button>
  //       </form>
  //       <ul>
  //         {todos.map((todo, index) => (
  //           <Todo
  //             key={index}
  //             todo={todo}
  //             toggleComplete={toggleComplete}
  //             deleteTodo={deleteTodo}
  //           />
  //         ))}
  //       </ul>
  //       {todos.length < 1 ? null : (
  //         <p className={style.count}>{`You have ${todos.length} Tasks`}</p>
  //       )}
  //     </div>
  //   </div>
  // );
// }

export default App;