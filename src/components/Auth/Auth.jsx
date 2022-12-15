import React, {useState} from 'react';
import classes from './style.module.scss'
import {useDispatch} from "react-redux";
import {changeNameAction} from "../Store/nameReducer";

const Auth = () => {
    const dispatch = useDispatch();

    const changeName = (name) => {
        dispatch(changeNameAction(name));
    }

    return (
        <div className={classes.container}>
            <h2>Добрый день, как к вам обращаться?</h2>
            <input type="text" onChange={event => changeName(event.target.value, event.)}/>
        </div>
    );
};

export default Auth;