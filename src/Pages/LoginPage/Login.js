import React, { Fragment, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Login.css";

const Login = () => {
  const [userDetail, setUserDetail] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const onChangeHandler = (event, field) => {
    setUserDetail((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const isDisable = userDetail.email === '' || userDetail.password === '' || userDetail.password.length < 8;

  const submitHandler = async(event) => {
    event.preventDefault();
    const data = userDetail;
    console.log("DATA = ", data);
    const response = await fetch('http://localhost:80/login', {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    console.log("RESult = ", result);
    navigate('/home')

  }

  return (
    <Fragment>
      <form className="contain" onSubmit={(e) => submitHandler(e)}>
        <input
          placeholder="Email"
          value={userDetail.email}
          required
          type="email"
          name="email"
          onChange={(e) => onChangeHandler(e, 'email')}
        />

        <input
          placeholder="Password"
          value={userDetail.password}
          required
          type="password"
          name="password"
          onChange={(e) => onChangeHandler(e, 'password')}
        />
        <button
            disabled = {isDisable}
            >Submit</button>
      </form>
    </Fragment>
  );
};

export default Login;
