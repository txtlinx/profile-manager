/* eslint-disable */
import styles from './Checkbox.module.css';
import {useState,useEffect, ChangeEvent} from 'react';
type CheckboxProps ={
  label?:string;
  checked:boolean;
  onChange: (checked:boolean)=>void;
}

const Checkbox = ({label,checked,onChange}:CheckboxProps)=>{

  const [isChecked,setIsChecked]= useState<boolean>(checked);
  
  useEffect(
    ()=>setIsChecked(checked),
    [checked]
  )

  const handleChange=(event:ChangeEvent<HTMLInputElement>)=>{
    const value= event.target.checked;
    setIsChecked(value);
    onChange(value);
  }

  return(
    <label className={styles.Container}>
      <input className={styles.Checkbox} type="checkbox" checked={isChecked} onChange={handleChange}/>
      <span className={styles.Checkmark}></span>
      {label}
    </label>
  )
}

export default Checkbox;

// color: #1E1E1E; row
// color: #000512;  header
