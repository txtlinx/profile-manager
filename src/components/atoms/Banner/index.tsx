/* eslint-disable */
import styles from './Banner.module.css';
import { ReactNode } from 'react';
import {ReactComponent as ImgIconoEsquina} from '../../../assets2/imgIconEsquina.svg';
import {ReactComponent as FillPath} from '../../../assets2/fill.svg';
type BannerProps = {
  title: string;
  description: string;
  picture: string;
  background: string;

  
};

const Banner = ({ title, description, picture,background }: BannerProps) => {
  return (
    <div className={styles.Banner}>
      <img src={background} alt={'background'} className={styles.Background}/>
      <div className={styles.Content}>
        <div className={styles.Title}>
            <ImgIconoEsquina className={styles.Esquina}/>
            <h1>{title}</h1>
        </div>
        <p>{description}</p>
      </div>
      <div className={styles.imageContainer}>
        <img src={picture} alt={title} />
      </div>
    </div>
  );
};
export default Banner;
