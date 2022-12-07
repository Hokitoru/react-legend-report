import React from 'react';
import classes from './style.module.scss'
import settingsBlack from '../../../media/images/settings_black.svg';
import settingsWhite from '../../../media/images/settings_white.svg';

const Settings = () => {
    return (
        <div className={classes.container}>
            <img src={settingsWhite} alt="settings"/>
        </div>
    );
};

export default Settings;