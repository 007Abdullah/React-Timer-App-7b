import React, { useState, useEffect } from 'react';
import Calculation from './Calculation';
const Time = () => {

    const [time, setTime] = useState<number>(0);
    const [timeSecond, setTimeSecond] = useState<number>(0);
    const [timeArray, setTimerArray] = useState<Array<number | string>>([]);

    useEffect(() => {
        setTimerArray(Calculation(timeSecond));
    }, [timeSecond]);

    function startTimer(event: object): any {
        console.log('Click  Working');

        const interval: any = setInterval(() => {
            setTimeSecond((prev) => prev + 1);
        }, 1000);

        setTime(interval);
    }

    function stopTimer(): any {
        console.log('Click Working');
        clearInterval(time);
    }

    function resetTimer(): any {
        console.log('Click Working');
        clearInterval(time);
        setTimeSecond(0);
    }

    return (
        <React.Fragment>
            <div className="main_div">
                <h1>Timer App</h1>
                <div className="main_seocnd">
                    <div style={{ width: '35%', border: '1px solid black', margin: '20px' }}>
                        <h1>{timeArray[0]}</h1>
                    </div>
                    <div style={{ width: '35%', border: '1px solid black', margin: '20px' }}>
                        <h1>{timeArray[1]}</h1>
                    </div>
                    <div style={{ width: '35%', border: '1px solid black', margin: '20px' }}>
                        <h1>{timeArray[2]}</h1>
                    </div>
                </div>
                <br />
                <br />
                <div className="main_seocnd">
                    <div style={{ width: '35%', margin: '20px' }}>
                        <button onClick={startTimer} style={{ padding: '20px', width: '100%' }}>Play</button>
                    </div>
                    <div style={{ width: '35%', margin: '20px' }}>
                        <button onClick={stopTimer} style={{ padding: '20px', width: '100%' }}>Stop</button>
                    </div>
                    <div style={{ width: '35%', margin: '20px' }}>
                        <button onClick={resetTimer} style={{ padding: '20px', width: '100%' }}>Reset</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}


export default Time;