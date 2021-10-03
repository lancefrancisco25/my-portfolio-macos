import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import css from './maincont.module.css'

import Aboutme from '../navbeyond/aboutMe/aboutme'
import MyEducation from '../navbeyond/myeducation/myeducation'
import Myskills from '../navbeyond/my skills/Myskills'

function Maincont({currentSec, onMouseDown}) {
    var objSelect = {
        'About me': <Aboutme />,
        'My Education': <MyEducation />,
        'Skills / Contact me': <Myskills />,
    }
    return (
        <div className={css.mainContWidth}>
            <div className={css.HeaderCat}>
                <div className={css.clickDrag} onMouseDown={onMouseDown}></div>
                <p>{currentSec}</p>
            </div>
            <SimpleBar style={{ height: 'calc(100% - 50px)' }}>
            {
                    objSelect[currentSec]
            }                
            </SimpleBar>

        </div>
    )
}

export default Maincont
