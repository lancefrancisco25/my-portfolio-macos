import css from './aboutme.module.css'
import Image from 'next/image'

import Tfb from '../popupcont'

function Aboutme({onMinimise, onClose, refy}) {
    return (
        <div className={css.aboutmecont}>
            <div className={css.tfb}>
                <Tfb  yellow={onMinimise} red={onClose} refy={refy} pos={0}/>
            </div>
            <div className={css.textcont}>
                <h1>Lance Luigi S. Francisco</h1>
                <div className={css.textDet}>
                    <p>Full Stack Developer</p>
                    <p>syncOS version 1.0</p>
                </div>
            </div>
            <div className={css.profileCont}>
                <Image draggable="false" src="/Lance Francisco fb.png" objectFit="cover" alt="my profile" layout="fill"/>
            </div>
        </div>
    )
}

export default Aboutme
