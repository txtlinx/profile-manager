/* eslint-disable */

import { ReactNode } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { DotsItem } from 'react-alice-carousel/lib/types';
import Dot from './Dot';
import './Carousel.css';

type CarouselProps={
    items: ReactNode[];
}
const responsive = {
    0: { 
        items: 1,
    },
    568: { 
        items: 2,
        itemFit:'contain'
    },
}

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
            disableButtonsControls
            paddingRight={50}
            infinite
            autoPlay
            autoPlayInterval={3000}
        />
    )    
}

export default Carousel;