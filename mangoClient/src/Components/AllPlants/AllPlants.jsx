import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";

const AllPlants = () => {
  const Plants = useLoaderData();

if(Plants.length == 0){
  return(
    <div className=" py-10 text-center text-4xl font-mono">
      <p>There is no plant in the page !!</p>
    </div>
  )
}
 
  const handleSelect = async (e) => {
  };
  return (
    <div className="mt-20">
      <div className="font-mono">
        <p className="text-center text-xl lg:text-2xl py-10">
          Reconnect with nature through our curated selection of indoor and
          outdoor plants. Sustainably grown and carefully nurtured, each plant
          is ready to find its place in your world.
        </p>
      </div>
      <div className="rounded-2xl p-2 bg-gradient-to-t from-red-200 to-indigo-200 pb-16">
        <h1 className="text-center text-4xl lg:text-6xl p-12 text-black font-bold">
          Our All Plants
        </h1>
        <div className="lg:p-10 py-10">
          <p>Sort by:</p>
          <label className="label" htmlFor="next watering day">
            Next Watering Date:
          </label>
          <select
            id="sortDate"
            name="sortDate"
            className="input input-bordered w-fit "
            onChange={handleSelect}
          >
            <option value="" disabled>
              Select
            </option>
            <option value="">Default</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <table className="max-w-6xl container mx-auto  bg-indigo-200 text-gray-500 rounded-2xl">
          <thead>
            <tr className="space-x-3 ">
              <th className=" py-3 lg:px-5 text-center text-md lg:text-2xl">
                Name
              </th>
              <th className=" py-3 lg:px-5 text-center text-md lg:text-2xl">
                Category
              </th>
              <th className=" py-3 lg:px-5 text-center text-md lg:text-2xl">
                Watering Frequency
              </th>
              <th className=" py-3 lg:px-5 text-center text-md lg:text-2xl">
                View Details
              </th>
            </tr>
          </thead>
          <tbody>
            {Plants.map((plant) => {
              return (
                <tr className="space-y-5 border-t-1 border-t-white " key={plant._id}>
                  <td className="py-3 lg:px-5 text-center text-md lg:text-2xl ">
                    {plant.name}
                  </td>
                  <td className="py-3 lg:px-5 text-center text-md lg:text-2xl">
                    {plant.category}
                  </td>
                  <td className="py-3 lg:px-5 text-center text-md lg:text-2xl">
                    {plant.wateringFreq}
                  </td>
                  <td className="py-3 lg:px-5 text-center text-md lg:text-2xl">
                    <Link to={`/allPlants/${plant._id}`}>
                      <button className="btn btn-primary btn-outline">
                        Details
                      </button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllPlants;
