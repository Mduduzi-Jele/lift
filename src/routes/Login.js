
import { useState } from "react";
import { Form, useNavigate} from "react-router-dom";
import { login } from "../data";

const Login = () => {
  const [msg, setMsg ] = useState()
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const element = document.getElementById("email-form");
    const formData = new FormData(element);
    const email = formData.get("email");
    const password = formData.get("password");
    const { user_id, msg } = await login(email, password);
    if (user_id) {
      return navigate(`/workouts/${user_id}`);
    } else {
      setMsg(msg)
    }
  };
  return (
    <div className="screen">
      <div className="nav">
        <img
          className="logo"
          src={require("../assets/logo.png")}
          width="50"
          alt="logo"
        />
      </div>
      <Form
        className="input-area"
        method="post"
        id="email-form"
        onSubmit={handleSubmit}
      >
        <img
          className="logo-body"
          src={require("../assets/logo.png")}
          width="250"
          alt="logo"
        />
        <input
          className="input-button"
          id="email"
          aria-label="Enter email"
          placeholder="Email"
          type="text"
          name="email"
        />
        <br />
        <input
          className="input-button"
          id="password"
          aria-label="Enter password"
          placeholder="Password"
          type="password"
          name="password"
        />
        <br />
        <div className="workouts-heading">{msg}</div>
        <br />
        <button className="action" type="submit">
          login
        </button>
      </Form>
    </div>
  );
};

export default Login;
