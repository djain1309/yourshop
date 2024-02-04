import { useEffect, useState } from "react";
import classes from "./StopWatch.module.css"

const StopWatch = () => {

    const [time, setTime] = useState({hour: 0, min: 0, sec: 0});
    const [running, setRunning] = useState(false);

    useEffect (() => {
        let interval;
        if (running) {
            interval = setInterval(() => {
                // setTime((prev) => prev+1)
                setTime((prev) => {
                    let {hour, min, sec} = prev;
                    sec++;
                    if (sec > 59) {
                        min++;
                        sec = 0;
                    }
                    if (min > 59) {
                        hour++;
                        min = 0;
                    }
                    return {...prev, hour, min, sec};
                })
            }, 1000);
        }

        return () => {
            clearInterval(interval)
        }

    }, [running])

    const startStopHandler = () => {
        setRunning(!running);
    }

    const showReset = (running || time.sec > 0 || time.min > 0 || time.hour > 0);

    const resetHandler = () => {
        setRunning(false);
        setTime({hour: 0, min: 0, sec: 0});
    }


    return (<div className={classes.watch}> 
        <h3>StopWatch</h3>
        <h3>{time.hour} : {time.min} : {time.sec} </h3>
        <button onClick={startStopHandler}>{running ? 'Pause' : 'Start'}</button>
        { showReset && <button onClick={resetHandler}>Reset</button>}
    </div>)
}   

export default StopWatch;