import Image from 'next/image'

import css from './aboutme.module.css'

import heroImage from "/public/lanceherro.jpg"
import halfimage1 from "/public/lancesubherosep.jpg"
import halfimage2 from "/public/lancesubherosep2.jpg"
import halfimage3 from "/public/lance dogs 2.jpg"
import halfimage4 from "/public/lance image sad.jpg"
import halfimage5 from "/public/lance water.jpg"
import halfimage6 from "/public/lance calm.jpg"

function aboutme() {
    return (
        <div className={css.paddingCont}>
            <div className={css.Separate2Images}>

                <div className={css.imageContRelativeBig} style={{width: '70%'}}>
                    <div className={css.upperLeftText}>
                        <h1>Lance Francisco</h1>
                        <p>A Full Stack Developer</p>
                    </div>
                    <div className={css.gradientBehindTextBg} />
                    <Image src={heroImage} objectFit="cover" layout="fill" alt="hero image" draggable="false"/>
                </div>
                
                <div className={css.imageContDuo}  style={{width: '30%'}}>
                    <Image src={halfimage2} objectFit="cover" layout="fill" alt="hero image" draggable="false"/>
                </div>
            </div>

            <div className={css.Separate2ImagesSmall}>
                <div className={css.imageContDuo}>
                    <Image src={halfimage1} objectFit="cover" layout="fill" alt="hero image" draggable="false"/>    
                </div>
                <div className={css.imageContDuo}>
                    <Image src={halfimage3} objectFit="cover" layout="fill" alt="hero image" draggable="false"/>    
                </div>
                <div className={css.imageContDuo}>
                    <Image src={halfimage4} objectFit="cover" layout="fill" alt="hero image" draggable="false"/>    
                </div>
                <div className={css.imageContDuo}>
                    <Image src={halfimage5} objectFit="cover" layout="fill" alt="hero image" draggable="false"/>    
                </div>
                <div className={css.imageContDuo}>
                    <Image src={halfimage6} objectFit="cover" layout="fill" alt="hero image" draggable="false"/>    
                </div>

            </div>

        </div>
            
    )
}

export default aboutme
