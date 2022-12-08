// import React from 'react';
// import { FaRegTrashAlt } from 'https://cdn.jsdelivr.net/npm/react-icons@4.6.0/fa/index.esm.js';

const style = {
  li: `flex justify-between bg-[#5D6943] text-[#ffffff] p-4 my-2 rounded-2xl capitalize`,
  liComplete: `flex justify-between bg-[#a296bc] p-4 my-2 rounded-2xl capitalize`,
  row: `flex  `,
  text: `ml-2 cursor-pointer `,
  textComplete: `ml-2 line-through cursor-pointer`,
  button: `cursor-pointer flex bg-[#5D6943] items-center`,
};

const Todo = ({ todo, toggleComplete, deleteTodo }) => {

  return React.createElement("li", {
    className: todo.completed ? style.liComplete : style.li
  }, React.createElement("div", {
    className: style.row
  }, React.createElement("input", {
    onChange: () => toggleComplete(todo),
    type: "checkbox",
    className: 'w-auto',

    //one more question tho. If u see home, the logout works, but somehow on the garden and shop page, it doesn't work. And css isn't right, even though im using the same css code. It's in the Nav Bar
    checked: todo.completed ? 'checked' : ''
  }), React.createElement("p", {
    onClick: () => toggleComplete(todo),
    className: todo.completed ? style.textComplete : style.text
  }, todo.text)), React.createElement("button", {
    onClick: () => deleteTodo(todo.id)
  }, React.createElement('i', {className: 'fa fa-xmark'}, null)));
}
  // return (
  //   <li className={todo.completed ? style.liComplete : style.li}>
  //     <div className={style.row}>
  //       <input onChange={() => toggleComplete(todo)} type='checkbox' checked={todo.completed ? 'checked' : ''} />
  //       <p onClick={() => toggleComplete(todo)} className={todo.completed ? style.textComplete : style.text}>
  //         {todo.text}
  //       </p>
  //     </div>
  //     <button onClick={() => deleteTodo(todo.id)}>{<FaRegTrashAlt />}</button>
  //   </li>
  // );
// };

export default Todo;