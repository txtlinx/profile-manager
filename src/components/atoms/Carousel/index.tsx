/* eslint-disable */

import { ReactNode } from 'react';
//preguntar  a nicolas si puedo usar esta libreria
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { DotsItem } from 'react-alice-carousel/lib/types';
import Dot from './Dot';
import './Carousel.css';

type CarouselProps={
    items: ReactNode[];
}
//define la cantidad de elementos que se mostrarán en el carrusel en función del ancho de la pantalla.
const responsive = {
    0: { 
        items: 1,
    },
    568: { 
        items: 2,
        itemFit:'contain'
    },
}
// función que renderiza los puntos de navegación del carrusel.
const renderDotsItem = ({isActive}:DotsItem)=>{
    return <Dot selected={isActive}/>
}

const Carousel = ({items}:CarouselProps)=>{
    return (
        <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}           
            renderDotsItem={renderDotsItem}
            disableButtonsControls={true}
            paddingRight={50}//define el expacio derecho del carousel
            infinite
            autoPlay
            autoPlayInterval={3000}
        />
    )    
}

export default Carousel;