import React, { useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../AuthContext/AuthContext";
import { RiMenu2Fill } from "react-icons/ri";

const Navbar = ({setTheme, themes}) => {
  const { user, logout, setUser } = useContext(AuthContext);
  const links = (
    <div className="flex gap-9">
      <NavLink to="/">Home</NavLink>

      <NavLink to="/allPlants">All Plants</NavLink>

      <NavLink to={"/add"}>Add Plants</NavLink>

      <NavLink to={"/myPlants"}>My Plants</NavLink>
    </div>
  );
  const authentication = (
    <div className="flex gap-6">
      <NavLink to={"/login"}>Login</NavLink>
      <NavLink to={"/register"}>Register</NavLink>
    </div>
  );

  const handleLogout = () => {
    logout().then(() => {
      setUser(null);
    });
  };
  const afterLogin = (
    <div className="flex gap-6">
      <div className="w-12 rounded-full">
        <img
          src={user?.photoURL}
          alt=""
          className="object-cover w-full rounded-full"
        />
      </div>
      <button className="btn btn-primary btn-soft" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );

  const handleTheme=()=>{
    setTheme(!themes)
  }
  return (
    <div className="bg-gray-800 lg:text-white -top-[1px] sticky z-30">
      <div className="lg:hidden flex justify-between items-center py-2">
        <div className="flex gap-4">
            <button className="btn" popoverTarget="popover-1">
          <RiMenu2Fill size={30} />
        </button>
        <div className="flex gap-2 items-center">
          <img src="https://i.ibb.co/DDFdT06H/front-view-potted-plant-wooden-surface.jpg" alt="" className="w-12 rounded-full"/>
          <p className="font-bold ">Plants</p>
        </div>

        <ul
          className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm space-y-16 text-xl top-10"
          popover="auto"
          id="popover-1"
          style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */}
        >
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/allPlants">All Plants</NavLink>
          </li>
          <li>
            <NavLink to="/add">Add Plants</NavLink>
          </li>
          <li>
            <NavLink to={"/myPlants"}>My Plants</NavLink>
          </li>
          <li>
             {user ? afterLogin : authentication}
          </li>
        </ul>
        </div>
        <div>
          <label className="toggle text-base-content mr-8 ">
  <input type="checkbox" value="synthwave"  onClick={handleTheme} />

  <svg  aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

  <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

          </label>
        </div>
        
      </div>
      <div className="hidden lg:flex justify-between container mx-auto px-3 py-5 items-center">
        <div className="flex gap-2 items-center">
          <img src="https://i.ibb.co/DDFdT06H/front-view-potted-plant-wooden-surface.jpg" alt="" className="w-12 rounded-full"/>
          <p className="font-bold ">Plants</p>
        </div>
        <div className="">{links}</div>
        
          <div className="flex gap-8 items-center">
          <label className="toggle text-base-content">
  <input type="checkbox" value="synthwave"  onClick={handleTheme} />

  <svg  aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

  <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

          </label>
          {user ? afterLogin :authentication}
        </div>
       
      </div>
    </div>
  );
};

export default Navbar;
