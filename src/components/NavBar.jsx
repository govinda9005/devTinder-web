import React from "react";
import { useSelector } from "react-redux";

const NavBar = () => {
  const user = useSelector((store) => store.user);

  return (
    <div className="navbar bg-base-300 shadow-sm px-4">
      {/* Left */}
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">DevTinder</a>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        {user && (
          <>
            {/* Welcome Text */}
            <p className="text-sm font-medium">
              Welcome, <span className="font-bold">{user.firstName}</span>
            </p>

            {/* Avatar Dropdown */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img
                    alt="Profile"
                    src={
                      user.photoUrl ||
                      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    }
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-10">
                <li>
                  <a>Profile</a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
