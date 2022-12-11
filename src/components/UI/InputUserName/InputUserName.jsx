import React from 'react';
import './style.module.scss';


const InputUserName = ({setUserName}) => {

    return (
        <input type="text" onChange={event => setUserName(event.target.value)}/>
    );
};

export default InputUserName;