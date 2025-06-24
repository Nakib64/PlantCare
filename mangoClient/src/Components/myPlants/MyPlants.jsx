import React, { useContext, useState } from "react";
import { AuthContext } from "../../AuthContext/AuthContext";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const MyPlants = () => {
  const { user } = useContext(AuthContext);
  const plants = useLoaderData();
  const filtered = plants.filter((plant) => plant.email == user.email);
  const [myPlants, setMyPlants] = useState(filtered);
  if (!myPlants.length) {
    return (
      <div className="font-mono text-4xl text-center flex justify-center items-center min-h-screen">
        <p>You didn't added any plants !!</p>
      </div>
    );
  }

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://mango-server-taupe.vercel.app/plants/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
            const afterDelete= myPlants.filter(plant=>plant._id != _id)
            setMyPlants(afterDelete)
          });
      }
    });
  };

  return (
    <div className="flex flex-col gap-20 mt-20">
      {myPlants.map((plant) => {
        const {
          PhotoUrl,
          name,
          CareLevel,
          wateringFreq,
          lastDate,
          health,
          description,
          nextDate,
          category,
          _id,
        } = plant;
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 container mx-auto max-w-6xl px-3 lg:px-10 py-16 rounded-3xl bg-gradient-to-r from-red-600 to-white text-gray-700 items-center">
            <div>
              <img
                src={PhotoUrl}
                alt="adfasdfsd"
                className="w-full aspect-square object-cover rounded-2xl"
              />
            </div>

            <div className=" text-2xl font-semibold flex flex-col gap-5">
              <h1 className="text-3xl font-bold">{name}</h1>
              <h2>Category: {category}</h2>
              <h2>
                Description: <span className="font-normal">{description}</span>
              </h2>
              <h2>Health: {health}</h2>
            </div>
            <div className="text-2xl font-semibold flex flex-col gap-5">
              <Link to={`/myPlants/${_id}`}>
                <button className="btn btn-accent w-full">Update</button>
              </Link>
              <button
                className="btn btn-warning w-full"
                onClick={() => handleDelete(_id)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyPlants;
