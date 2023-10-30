import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { login , loginWithGoogle} from "../../redux/auth/authActions";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { GoogleLogin } from "@react-oauth/google";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn, user, isSuccess } = useSelector((state) => state.auth )
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();  
    if (!email || !password) {
      return toast.error("All fields are required");
    } 
    const userData = {
      email,
      password
    } 
    dispatch(login(userData));
  }

  const handleGoogleLogin = async (credentialResponse) => {
    dispatch(
      loginWithGoogle({ userToken: credentialResponse.credential })
    )
  }

  useEffect(() => {
    if (user!= null && isLoggedIn && isSuccess) {
      navigate("/");
    }
  }, [isLoggedIn, user, isSuccess])


  return (
    <>
        <div className="container mx-auto mt-[100px] mb-[0px] px-6 w-[300px] h-[320px] flex flex-col justify-center border-2 rounded">
            <form className="w-full space-y-2">
                <input 
                type="Email" 
                placeholder="Email-Id" 
                className="inputClass p-1 text-black" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required
                />
                <input 
                type="Password" 
                placeholder="Password" 
                className="inputClass p-1 text-black" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </form>
            <button 
            className="rounded-full my-[10px] h-[35px] bg-blue-500 hover:bg-blue-600 text-white"
            onClick={handleLogin}
            > Login 
            </button>
            <h3> Don't have an account? <span> <button className="rounded-full my-[10px] h-[35px] w-[100px] bg-blue-500 hover:bg-blue-600 text-white" onClick={()=>navigate("/signup")}> Signup </button> </span> </h3>
            <GoogleLogin
            padding="10px"
            onSuccess={handleGoogleLogin}
            onError={() => {
              toast.error("Login Failed");
            }}
          /> 
        </div>
    </>
  )
}

export default Login