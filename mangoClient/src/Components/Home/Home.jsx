import React from 'react';
import Slider from '../slider/Slider';
import Additional from '../Additional/Additional';
import Additional2 from '../Additional/Additional2';
import Lotti from '../Lottie.jsx/Lottie';
import NewPlant from '../NewPlant/NewPlant';

const Home = () => {
    return (
        <div className='mt-20'>
            <Lotti></Lotti>
            <Slider></Slider>
            <NewPlant></NewPlant>
            <Additional></Additional>
            <Additional2></Additional2>
        </div>
    );
};

export default Home;