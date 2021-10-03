import {useState, useRef} from 'react'
import Image from 'next/image'


import css from './questions.module.css'

import SideBar from './sidebar/sidebar'
import Maincont from './maincont/Maincont'

function Questions({onMouseDown, varState, setStateOpen, onMinimise, onClose, refy}) {
    const [currentSec, setSec] = useState('About me')
    var preloaderRef = useRef(null)
    //(varState[0]) ? css.varState : ''
    if(varState[1] == 1){
        var randomtime = Math.floor((Math.random() * 2000) + 500) + 300;
        preloaderRef.current.style.display = 'flex'
        preloaderRef.current.style.opacity = 1
        preloaderRef.current.style.transform = `scale(1)`
        setTimeout(()=>{
            preloaderRef.current.style.transform = `scale(1.6)`
            preloaderRef.current.style.opacity = 0
        }, randomtime)
        setTimeout(()=>{
            preloaderRef.current.style.display = 'none'
        }, randomtime + 600)
        var newArr2 = [...varState]
        newArr2[1] = 0;
        setStateOpen(newArr2)
    }
    return (
        <div className={css.questionContMain}>
            <div className={css.preloaderCont} ref={preloaderRef}>
                <div className={css.iconimagePreloader}>
                    <Image src="/question.png" width={56} height={56} quality={100} alt="aboutme" objectFit="cover"/>
                </div>
            </div>
            
            <SideBar setSec={setSec} onMinimise={onMinimise} onClose={onClose} refy={refy}/>
            <Maincont onMouseDown={onMouseDown} onMinimise={onMinimise} currentSec={currentSec} />
        </div>
    )
}

export default Questions
