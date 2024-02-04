import { useState } from "react";

import classes from "./NavigationBar.module.css";
import { useSelector } from "react-redux";
import SideBar from "../SideBar/SideBar";

const NavigationBar = () => {
  const [sidebarToggle, setSideBarToggle] = useState(false);
  const isAuthenticated = useSelector(
    (store) => store.authenticate.isAuthenticate
  );

  const siderBarHandler = () => {
    console.log("Side clicked", sidebarToggle);
    setSideBarToggle(!sidebarToggle);
  };

  return (
    <div className={classes.navigationbar}>
      {!isAuthenticated ? (
        <div className={classes.placeholder} />
      ) : (
        <button onClick={siderBarHandler} className={classes.btn}>
          {" "}
          <h4>=</h4> {sidebarToggle && <SideBar onToggle={siderBarHandler}/>}{" "}
        </button>
      )}
      <h4> E-Shop </h4>
      {!isAuthenticated ? (
        <div className={classes.placeholder} />
      ) : (
        <h4> = </h4>
      )}
    </div>
  );
};

export default NavigationBar;
