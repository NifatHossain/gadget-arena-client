import React, { useContext } from "react";
import { Button, Navbar } from "flowbite-react";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const NavigationBar = () => {
    const {user,logOutUser}=useContext(AuthContext)
    const handleLogout=()=>{
        logOutUser()
        .then(()=>{
            Swal.fire({
                icon: "success",
                title: "LogOut successful",
                showConfirmButton: false,
                timer: 1500
            });
        })
    }
  return (
    <div>
      <Navbar fluid rounded>
        <Navbar.Brand href="/">
          <img
            src="./gadget.png"
            className="mr-3 h-6 sm:h-9"
            alt="Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Gadget <span className="text-red-600">Arena</span>
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          {
            user?<Button onClick={handleLogout}>Log out</Button>:<Link to={'/login'}><Button>Log In</Button></Link>
          }
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <NavLink to={'/'}>
            Home
          </NavLink>
          <NavLink to={'/register'}>Register</NavLink>
          {/* <NavLink to={'/'}>Services</NavLink>
          <NavLink to={'/'}>Pricing</NavLink>
          <NavLink to={'/contact'}>Contact</NavLink> */}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
