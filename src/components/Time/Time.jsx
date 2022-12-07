import React, {useState} from 'react';
import dayjs from "dayjs";
import classes from './style.module.scss'
import "dayjs/locale/ru"

const Time = () => {
    dayjs.locale('ru');
    const [time, setTime] = useState(null);

    console.log(time);

    const getTime = () => {
        setTime(dayjs().format('HH:mm:ss, dddd, D MMMM'));
    }

    setInterval(getTime, 1000);

    return (
        <div className={classes.container}>
            <p>{time}</p>
        </div>
    );
};

export default Time;