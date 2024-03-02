import React from "react";

const Cast = ({ image, castName, role }) => (
  <div className="flex flex-col items-center">
    <div className="w-32 h-32">
      <img
        src={`https://image.tmdb.org/t/p/original${image}`}
        alt="cast and crew members"
        className="w-full h-full rounded-full object-center object-cover"
      />
    </div>
    <h1 className="text-xl text-gray-800">{castName}</h1>
    <h5 className="text-sm text-gray-500">as {role}</h5>
  </div>
);

export default Cast;
