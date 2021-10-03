import {useRef, useEffect} from 'react'
import css from './preloader.module.css'

function preloader() {
    var clickStart = useRef(null);
    var video = useRef(null);
    var mainCont = useRef(null);
    function StartApp(){
        clickStart.current.style.transform = 'scale(0.6)';
        clickStart.current.style.opacity = '0';
        setTimeout(()=>{
            clickStart.current.style.display = 'none';
            video.current.play();
        }, 510)
    }
    useEffect(()=>{
        video.current.onended = function() {
            mainCont.current.style.display = 'none';
        };
    })

    return (
        <div ref={mainCont}>
            <div className={css.startPre} ref={clickStart} onClick={StartApp}>
                <h1>Press anywhere to start</h1>
            </div>
            <div className={css.videoCont}>
                <video ref={video} style={{width: '100%', height: '100%', objectFit: 'cover'}} src="https://res.cloudinary.com/duw2s4w0s/video/upload/v1633263036/macos_wallpaper_2_enuuqh.mp4" playsinline/> 
            </div>
        </div>
    )
}

export default preloader
