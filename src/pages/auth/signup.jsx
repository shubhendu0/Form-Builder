import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth/authActions";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoggedIn, isSuccess } = useSelector((state) => state.auth )
  useEffect(() => {
    if (isSuccess && isLoggedIn) {
      navigate("/")
    }
  }, [isLoggedIn, isSuccess])

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSignup = async(e) => {
    e.preventDefault();
    if (!name || !email || !password || !password2) {
        toast.error("All fields are required");
    }
    if (password.length < 6) {
        toast.error("Password must be up to 6 characters");
    }
    if (password !== password2) {
        toast.error("Passwords do not match");
    }     
    const userData = {
        name,
        email,
        password,
    }
    await dispatch(register(userData));
  }

  return (
    <>
        <div className="container mx-auto mt-[100px] mb-[0px] px-6 w-[300px] h-[380px] flex flex-col justify-center border-2 rounded">
            <form className="w-full space-y-2">
                <input 
                type="Name" 
                placeholder="Username" 
                className="inputClass p-1 text-black"
                onChange={(e) => setName(e.target.value)} 
                value={name}  
                required
                />
                <input 
                type="Email" 
                placeholder="Email-Id" 
                className="inputClass p-1 text-black"
                onChange={(e) => setEmail(e.target.value)} 
                value={email}  
                required
                />
                <input 
                type="Password" 
                placeholder="Password" 
                className="inputClass p-1 text-black"
                value={password} 
                onChange={(e) => setPassword(e.target.value)}                   
                onPaste={(e) => {
                    e.preventDefault();
                    toast.error("Cannot paste into input field");
                    return false;
                }}
                required
                />
                <input 
                type="Password" 
                placeholder="Confirm Password" 
                className="inputClass p-1 text-black"
                onChange={(e) => setPassword2(e.target.value)} 
                onPaste={(e) => {
                    e.preventDefault();
                    toast.error("Cannot paste into input field");
                    return false;
                }}
                value={password2} 
                required
                />
            </form>
            <button 
            className="rounded-full my-[10px] h-[35px] bg-blue-500 hover:bg-blue-600 text-white"
            onClick={handleSignup}
            > Register </button>
            <h3> Already have an account? <span> <button className="rounded-full my-[10px] h-[35px] w-[100px] bg-blue-500 hover:bg-blue-600 text-white" onClick={()=>navigate("/login")}> LogIn</button> </span> </h3>
        </div>
    </>
  )
}

export default Signup