/* eslint-disable */
import styles from './Banner.module.css';
import { ReactNode,MouseEvent } from 'react';
import {ReactComponent as ImgIconoEsquina} from '../../../assets2/imgIconEsquina.svg';
import {ReactComponent as FillPath} from '../../../assets2/fill.svg';
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
            <ImgIconoEsquina className={styles.Esquina}/>
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
