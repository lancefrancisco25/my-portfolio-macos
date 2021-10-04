import {useRef, useState, useEffect} from 'react'
import css from './preloader.module.css'

import Login from '../login/login'

function Preloader() {
    var clickStart = useRef(null);
    var video = useRef(null);
    var mainCont = useRef(null);
    var videoCont = useRef(null);

    const [endy, setEnd] = useState(false)

    function StartApp(){
        clickStart.current.style.transform = 'scale(0.6)';
        clickStart.current.style.opacity = '0';
        setTimeout(()=>{
            clickStart.current.style.display = 'none';
            mainCont.current.style.cursor = 'none'
            video.current.play();
            setEnd(false)
        }, 510)
    }
    useEffect(()=>{
        video.current.onended = function() {
            videoCont.current.style.display = 'none';
            //mainCont.current.style.display = 'none';
            mainCont.current.style.cursor = 'initial'
            setEnd(true)
        };
    })

    function click(){
        setTimeout(()=>{
            mainCont.current.style.display = 'none';
        }, 200)
    }

    return (
        <div ref={mainCont}>
            <Login click={click} endy={endy}/>

            <div className={css.startPre} ref={clickStart} onClick={StartApp}>
                <h1>Press anywhere to start</h1>
            </div>
            <div className={css.videoCont} ref={videoCont}>
                <video ref={video} className={css.video} src="https://res.cloudinary.com/duw2s4w0s/video/upload/v1633263036/macos_wallpaper_2_enuuqh.mp4" playsInline/> 
            </div>
        </div>
    )
}

export default Preloader
