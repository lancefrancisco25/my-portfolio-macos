import Image from 'next/image'
import {useRef} from 'react'
import css from './login.module.css'

import wallpaper from '/public/dk-wall.jpg'


function login({click, endy}) {
    var op = useRef(null)
    var bg = useRef(null)
    if(endy == true){
        bg.current.style.transform = 'scale(1.2)'
    }

    function end(){
        bg.current.style.transform = 'scale(1)'
        setTimeout(()=>{
            click()
        }, 1600)
    }
    return (
        <div className={css.zIndex} ref={op}>
            <div>
                <p className={css.details}>SyncOS v1, A copy of MacOS Big Sur</p>
                <div className={css.loginCont}>
                    <div className={css.profileCont}>
                        <Image draggable="false" src="/Lance Francisco fb.png" objectFit="cover" alt="my profile" layout="fill"/>
                    </div>

                    <h1 className={css.titlePort}>Lance Franciscos Website</h1>

                    <div className={css.buttonEnter} onClick={end}>
                        <p>Click to Enter</p>
                    </div>
                </div>
            </div>

            <div className={css.background} ref={bg}>
                <div className={css.relativebg}>
                    <Image draggable="false" src={wallpaper} objectFit="cover" layout="fill" quality="100" alt="macos background"/>
                </div>
            </div>
        </div>
    )
}

export default login
