import React, { useState } from "react";
import UserrCard from "./UserrCard";
import axios from "axios";
import { API_BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {
  const dispatch = useDispatch();
  const [showToast, setShowToast] = useState(false);

  const [firstName, setFirstName] = useState(user?.firstName || "");
  const [lastName, setLastName] = useState(user?.lastName || "");
  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl || "");
  const [age, setAge] = useState(user?.age || "");
  const [gender, setGender] = useState(user?.gender || "");
  const [about, setAbout] = useState(user?.about || "");

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    try {
      setLoading(true);
      setMessage("");

      const response = await axios.patch(
        `${API_BASE_URL}/profile/edit`,
        {
          firstName,
          lastName,
          photoUrl,
          age: Number(age),
          gender,
          about,
        },
        { withCredentials: true }
      );

      dispatch(addUser(response?.data?.data));
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);

    } catch (error) {
      console.error(error.response?.data || error.message);
      setMessage(error.response?.data?.message || "Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

 return (
  <>
  <div className="min-h-screen bg-base-200 flex justify-center items-center px-4">
    
    <div className="flex flex-col lg:flex-row items-stretch gap-6 w-full max-w-4xl">

      {/* FORM */}
      <div className="card w-full max-w-sm bg-base-100 shadow-xl h-[550px]">
        <div className="card-body flex flex-col justify-between overflow-y-auto">

          <div>
            <h2 className="text-xl text-center mb-2 font-semibold">
              Edit Profile
            </h2>

            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="input input-bordered w-full mb-2"
            />

            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="input input-bordered w-full mb-2"
            />

            <input
              type="text"
              placeholder="Photo URL"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
              className="input input-bordered w-full mb-2"
            />

            {photoUrl && (
              <div className="flex justify-center mb-2">
                <img
                  src={photoUrl}
                  className="w-14 h-14 rounded-full object-cover"
                />
              </div>
            )}

            <input
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="input input-bordered w-full mb-2"
            />

            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="select select-bordered w-full mb-2"
            >
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>

            <textarea
              placeholder="About"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              className="textarea textarea-bordered w-full"
            />
          </div>

          <button
            onClick={handleSave}
            className="btn btn-primary mt-3"
          >
            Save Profile
          </button>
        </div>
      </div>

      {/* PREVIEW */}
      <UserrCard
        user={{ firstName, lastName, photoUrl, age, gender, about }}
      />

    </div>
  </div>

  {showToast && (<div className="toast toast-top toast-center">
  <div className="alert alert-info">
    <span>Profile updated successfully!</span>
  </div>
</div>)}
  </>
);
};

export default EditProfile;