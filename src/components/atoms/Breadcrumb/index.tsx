import { NavLink /* , useLocation */ } from 'react-router-dom';
import { ReactNode } from 'react';
import styles from './Breadcrumb.module.css';

type Element = {
  legend: ReactNode;
  url: string;
};

type Props = {
  elements: Element[];
  id?: string;
};

const Breadcrumb = ({ elements, id }: Props) => {
  return (
    <ul className={styles.Breadcrumb} data-testid={id}>
      {elements.map(({ legend, url }, index) => {
        return (
          <li key={index}>
            <NavLink to={url}>{legend}</NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default Breadcrumb;
