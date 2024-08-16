import React, { useContext } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const {registerUser,updateUserProfile}=useContext(AuthContext)
    const handleRegister=(e)=>{
        e.preventDefault();
        const name= e.target.name.value
        const email= e.target.email.value
        const password= e.target.password.value
        console.log({name, email, password})
        registerUser(email,password)
        .then(result=>{
            console.log(result.user)
            updateUserProfile(name)
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Registration successful",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  
              }).catch((error) => {
                console.log(error)
              });
        })
        .catch(error=>{
            console.log(error)
        })
    }
    const handleGoogleSignIn=()=>{

    }
  return (
    <div className="max-w-7xl mx-auto mt-20">
        <div>
            <h2 className="text-2xl text-center font-medium"> Registration Page</h2>
        </div>
        <div className="max-w-2xl mx-auto">
            <form onSubmit={handleRegister} className="flex flex-col gap-4">
                <div>
                <div className="mb-2 block">
                    <Label  value="Your Name" />
                </div>
                <TextInput id="name" name="name" type="text" required />
                </div>
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
                <TextInput id="password1" name="password" type="password" required />
                </div>
                
                <Button type="submit">Register</Button>
            </form>
            <p className="text-center my-2">OR,</p>
            <Button onClick={handleGoogleSignIn} outline gradientDuoTone="greenToBlue" className="w-full p-1 text-white"><FcGoogle className="text-lg mr-2 my-auto" /> Register with Google </Button>
            <p className="mt-3">Already have an account? <Link to={'/login'}><span className="text-blue-500 underline">Login</span></Link> </p>
        </div>
    </div>
  );
};

export default Register;