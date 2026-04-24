import React from 'react';
import Herosection from '../../component/heroSection/Herosection';
import Map from '../../component/Map/Map';
import HomeDecorCard from '../../component/homeDecor/HomeDecorCard';
import Review from '../reviews/review';
import Slider from '../../component/slider/Slider';

const Homepage = () => {
    return (
        <div>
            <Herosection></Herosection>
            <Slider></Slider>
            <HomeDecorCard></HomeDecorCard>
           <Review></Review>
            <Map></Map>
        </div>
    );
};

export default Homepage;