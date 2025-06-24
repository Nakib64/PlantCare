import React from "react";
import { format } from "date-fns";
import { useLoaderData, useParams } from "react-router";
const PlantDetails = () => {
  const plants = useLoaderData();
  const { _id } = useParams();
  const plantDetail = plants.find((plant) => plant._id == _id);
   

  return (
    <div>
        <h1 className="py-16 font-bold text-2xl font-mono text-center">Your Selected Plants Details</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 container mx-auto max-w-6xl px-3 lg:px-10 py-16 rounded-3xl bg-gradient-to-r from-indigo-300 to-white text-gray-700 items-center">
            <div>
                <img src={plantDetail.PhotoUrl} alt="adfasdfsd" className="w-full h-auto object-cover rounded-2xl" />
            </div>
            
            <div className=" text-2xl font-semibold flex flex-col gap-5">
                <h1 className="text-3xl font-bold">{plantDetail.name}</h1>
                <h2>Category: {plantDetail.category}</h2>
                <h2>Description: <span className="font-normal">{plantDetail.description}</span></h2>
                <h2>Health: {plantDetail.health}</h2>
            </div>
            <div className="text-2xl font-semibold flex flex-col gap-5">
                <h2>Last Watered : {format(new Date(plantDetail.lastDate), 'MM-dd-yyyy')}</h2>
                <h2>Next Watering Day:{format(new Date(plantDetail.nextDate), 'MM-dd-yyyy')} </h2>
                <h2>Watering Frequency: {plantDetail.wateringFreq}</h2>
                <h2>Care level: {plantDetail.CareLevel}</h2>
            </div>
            
      </div>
    </div>
  );
}; 

export default PlantDetails;
