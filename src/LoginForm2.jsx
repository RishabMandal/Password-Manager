// import SignUp from "./SignUp";
import React, { useState, useEffect } from "react";
// import {
//   HashRouter as Router,
//   Routes,
//   Switch,
//   Route,
//   Link,
//   NavLink,
// } from "react-router-dom";

export default function LoginForm2({ password, name, login, Signup, admin }) {
  const [nameDetails, setnameDetails] = useState("Name");
  const [passwordDetails, setpasswordDetails] = useState("");
  //   const [SignUpstate, setSignUpstate] = useState("false");

  //   console.log(nameDetails);

  useEffect(() => {
    // console.log(nameDetails);
    // User.setUser(nameDetails);
    name.setname(nameDetails);
    password.setpassword(passwordDetails);
  });

  // To make the input editable
  //   function onChangefunc(event) {
  //     setnameDetails(event.target.value);
  //   }

  const [NameDetails, setNameDetails] = useState("");
  const [PasswordDetails, setPasswordDetails] = useState("");

  function settolocal() {
    localStorage.setItem("Name", NameDetails);
    localStorage.setItem("Password", PasswordDetails);
  }

//   function setloginstatusfunc() {
//     // Signup.setSignUpstate("true");
//     if (name != admin.Admin.name && password != admin.Admin.password) {
//       console.log("Wrong User Details");
//     }
//   }

  return (
    <>
      {/* <Router> */}
      {/* Old Section */}
      <section className="h-100 gradient-form bg-[#eee] rounded-xl">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" />
                        {/* <style="width: 185px;" alt="logo"> */}
                        <h4 className="mt-1 mb-5 pb-1">
                          We are The Lotus Team
                        </h4>
                      </div>

                      <form>
                        <p className="text-xl mb-3">
                          Please login to your account
                        </p>

                        <div className="form-outline mb-4">
                          <input
                            type="name"
                            id="form2Example11"
                            className="form-control border-2 hover:border-[#ee7724] "
                            placeholder="Username"
                            onChange={(e) => {
                              setnameDetails(e.target.value);
                            }}
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example22"
                            className="form-control border-2 hover:border-[#ee7724]"
                            placeholder="Password"
                            onChange={(e) => {
                              setpasswordDetails(e.target.value);
                            }}
                          />
                        </div>

                        {/* Error */}
                        <div className="hidden">Error</div>

                        <div className="text-center pt-1 mb-5 pb-1">
                          <button
                            className="block fa-lg bg-gradient-to-r from-[#ee7724] to-[#b44593] px-4 py-2 rounded-lg text-white mx-auto mb-3"
                            type="button"
                            onClick={() => {
                              login.setLogin("true");
                            }}
                          >
                            LOG IN
                          </button>
                        </div>

                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Don't have an account?</p>
                          <button
                            type="button"
                            className="btn btn-outline-danger ml-4"
                            onClick={() => {
                              Signup.setSignUpstate("true");
                            }}
                          >
                            CREATE NEW
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center rounded-lg bg-gradient-to-r from-[#ee7724] to-[#b44593]">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 className="mb-4 text-2xl">
                        Secure, anonymous, stateless password manager
                      </h4>
                      <p className="small mb-0">
                        We do not use cookies, tracking scripts or any third party in browser software.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* </Router> */}
    </>
  );
}
