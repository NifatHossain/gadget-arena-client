import React, { useContext } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
const Login = () => {
    const {signInUser,googleSignIn}=useContext(AuthContext)
    const navigate= useNavigate()
    const location= useLocation()
    const handleSignIn=(e)=>{
        e.preventDefault();
        const email= e.target.email.value
        const password= e.target.password.value
        signInUser(email,password)
        .then((result)=>{
            Swal.fire({
                icon: "success",
                title: "Login Successful",
                showConfirmButton: false,
                timer: 1500
            });
            navigate(location?.state?.pathname || '/')

              
        })
        .catch(error=>{
            console.log(error)
            Swal.fire({
                icon: "error",
                title: "Login ERROR",
                showConfirmButton: false,
                timer: 1500
            });
        })
    }
    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(result=>{
            console.log(result.user)
            Swal.fire({
                icon: "success",
                title: "Login successful",
                showConfirmButton: false,
                timer: 1500
            });
            navigate(location?.state?.pathname || '/')
        })
        .catch(error=>{
            console.log(error)
            Swal.fire({
                icon: "error",
                title: "Login ERROR",
                showConfirmButton: false,
                timer: 1500
            });
        })
    }
  return (
    <div className="max-w-7xl mx-auto mt-6 md:mt-20 p-3 md:p-2">
      <div>
        <h2 className="text-2xl text-center font-medium">Sign In Page</h2>
      </div>
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSignIn} className="flex flex-col gap-4">
          
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              name="email"
              type="email"
              placeholder="name@gmail.com"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput
              id="password1"
              name="password"
              type="password"
              required
            />
          </div>

          <Button type="submit">Sign In</Button>
        </form>
        <p className="text-center my-2">OR,</p>
        <Button
          onClick={handleGoogleSignIn}
          outline
          gradientDuoTone="greenToBlue"
          className="w-full p-1 text-white"
        >
          <FcGoogle className="text-lg mr-2 my-auto" />Sign In with Google{" "}
        </Button>
        <p className="mt-3">
          Already have an account?{" "}
          <Link to={"/register"}>
            <span className="text-blue-500 underline">Register</span>
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
