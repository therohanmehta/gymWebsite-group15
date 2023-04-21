import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import RegCss from "./Registration.module.css";
import { userData } from "../../locaStorage/localStorage";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Registration() {
  const [local, setLocal] = useRecoilState(userData);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fNameError, setFnameError] = useState(true);
  const [lNameError, setLnameError] = useState(true);
  const [emailError, setEmailError] = useState(true);
  const [passwordError, setPasswordError] = useState(true);
  const [submitButton, setSubmitButton] = useState(false);
  function submitToLocal() {
    //variable for the validation of input
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const nameRegex = /^[a-zA-Z]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{7,}$/;

    if (fname === "" && lname === "" && email === "" && password === "") {
      const newData = [...local];
      setLocal(newData);
      localStorage.setItem("users", JSON.stringify(newData));
      alert("Check all the input field");
    } else if (
      emailRegex.test(email) &&
      nameRegex.test(fname) &&
      nameRegex.test(lname) &&
      passwordRegex.test(password)
    ) {
      const newData = [...local, { fname, lname, email, password }];
      setLocal(newData);
      localStorage.setItem("users", JSON.stringify(newData));
      setSubmitButton(!submitButton);
      alert("Registration successful Click on Go to Login Button");
    } else {
      alert("Please check all the fields  ");
    }
  }
  function handleSubmitButton() {
    alert("Enter the details same details in the login fields");
    setSubmitButton(false);
  }

  return (
    <div className={RegCss.container}>
      <div className={RegCss.div}>
        <TextField
          type="text"
          sx={{ width: "25ch" }}
          title="FirststName"
          id="filled-basic1"
          label="First Name"
          variant="filled"
          helperText={
            fNameError ? (
              <span>Only contains Alphabets </span>
            ) : (
              <span>Valid Name</span>
            )
          }
          onChange={(e) => {
            setFname(e.target.value);
            // eslint-disable-next-line no-lone-blocks
            {
              /^[a-zA-Z]+$/.test(fname)
                ? setFnameError(false)
                : setFnameError(true);
            }
          }}
        />

        <TextField
          sx={{ width: "25ch" }}
          id="filled-basic2"
          label="Last Name"
          variant="filled"
          title="LastName"
          helperText={
            lNameError ? (
              <span>Only contains Alphabets </span>
            ) : (
              <span>Valid Name</span>
            )
          }
          onChange={(e) => {
            setLname(e.target.value);
            // eslint-disable-next-line no-lone-blocks
            {
              /^[a-zA-Z]+$/.test(lname)
                ? setLnameError(false)
                : setLnameError(true);
            }
          }}
        />

        <TextField
          sx={{ width: "25ch" }}
          id="filled-basic3"
          type="email"
          title="Email"
          label="E-mail"
          variant="filled"
          helperText={
            emailError ? <span>Envalid email</span> : <span>Valid Email</span>
          }
          onChange={(e) => {
            setEmail(e.target.value);
            // eslint-disable-next-line no-lone-blocks
            {
              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
                ? setEmailError(false)
                : setEmailError(true);
            }
          }}
        />
        <TextField
          sx={{ width: "25ch" }}
          id="filled-basic4"
          type="password"
          label="Password"
          title="Password"
          variant="filled"
          helperText={
            passwordError ? (
              <span>password contain 8 characters with one number</span>
            ) : (
              <span>Strong Password</span>
            )
          }
          onChange={(e) => {
            setPassword(e.target.value);
            // eslint-disable-next-line no-lone-blocks
            {
              /^(?=.*\d)(?=.*[a-zA-Z]).{7,}$/.test(password)
                ? setPasswordError(false)
                : setPasswordError(true);
            }
          }}
        />
        <div className={RegCss.Button}>
          {submitButton ? (
            <Button
              sx={{ width: "28ch" }}
              variant="filled"
              onClick={handleSubmitButton}
            >
              <Link to={"/"}>
                <b>Go to Login Page</b>
              </Link>
            </Button>
          ) : (
            <Button
              sx={{ width: "28ch", backgroundColor: "rgba(73, 83, 24, 0.701)" }}
              variant="filled"
              onClick={submitToLocal}
            >
              Register
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Registration;
