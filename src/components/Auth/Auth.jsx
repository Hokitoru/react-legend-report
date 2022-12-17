import React, {useState} from 'react';
import classes from './style.module.scss'
import {useDispatch} from "react-redux";
import {changeNameAction} from "../Store/nameReducer";

const Auth = ({userNameSwitcher, setUserNameSwitcher}) => {
    const dispatch = useDispatch();
    const [name, setName] = useState(null);

    const changeName = (event) => {
        if(event.key === 'Enter' || event.type === 'click'){
            dispatch(changeNameAction(name));
        }
    }

    return (
        <div className={classes.container}>
            <h2>Добрый день, как к вам обращаться?</h2>
            <input type="text" onChange={event => setName(event.target.value)} onKeyUp={event => changeName(event)}/>
            <div>
                <button onClick={setUserNameSwitcher(!userNameSwitcher)}>Пропустить</button>
                <button onClick={event => changeName(event)}>Готово</button>
            </div>
        </div>
    );
};

export default Auth;