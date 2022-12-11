import React, {useState} from 'react';
import InputUserName from "../UI/InputUserName/InputUserName";
import classes from './style.module.scss'

const Auth = () => {
    const [userName, setUserName] = useState('');

    return (
        <div className={classes.container}>
            <h2>Добрый день, как к вам обращаться?</h2>
            <InputUserName setUserName={setUserName}/>
        </div>
    );
};

export default Auth;