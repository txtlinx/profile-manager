/* eslint-disable */
import styles from './Dot.module.css';

type DotProps={
    selected:boolean
}

const Dot =({selected}:DotProps)=>{
    const cssClassName= `${styles.Dot} ${selected?styles.selected:''}`
    return(
        <li className={cssClassName}></li>
    )
}

export default Dot;