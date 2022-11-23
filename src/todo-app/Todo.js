// import React from 'react';
// import { FaRegTrashAlt } from 'https://cdn.jsdelivr.net/npm/react-icons@4.6.0/fa/index.esm.js';

const style = {
  li: `flex justify-between bg-green-200 p-4 my-2 rounded-2xl capitalize`,
  liComplete: `flex justify-between bg-slate-400 p-4 my-2 rounded-lg capitalize`,
  row: `flex`,
  text: `ml-2 cursor-pointer`,
  textComplete: `ml-2 line-through cursor-pointer`,
  button: `cursor-pointer flex items-center`,
};

const Todo = ({ todo, toggleComplete, deleteTodo }) => {

  return React.createElement("li", {
    className: todo.completed ? style.liComplete : style.li
  }, React.createElement("div", {
    className: style.row
  }, React.createElement("input", {
    onChange: () => toggleComplete(todo),
    type: "checkbox",
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