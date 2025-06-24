import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';

const Update = () => {
    const {_id} = useParams()
    
    const plants = useLoaderData()
    const plant = plants.find(plant=>plant._id == _id)
    const {PhotoUrl, name,email, CareLevel,wateringFreq,lastDate,health,description, nextDate,category} = plant;
    
    const navigate = useNavigate()
    const handleUpdate =(e)=>{
        e.preventDefault()
        const formData = new FormData(e.target)
        const plantData = Object.fromEntries(formData.entries())
        fetch(`https://mango-server-taupe.vercel.app/plants/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            }, body: JSON.stringify(plantData)
        })
        .then(res=>res.json())
        .then(data=>{
            toast('Update Successful!')
            navigate('/myPlants')
        })

    }

    return (
        <div className=" mt-10 min-h-screen max-w-full mx-auto px-4">
      <div className="bg-base-100 w-full max-w-xl mx-auto shadow-2xl flex flex-col p-6 sm:p-10 items-center rounded-lg">
        <h1 className="text-4xl sm:text-5xl font-bold p-3 text-center">
          Update Plant's Details
        </h1>
        <div className="w-full">
          <form className="w-full space-y-4" onSubmit={handleUpdate}>
            <label className="label">Plant name</label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Name"
              name="name"
              defaultValue={name}
            />

            <label className="label">Plant image</label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="image url..."
              name="PhotoUrl"
              defaultValue={PhotoUrl}
            />
            <label className="label" htmlFor="category">
              Category
            </label>
            <select
              id="category"
              name="category"
              className="input input-bordered w-full"
              defaultValue={category}
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="succulent">succulent</option>
              <option value="fern">fern</option>
              <option value="flowering">Flowering</option>
            </select>

            <label className="label">Description</label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Description..."
              name="description"
              defaultValue={description}
            />

            <label className="label" htmlFor="Care Level">
                Care Level
            </label>
            <select
              id="CareLevel"
              name="CareLevel"
              className="input input-bordered w-full"
              defaultValue={CareLevel}
            >
              <option value="" disabled>
                Select level
              </option>
              <option value="easy">Easy</option>
              <option value="moderate">Moderate</option>
              <option value="difficult">Difficult</option>
            </select>

            <label className="label" htmlFor="wateringFreq">
              Watering Frequency:
            </label>
            <select
              id="wateringFreq"
              name="wateringFreq"
              className="input input-bordered w-full"
              defaultValue={wateringFreq}
            >
              <option value="" disabled>
                Select Frequency
              </option>
              <option value="1">Every 1 day</option>
              <option value="2">Every 2 days</option>
              <option value="3">Every 3 days</option>
            </select>

            <label className="label">Last Watered Day</label>
            <input
              type="date"
              className="input input-bordered w-full"
              placeholder="date"
              name="lastDate"
              required
              defaultValue={lastDate}
            />

            <label className="label">Next Watering Day</label>
            <input
              type="date"
              className="input input-bordered w-full"
              placeholder="date"
              name="nextDate"
              required
              defaultValue={nextDate}
            />

            <label className="label" htmlFor="health">
              Health status
            </label>
            <select
              id="health"
              name="health"
              className="input input-bordered w-full"
              defaultValue= {health}
            >
              <option value="" disabled>
                status
              </option>
              <option value="bad">Bad</option>
              <option value="ok">Ok</option>
              <option value="better">Better</option>
            </select>

            <label className="label">User's Email</label>
            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="Email"
              name="email"
              value={email}
              readOnly
            />

            <button className="btn btn-success w-full mt-4" type='submit'>
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Update;