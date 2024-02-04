import React from "react";
import classes from "./SideBar.module.css";
import { useNavigate } from "react-router-dom";

const SideBar = ({onToggle}) => {
    const history = useNavigate();

    const onClickMenuHandler = (event, to) => {
        history(to);
    }

    return (
        <div className={`${classes.sidebar} ${classes.open}`}>
        <div className={classes.sidebarHeader}>
        <h4>Categories</h4>
        </div>
        <ul className={classes.sidebarList}>
        <li onClick={(e) => {onClickMenuHandler(e, '/tic-tac-toe-game')}}>Tic-tac-toe</li>
        <li onClick={(e) => {onClickMenuHandler(e, '/tic-practice-game')}}>Tic-Practice</li>
        <li onClick={(e) => {onClickMenuHandler(e, '/product-list')}}>ProductList</li>
        <li>Utensils</li>
        <li>Grocery</li>
        <li>Fashion</li>
        </ul>
    </div>
    );
};

export default SideBar;
