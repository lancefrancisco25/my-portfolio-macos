import Image from 'next/image'
import css from './myeducation.module.css'

import heroImage from "/public/psucover.jpg"
import heroImage2 from "/public/cbc.jpg"


function myeducation() {
    return (
        <div className={css.paddingCont}>
            <div className={css.imageContRelativeBig} >
                <div className={css.upperLeftText}>
                    <h1>Palawan State University</h1>
                    <p>Elementary - Grade 9</p>
                </div>
                <div className={css.gradientBehindTextBg} />
                <Image src={heroImage} objectFit="cover" layout="fill" alt="hero image" draggable="false"/>
            </div>
            <div className={css.imageContRelativeBig} >
                <div className={css.upperLeftText}>
                    <h1>Calvary Baptist Academy</h1>
                    <p>Kinder - Preparatory</p>
                </div>
                <div className={css.gradientBehindTextBg} />
                <Image src={heroImage2} objectFit="cover" layout="fill" alt="hero image" draggable="false"/>
            </div>
        </div>
    )
}

export default myeducation
