// import logo from './logo.svg';
import "./App.css";
// import Header from "./MyComponents/Header";
// import { Todos } from "./MyComponents/Todos";
// import { Footer } from "./MyComponents/Footer";
// import { AddTodo } from "./MyComponents/AddTodo";
import React, { useState, createContext } from "react";
// import Practice from "./Practice";
// import Skills from "./Skills";
import LoggedinContent from "./LoggedinContent";
import LoginForm from "./LoginForm";
import TodoList from "./TodoList";
import PasswordManager from "./PasswordManager";
import PasswordManagerUI from "./PasswordManagerUI";
// import LoginForm2 from "./LoginForm2";
// import SignUp from "./SignUp";

function App() {
  // const context = createContext();

  // const [Admin, setAdmin] = useState({ name: "Rishab", password: "123" });
  const [Admin, setAdmin] = useState({
    name: localStorage.getItem("Name"),
    password: localStorage.getItem("Password"),
  });
  // const [User, setUser] = useState({ name: "", password: "" });
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [Login, setLogin] = useState("false");
  // const [SignUpstate, setSignUpstate] = useState("false");

  return (
    <>
      {/* <Header title="My Todos List" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} /> */}
      {/* <Footer /> */}
      {/* <Practice />
      <Skills /> */}
      {/* <context.Provider> */}
      {/* <Router> */}

      <div>
          <TodoList/>
      </div>
      {/* <div>
          <PasswordManager/>
      </div> */}
      <div>
          <PasswordManagerUI/>
      </div>

      <div>
        {name === Admin.name &&
        password === Admin.password &&
        Login === "true" ? (
          <>
            <LoggedinContent username={Admin.name} />
          </>
        ) : (
          <>
            <LoginForm
              password={{ password, setpassword }}
              name={{ name, setname }}
              login={{ Login, setLogin }}
              // Signup={{ SignUpstate, setSignUpstate }}
              admin={{ Admin, setAdmin }}
            />
          </>
        )}
      </div>

      {/* </context.Provider> */}
    </>
  );
}

export default App;
