import React from 'react';
import classes from './style.module.scss'
import Settings from "../UI/Settings/Settings";
import Time from "../Time/Time";

const Header = () => {
    return (
        <div className={classes.container}>
            <Time></Time>
            <div>
                <h1>Legend Report</h1>
                <Settings></Settings>
            </div>
        </div>
    );
};

export default Header;