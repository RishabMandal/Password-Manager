import React, { useState } from "react";
// import LoginForm from "./LoginForm";
// import LoginForm2 from "./LoginForm2";
// import SignUp from "./SignUp";

export default function Login({username}) {
  //   const [Admin, setAdmin] = useState({ name: "Rishab", password: "123" });
  //   const [User, setUser] = useState({ name: "", password: "" });
  //   const [name, setname] = useState("");
  //   const [password, setpassword] = useState("");
  //   const [Login, setLogin] = useState("false");

  return (
    <>
      {/* <div>
        {User.name == Admin.name ? (
          <div className="text-center">Login Page</div>
        ) : (
          <LoginForm User={{User,setUser}} name={{name,setname}} />
        )}
      </div> */}

      <div>
        <div className="text-center">Welcome {username} !</div>
        <div className="text-center">You are logged in !!</div>
      </div>

      {/* <LoginForm /> */}
      {/* <LoginForm2 /> */}
      {/* <SignUp /> */}
    </>
  );
}
