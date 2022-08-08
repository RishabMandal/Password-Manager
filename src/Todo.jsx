import React, { useState } from "react";
import TodoList from "./TodoList";

export default function Todo({ todo, removeTodo, index }) {
  const [showPassword, setShowPassword] = useState("*****");

  function showThePassword() {
    setShowPassword(todo.todowork);
  }

  return (
    <>
      {/* <div>Todo</div>
      <div>{todo.todoname}</div>
      // <div>{todo.todowork}</div> */}
      <div className="block mx-auto">
        <div className="card w-96 bg-red-600 text-white">
          <div className="card-body">
            <h2 className="card-title text-2xl m-2 font-bold">
              {todo.todoname}
            </h2>
            {/* <p className="text-xl">{todo.todowork}</p> */}
            <p className="text-xl">{showPassword}</p>
            <div className="card-actions justify-end m-2">
              <button
                onClick={showThePassword}
                className="text-red-600 bg-white rounded-lg py-1 px-3 mx-2"
              >
                Show Password
              </button>
              <button
                onClick={() => removeTodo(index)}
                className="text-red-600 bg-white rounded-lg py-1 px-3 mx-2"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
