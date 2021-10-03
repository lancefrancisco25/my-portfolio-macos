import css from './popupcont.module.css'

function popupcont({red, yellow, green, refy, pos}) {
    return (
        <div className={css.pc}>
            <div className={css.click} onClick={() => red(refy, pos)} style={{backgroundColor: (!red) ? 'rgba(255, 255, 255, 0.4)' : '#FF453A'}}></div>
            <div className={css.click} onClick={() => yellow(refy, pos)} style={{backgroundColor: (!yellow) ? 'rgba(255, 255, 255, 0.4)' : '#FFD60A'}}></div>
            <div className={css.click} onClick={green} style={{backgroundColor: (!green) ? 'rgba(255, 255, 255, 0.4)': '#30D158'}}></div>
        </div>
    )
}

export default popupcont
