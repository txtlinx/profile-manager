/* eslint-disable */
import {ReactNode,MouseEvent} from 'react'
import styles from './WarrantyCard.module.css'
import Button from '../Button'

type WarrantyCardProps = {
    icon: string,
    title: string,
    description: string,
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const WarrantyCard=({icon,title,description,onClick}:WarrantyCardProps)=>{
    return (
        <div className={styles.WarrantyCard}>
            <img src={icon} alt={'icon'}/>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className={styles.ButtonContainer}>
                <Button onClick={onClick}>Comenzar</Button>
            </div>
        </div>
    )
}

export default WarrantyCard;