import css from './appdrawer.module.css'
import Image from 'next/image'

function appdrawer({zIndex, onMinimise, varState, setStateOpen, opened, setOpen, mini, setMini, onOpen, refarray}) {
    function changeOpen(pos){
        if(mini[pos]){
            var newArr2 = [...mini]
            newArr2[pos] = false
            setMini(newArr2)
            onOpen(refarray[pos], pos)
        }
        if(!opened[pos] && !mini[pos]){
            var newArr = [...opened]
            newArr[pos] = true
            setOpen(newArr)
            var newArr2 = [...varState]
            newArr2[pos] = 1
            setStateOpen(newArr2)
            onOpen(refarray[pos], pos)
        }
        if(opened[pos] && !mini[pos]){
            if(refarray[pos].current.style.zIndex >= 100){
                onMinimise(refarray[pos], pos)
            }
        }
        zIndex(pos)
    }
    return (
        <div className={css.appDrawerCont}>

            <div className={css.appCat} onClick={() => changeOpen(0,)}>
                <div className={css.iconimage}>
                    <Image src="/myself.png" width={30} height={30} quality={100} alt="aboutme" objectFit="cover"/>
                </div>
                <div className={`${css.dot} ${(opened[0]) ? css.opened : ''}`}></div>
            </div>

            <div className={css.appCat} onClick={() => changeOpen(1)}>
                <div className={css.iconimage}>
                    <Image src="/question.png" width={30} height={30} quality={100} alt="aboutme" objectFit="cover"/>
                </div>
                <div className={`${css.dot} ${(opened[1]) ? css.opened : ''}`}></div>
            </div>
        </div>
    )
}

export default appdrawer
