import React from "react";

const UserrCard = ({ user }) => {
  const { firstName, lastName, photoUrl, age, gender, about } = user || {};

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={
              photoUrl ||
              "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            }
            alt="User Photo"
            className="w-full h-72 object-cover"
          />
        </figure>

        <div className="card-body text-center">
          <h2 className="card-title justify-center">
            {firstName} {lastName}
          </h2>

          {age && gender && (
            <p className="text-gray-500">
              {age} years old, {gender}
            </p>
          )}

          <p>{about}</p>

          <div className="card-actions justify-center mt-4 gap-3">
            <button className="btn btn-outline btn-error">Ignore</button>
            <button className="btn btn-primary">Interested</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserrCard;
