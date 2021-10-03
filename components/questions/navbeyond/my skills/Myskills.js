import Image from 'next/image'
import css from './myskills.module.css'

import heroImage from "/public/code bg.png"
import heroImage2 from "/public/skills bg.png"
import Connect from '../connect/connect'

function Myskills() {
    return (
        <div className={css.paddingCont}>
            <div className={css.imageContRelativeBig} >
                <div className={css.upperLeftText}>
                    <p>MY SKILLS</p>
                    <h1>Coding since 3 years ago</h1>
                </div>
                <div className={css.gradientBehindTextBg} />
                <Image src={heroImage} objectFit="cover" layout="fill" alt="hero image" draggable="false"/>
            </div>

            <div className={css.imageContRelativeBig} >
                <div className={ css.surroundTextViolet}>
                    <p>KNOWLEDGE</p>
                    <h1>Programing Language, Library, Framework i know</h1>
                </div>
                <div className={css.backgroundCustom}>
                    <Image src={heroImage2} objectFit="cover" layout="fill" alt="hero image" draggable="false"/>
                </div>
            </div>
            <Connect/>
        </div>
    )
}

export default Myskills
