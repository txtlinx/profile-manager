import { ReactNode, useState, useRef, useEffect } from 'react';
import styles from './DropdownMobile.module.css';
import { ReactComponent as DropdownIcon } from '../../../assets/img/desplegable.svg';

type Item = {
  icon: ReactNode;
  label: string;
};
type DropdownMobileProps = {
  items: Item[];
};

const DropdownMobile = ({ items }: DropdownMobileProps) => {
  const [open, setOpen] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleCloseList = (event: MouseEvent) => {
      const $list = listRef.current;
      if (
        $list &&
        event.target !== $list &&
        !$list.contains(event.target as Node)
      ) {
        if (open) {
          setOpen(false);
        }
      }
    };
    document.addEventListener('click', handleCloseList);
    return () => {
      document.removeEventListener('click', handleCloseList);
    };
  }, [open]);

  return (
    <div
      className={styles.DropdownMobile}
      ref={listRef}
      data-testid="dropdown-mobile"
    >
      <div
        className={styles.Clickable}
        onClick={() => setOpen((prev) => !prev)}
        data-testid="clickable"
      >
        <DropdownIcon />
        <span>Más</span>
      </div>
      {open && (
        <div className={styles.List} data-testid="list">
          {items.map(({ icon, label }, index) => (
            <div className={styles.Item} key={index} data-testid="item">
              <span className={styles.Icon} data-testid={`icon-${index}`}>
                {icon}
              </span>
              <span className={styles.Label} data-testid={`label-${index}`}>
                {label}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMobile;
