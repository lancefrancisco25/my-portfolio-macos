import Image from 'next/image'

import Tfb from '../../popupcont'
import css from './sidebar.module.css'

import aboutme from '../../../public/icons/profile.png'
import education from '../../../public/icons/education.png'
import skills from '../../../public/icons/skills.png'
import connect from '../../../public/icons/connect.png'

function Sidebar({onMinimise, onClose, refy, setSec}) {
    function set(s){
        setSec(s)
    }
    return (
        <div className={css.mainWrapper}>
            <div className={css.tfb}>
                <Tfb  yellow={onMinimise} red={onClose} refy={refy} pos={1}/>
            </div>
            <div className={css.bellowTrafficCont}>
                <div className={css.searchCont}>
                    <input type="text" placeholder="Search"></input>
                </div>

                <div className={css.bellowSearchSep}>
                    <p className={css.headsmall}>Category</p>
                    
                    <ul className={css.listCat}>
                        <li className={css.listCatClick} onClick={()=> set('About me')}>
                            <div className={css.iconCat}>
                                <Image draggable="false" src={aboutme} objectFit="cover" alt="my profile" layout="fill"/>    
                            </div>
                            <p className={css.catName}>About Me</p>
                        </li>
                        <li className={css.listCatClick} onClick={()=> set('My Education')}>
                            <div className={css.iconCat}>
                                <Image draggable="false" src={education} objectFit="cover" alt="my profile" layout="fill"/>    
                            </div>
                            <p className={css.catName}>My Education</p>
                        </li>
                        <li className={css.listCatClick} onClick={()=> set('Skills / Contact me')}>
                            <div className={css.iconCat}>
                                <Image draggable="false" src={skills} objectFit="cover" alt="my profile" layout="fill"/>    
                            </div>
                            <p className={css.catName}>Skills / Contact me</p>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Sidebar
