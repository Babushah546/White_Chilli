import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import IMG from "../../public/images/home/banner.png"; // Ensure this path is correct

const Profile = ({ user }) => {

  const { logOut } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await logOut();
      alert("Logout successful!");
    } catch (error) {
      console.error("Logout error:", error);
      // Optionally, you can show an error message to the user here
    }
  };

  return (
    <div>
      <div className="drawer drawer-end z-50">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full border-2 border-slate-950">
              {user?.photoURL ? (
                <img
                  alt="User Avatar"
                  src={user.photoURL}
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <img
                  alt="Default Avatar"
                  src={IMG} // Use the imported image correctly
                  className="w-full h-full object-cover rounded-full"
                />
              )}
            </div>
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <a href="/update-profile">Profile</a>
            </li>
            <li>
              <a>Order</a>
            </li>
            <li>
              <a>Setting</a>
            </li>
            <li>
              <a href="#" onClick={handleLogout}>Logout</a> {/* Ensure href="#" to prevent navigation */}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
