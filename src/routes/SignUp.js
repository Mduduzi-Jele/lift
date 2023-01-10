import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { signup } from "../data";

const SignUp = () => {
  const navigate = useNavigate();
  const [msg, setMsg] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault();
    const element = document.getElementById("signup-form");
    const formData = new FormData(element);
    const name = formData.get("name");
    const lastname = formData.get("lastname");
    const email = formData.get("email");
    const password = formData.get("password");
    const { user_id, msg } = await signup(name, lastname, email, password);
    if(user_id){
      return navigate(`/workouts/${user_id}`);
    } else {
      setMsg(msg)
    }
  };
  return (
    <>
      <div className="nav">
        <img
          className="logo"
          src={require("../assets/logo.png")}
          width="50"
          alt="logo"
        />
      </div>
      <Form
        method="post"
        id="signup-form"
        className="input-area"
        onSubmit={handleSubmit}
      >
        <img
          className="logo-body"
          src={require("../assets/logo.png")}
          width="250"
          alt="logo"
        />
        <h2 className="workouts-heading">sign up</h2>
        <input
          id="name"
          aria-label="Enter name"
          placeholder="Name"
          type="text"
          name="name"
          className="input-button"
        />
        <br />
        <input
          id="lastname"
          aria-label="Enter lastname"
          placeholder="Lastname"
          type="text"
          name="lastname"
          className="input-button"
        />
        <br />
        <input
          id="email"
          aria-label="Enter email"
          placeholder="Email"
          type="text"
          name="email"
          className="input-button"
        />
        <br />
        <input
          id="password"
          aria-label="Enter password"
          placeholder="Password"
          type="password"
          name="password"
          className="input-button"
        />
        <br />
        <div className="workouts-heading">{msg}</div>
        <br />
        <button type="submit" className="action">
          sign up
        </button>
      </Form>
    </>
  );
};

export default SignUp;
