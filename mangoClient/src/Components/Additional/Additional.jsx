import React from 'react';

const Additional = () => {
    return (
        <div className='bg-gradient-to-br from-indigo-400 to-white rounded-3xl px-10 max-w-6xl mx-auto container mt-36 text-gray-600 font-semibold text-lg p-10'>
            <h1 className='text-2xl lg:text-4xl font-bold text-indigo-800 text-center'>Top Plant Care Mistakes</h1>
            <p className='text-2xl font-bold mt-7'>Even the most enthusiastic plant parents can make mistakes. Here are some of the most common ones to avoid:</p>
            <div className='space-y-7 mt-7'>
                <p>
                    <span className='text-indigo-700 font-bold'>Overwatering : </span>
                    One of the most frequent errors. Many plants prefer to dry out between waterings. Always check the soil before watering.
                </p>
                <p>
                    <span className='text-indigo-700 font-bold'>Insufficient Light : </span>
                     Each plant has specific light requirements. Placing a sun-loving plant in a dark corner can stunt its growth or kill it.
                </p>
                <p>
                    <span className='text-indigo-700 font-bold'>Ignoring Drainage : </span>
                    Without proper drainage, water can accumulate at the bottom of pots, leading to root rot.
                </p>
                <p>
                    <span className='text-indigo-700 font-bold'>Using the Wrong Soil : </span>
                    Cacti, orchids, and ferns all need different soil types. Using the wrong mix can harm the plant.
                </p>
                <p>
                    <span className='text-indigo-700 font-bold'>Neglecting Pest Control : </span>
                    Regularly inspect your plants for signs of pests like spider mites or fungus gnats
                </p>
                
            </div>
        </div>
    );
};

export default Additional;