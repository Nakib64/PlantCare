import React, { useEffect, useState } from 'react';

const NewPlant = () => {
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        fetch('https://mango-server-taupe.vercel.app/plants')
            .then(res => res.json())
            .then(data => {
                // Limit to maximum 6 items
                setPlants(data.slice(0, 6));
            })
            .catch(err => console.error('Failed to fetch plants:', err));
    }, []);

    return (
        <div className='max-w-6xl mx-auto bg-gradient-to-r from-indigo-200 to-white p-6 rounded-4xl mt-10'>
            <h1 className='text-center text-4xl font-mono mb-8'>Our New Plants</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {plants.map((plant, index) => (
                    <div key={index} className='bg-white rounded-2xl shadow-md p-4 text-center'>
                        <img 
                            src={plant.PhotoUrl} 
                            alt={plant.name} 
                            className='w-full h-48 object-cover rounded-xl mb-4' 
                        />
                        <h2 className='text-xl font-semibold'>{plant.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewPlant;
