import React from "react";

const Additional2 = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-400 to-white rounded-3xl px-10 max-w-6xl mx-auto container mt-36 text-gray-600 font-semibold text-lg p-10">
      <h1 className="text-2xl lg:text-4xl font-bold text-indigo-800 text-center">
        Beginner-Friendly Plants
      </h1>
      <p className="text-2xl font-bold mt-7">
        If you're new to plant care, start with plants that are resilient and
        low-maintenance:
      </p>
      <div className="space-y-7 mt-7">
        <p>
          <span className="text-indigo-700 font-bold">
            Snake Plant (Sansevieria) :{" "}
          </span>
          Almost indestructible, tolerates low light, and doesn’t need frequent
          watering
        </p>
        <p>
          <span className="text-indigo-700 font-bold">
            Pothos (Epipremnum aureum) :{" "}
          </span>
          Grows quickly, thrives in various lighting, and is forgiving if you
          forget to water.
        </p>
        <p>
          <span className="text-indigo-700 font-bold">
            ZZ Plant (Zamioculcas zamiifolia) :{" "}
          </span>
          Extremely drought-tolerant and thrives in low light.
        </p>
        <p>
          <span className="text-indigo-700 font-bold">
            Spider Plant (Chlorophytum comosum) :{" "}
          </span>
          Easy to care for and produces "babies" that can be propagated.{" "}
        </p>
        <p>
          <span className="text-indigo-700 font-bold">
            Peace Lily (Spathiphyllum) :{" "}
          </span>
          Prefers low light and droops when it needs water, making it easy to
          read{" "}
        </p>
      </div>
    </div>
  );
};

export default Additional2;
