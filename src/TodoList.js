import React, { useState, useRef, useEffect} from "react";
import Todo from "./Todo";
// import uuidv4 from 'uuid/v4';
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  //
  const LOCAL_STORAGE_KEY = "password";
  // Refer https://egghead.io/lessons/react-store-values-in-localstorage-with-the-react-useeffect-hook
  // for knowing how useEffect does not make initial state 0 or empty
  const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
  const [todos, setTodos] = useState(storedTodos);

  // const [todos, setTodos] = useState([
  //   // { todoname: "First Todo", todowork: "No work yet" }
  // ]);

  const inputTitle = useRef();
  const input = useRef();
  //   useEffect(() => {
  //     return () => {
  //       console.log(input.current.value);
  //     };
  //   });

  // useEffect(() => {
  //   const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (storedTodos) setTodos(storedTodos)
  //   console.log(storedTodos);
  //   console.log(todos);
  // }, []);
  //
  // useEffect(() => {
  //   const storedTodos = JSON.parse(localStorage.getItem("password"));
  //   setTodos(storedTodos);
  //   console.log(storedTodos)
  //   console.log(todos)
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  // }, [todos])
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const local = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    console.log(todos);
  };
  // useEffect(() => {
  //   localStorage.setItem("password", JSON.stringify(todos))
  // }, [todos])

  const addTodo = () => {
    // setTodos([input.current.value]);
    // setTodos([
    //   { todoname: inputTitle.current.value, todowork: input.current.value },
    // ]);
    if (inputTitle.current.value === "") return;
    setTodos((prevTodos) => {
      // return [...prevTodos, {todoname: inputTitle.current.value, todowork: input.current.value}]
      return [
        ...prevTodos,
        {
          id: uuidv4(),
          todoname: inputTitle.current.value,
          todowork: input.current.value,
        },
      ];
    });
    // localStorage.setItem("password", JSON.stringify(todos))
    // console.log(inputTitle.current.value);
    // inputTitle.current.value=null;
    // input.current.value=null;
    // local();
  };

  function handleClearTodos() {
    // const newTodos = todos.filter(todo => !todo.complete)
    const newTodos = [];
    setTodos(newTodos);
    local();
  }

  //Random Number for id
  let id = uuidv4();

  //Try
  // const LOCAL_STORAGE_KEY = "password";
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <div className="text-center mx-auto">
        <div className="text-4xl m-3 font-bold">Password Manager</div>
        <div className="text-2xl m-2">Number of passwords : {todos.length}</div>
        <button
          onClick={handleClearTodos}
          className="border-2 border-red-600 rounded-lg p-2"
        >
          Delete All
        </button>
        <div>
          <input
            ref={inputTitle}
            type="text"
            className="border-2 border-red-600 rounded-lg p-2"
            placeholder="Add Account Identifier"
          />
          <input
            ref={input}
            type="text"
            className="border-2 border-red-600 rounded-lg p-2"
            placeholder="Add Password"
          />
          <button
            onClick={addTodo}
            className="border-2 border-red-600 rounded-lg p-2"
          >
            Add
          </button>
        </div>

        {/* Card Style */}
        <div className="bg-gray-100 my-4 rounded-lg mx-40">
          {/* <div>Title</div>
          <div>Content</div> */}
        </div>
        <div className="flex">
          {/* {todos.map((todo) => {
            // return <Todo key={todo} todo={todo} />
            return <Todo key={id} todo={todo} />;
          })} */}
          {todos.map((todo, index) => {
            // return <Todo key={todo} todo={todo} />
            return (
              <Todo
                key={todo.id}
                index={index}
                todo={todo}
                removeTodo={removeTodo}
              />
            );
          })}
        </div>
      </div>
      <hr />
      <hr />
      {/* New UI trial */}
      <div className="bg-red-600 w-screen py-16 mb-20 flex">
        <div className="text-white bg-black h-[630px] rounded-3xl w-[1200px] flex mx-auto p-4">
          {/* <div className="bg-red-600 text-center h-full text-black w-[300px] pt-3 px-2 rounded-xl font-bold"> */}
          <div className="bg-red-600 text-center text-black w-[300px] py-3 px-2 rounded-xl font-bold">
            <div className="text-2xl">Rishab Mandal</div>
            {/* <div className="grid grid-cols-2 my-20">
              <button className="bg-red-500 text-gray-800 text-sm px-2 py-4 m-2 rounded-md">
                Safe
                <div className="text-3xl text-white">100</div>
              </button>
              <button className="bg-red-500 text-gray-800 text-sm px-2 py-4 m-2 rounded-md">
                Weak
                <div className="text-3xl text-white">0</div>
              </button>
              <button className="bg-red-500 text-gray-800 text-sm px-2 py-4 m-2 rounded-md">
                Compromised
                <div className="text-3xl text-white">0</div>
              </button>
              <button className="bg-red-500 text-gray-800 text-sm px-2 py-4 m-2 rounded-md">
                Reused
                <div className="text-3xl text-white">0</div>
              </button>
            </div>
            <button className="bg-red-500 text-xl text-white px-4 py-4 m-2 mt-3 rounded-md">
              Generate New Password
            </button> */}
            <div className="grid grid-cols-2 my-6">
              <button className="bg-red-500 text-gray-800 text-sm px-2 py-4 m-2 rounded-md">
                Safe
                <div className="text-3xl text-white">{todos.length}</div>
              </button>
              <button className="bg-red-500 text-gray-800 text-sm px-2 py-4 m-2 rounded-md">
                Weak
                <div className="text-3xl text-white">0</div>
              </button>
              {/* <button className="bg-red-500 text-gray-800 text-sm px-2 py-4 m-2 rounded-md">
                Compromised
                <div className="text-3xl text-white">0</div>
              </button> */}
              <button className="bg-red-500 text-gray-800 text-sm px-2 py-4 m-2 rounded-md">
                Not Safe
                <div className="text-3xl text-white">0</div>
              </button>
              <button className="bg-red-500 text-gray-800 text-sm px-2 py-4 m-2 rounded-md">
                Reused
                <div className="text-3xl text-white">0</div>
              </button>
            </div>
            <button className="bg-red-500 my-auto text-xl text-white px-4 py-4 m-2 rounded-md">
              Generate New Password
            </button>
          </div>
          <div className="mx-4">
            <div className="font-bold text-3xl mb-8 inline flex">
              <div className="ml-2 mr-96">Dashboard</div>
              {/* <div className="text-xl text-red-600 ml-4 pt-2">
                Welcome back, Rishab !
              </div> */}
            </div>
            <div className="grid grid-cols-2">
              <div className="bg-white m-2 w-[380px] text-3xl align-middle text-red-600 text-center rounded-xl h-[200px]">
                How to protect your passwords
              </div>
              <div className="bg-red-600 m-2 w-[380px] text-xl rounded-xl h-[200px]">
                Login
              </div>
              <div className="bg-red-600 m-2 w-[380px] text-xl rounded-xl h-[200px]">
                Password Health
              </div>
              <div className="bg-red-600 m-2 w-[380px] text-3xl text-center rounded-xl h-[200px]">
                Recently added
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
