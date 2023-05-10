import styles from './InputSearch.module.css';
import { InputSearchProps } from './InputSearch.type';
const InputSearch = ({
  id,
  name,
  value,
  placeholder,
  icon,
  maxLength,
  onChange,
  onBlur,
}: InputSearchProps) => {
  return (
    <div className={styles.InputSearch}>
      <input
        data-testid={id}
        name={name}
        type="text"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        maxLength={maxLength}
        placeholder={placeholder}
      />
      <div className={styles.separator}></div>
      <div className={styles.IconContainer}>{icon}</div>
    </div>
  );
};

export default InputSearch;
