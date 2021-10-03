import {useRef, useState} from 'react'
import Image from 'next/image'

import css from './connect.module.css'

import facebook from "/public/social icons/facebook.png"
import instagram from "/public/social icons/instagram.png"
import discord from "/public/social icons/discord.png"

function Connect() {
    const [copy, setCopy] = useState('copy')
    function copyUser(ref) {
        var copyText = ref.current
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
        setCopy('copied')
    }

    var inputCopy = useRef(null)

    return (
        <div className={css.paddingCont}>
            <h1 className={css.titleBold}>Contact me</h1>
            <ul>

                <li className={css.appList}>
                    <div className={css.iconApp}>
                        <Image src={facebook} objectFit="cover" layout="fill" alt="hero image" draggable="false"/>
                    </div>
                    <div className={css.detailsApp}>
                        <div className={css.textDet}>
                            <h1>Facebook</h1>
                            <p>https://www.facebook.com/lance.francisco.25</p>
                        </div>
                        <div className={css.visitCont}><a href="https://www.facebook.com/lance.francisco.25" rel="noreferrer" target="_blank" >Visit</a></div>
                    </div>
                </li>

                <li className={css.appList}>
                    <div className={css.iconApp}>
                        <Image src={instagram} objectFit="cover" layout="fill" alt="hero image" draggable="false"/>
                    </div>
                    <div className={css.detailsApp}>
                        <div className={css.textDet}>
                            <h1>Instagram</h1>
                            <p>https://www.instagram.com/cocoyfranz/</p>
                        </div>
                        <div className={css.visitCont}><a href="https://www.instagram.com/cocoyfranz/" rel="noreferrer" target="_blank" >Visit</a></div>
                    </div>
                </li>

                <li className={css.appList}>
                    <div className={css.iconApp}>
                        <Image src={discord} objectFit="cover" layout="fill" alt="hero image" draggable="false"/>
                    </div>
                    <div className={css.detailsApp}>
                        <div className={css.textDet}>
                            <h1>Discord</h1>
                            <p>imSinginin#1009</p>
                        </div>
                        <div className={css.visitCont} onClick={() => copyUser(inputCopy)}><a>{copy}</a></div>
                    </div>
                </li>

            </ul>
            <input style={{display: 'none'}} type="text" value="imSinginin#1009" ref={inputCopy}/>
        </div>
    )
}

export default Connect
