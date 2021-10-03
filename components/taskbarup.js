import css from "./taskbarup.module.css"
import React, { useState, useEffect } from 'react';
import Togglesvg from './icons/toggle'
import AppleLogo from './icons/apple'

function Taskbarup() {

    const [time, setTime] = useState(timeRet());
    const [cont, setCont] = useState('transparent')

    function timeRet(){
        var d = new Date(); // for now
        var h = d.getHours(); // => 9
        var m= d.getMinutes(); // =>  30
        var p = (h > 12) ? 'PM' : 'AM'
        var nm = (m > 9) ? m : '0' + m;
        h = (h > 12 ) ? h - 12 : h
        return `${h}:${nm} ${p}`
    }

    function clickCont(){
        setCont((cont == 'transparent') ? ' rgba(255, 255, 255, 0.31)' : 'transparent')
    }

    useEffect(() => {
        var d = new Date(); // for now
            const timer = setInterval(() => setTime(timeRet()), (60000 - (d.getSeconds * 1000)));
            return () => clearInterval(timer);
    }, [time]);


    return (
        <div className={css.headerCont}>
            <div className={css.left}>
                <AppleLogo className={css.svg} fill="dark"/>
            </div>
            <div className={css.right}>
                <div className={css.toggleCss} style={{background: cont}} onClick={clickCont}>
                    <Togglesvg  className={css.svg}  fill="dark"/>
                </div>
                <p className={css.headTextSmall}>{time}</p>
            </div>
        </div>
    )
}

export default Taskbarup
