/* eslint-disable */
import styles from './Banner.module.css';
import { ReactNode,MouseEvent } from 'react';
import {ReactComponent as ImgCorner} from '../../../assets/img/imgCorner.svg';
import {ReactComponent as FillPath} from '../../../assets/fill.svg';
import Button from '../Button';
type BannerProps = {
  title: string;
  description: string;
  picture: string;
  background: string;
  buttonText?:string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

const Banner = ({ title, description, picture,background,buttonText,onClick }: BannerProps) => {
  return (
    <div className={styles.Banner}>
      <img src={background} alt={'background'} className={styles.Background}/>
      <div className={styles.Content}>
        <div className={styles.Title}>
            <ImgCorner className={styles.Corner}/>
            <h1>{title}</h1>
        </div>
        <p>{description}</p>
        {buttonText && <Button onClick={
          onClick
        }>{buttonText}</Button>}
      </div>
      <div className={styles.imageContainer}>
        <img src={picture} alt={title} />
      </div>
    </div>
  );
};
export default Banner;
