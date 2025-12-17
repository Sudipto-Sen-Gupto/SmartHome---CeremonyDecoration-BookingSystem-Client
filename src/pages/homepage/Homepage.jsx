import React from 'react';
import Herosection from '../../component/heroSection/Herosection';
import Map from '../../component/Map/Map';
import HomeDecorCard from '../../component/homeDecor/HomeDecorCard';

const Homepage = () => {
    return (
        <div>
            <Herosection></Herosection>
            <HomeDecorCard></HomeDecorCard>
            <Map></Map>
        </div>
    );
};

export default Homepage;