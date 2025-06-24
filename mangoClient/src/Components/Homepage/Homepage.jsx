import React, { useState } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
import { Bounce, ToastContainer } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext/AuthContext";
import Footer from "../footer/Footer";

const Homepage = () => {
  const {loading} = useContext(AuthContext)
  const [themes, setTheme] = useState(true)
  if(loading){
    return (
      <div className="flex justify-center mt-12"><span className="loading loading-spinner loading-xl"></span></div>
    )
  }
  return (
    <div data-theme={themes ? 'light' : ''}> 
      <Navbar setTheme={setTheme} themes={themes}></Navbar>
      <Outlet></Outlet>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      
      <Footer></Footer>
      
    </div>
    
  );
};

export default Homepage;
