import React, { Fragment, useState } from "react";
import "./Login.css";

const Login = () => {
  const [userDetail, setUserDetail] = useState({ email: "", password: "" });
  // const [isDisable, setIsDisable] = useState(true);

  const onChangeHandler = (event, field) => {
    setUserDetail((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const isDisable = userDetail.email === '' || userDetail.password === '' || userDetail.password.length < 8;

  const submitHandler = () => {
  }

  return (
    <Fragment>
      <form className="contain" onSubmit={submitHandler}>
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
