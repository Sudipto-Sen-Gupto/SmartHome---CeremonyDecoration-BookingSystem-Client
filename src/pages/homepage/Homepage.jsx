import React from 'react';
import Herosection from '../../component/heroSection/Herosection';
import Map from '../../component/Map/Map';
import HomeDecorCard from '../../component/homeDecor/HomeDecorCard';
import Review from '../reviews/review';
import Slider from '../../component/slider/Slider';
import Gallery from '../../component/inspirational/Gallery';
import HowItWorks from '../../component/works/HowItWorks';
import CTA from '../../component/CTN/CTA';

const Homepage = () => {
    return (
        <div >
            <Herosection></Herosection>
            <Slider></Slider>
         
            <HomeDecorCard></HomeDecorCard>
               <Gallery></Gallery>
               <HowItWorks></HowItWorks>
           <Review></Review>
            <Map></Map>
            <CTA></CTA>
        </div>
    );
};

export default Homepage;