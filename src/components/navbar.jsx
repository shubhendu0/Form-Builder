import React, { useState } from 'react';
import { useNavigate, useLocation  } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose, AiOutlineMenu,} from 'react-icons/ai';
import { RiMoonFill } from 'react-icons/ri';
import { MdLogout } from 'react-icons/md';
import { setMode } from '../redux/theme/themeSlice';
import { logout } from "../redux/auth/authActions";

const Navbar = () => {
    const location = useLocation();
    const [nav, setNav] = useState(false);
    const dispatch = useDispatch();
    const { user, isLoggedIn } = useSelector((state) => state.auth);
    const userName = user?.name || " ";
    const navigate = useNavigate();

    const hideNavBarOnPaths = ['/login', '/signup']; 
    // Check if the current path is in the hideNavBarOnPaths array
    const hideNavBar = hideNavBarOnPaths.includes(location.pathname); 
    if (hideNavBar) {
      return null; // Return null to hide the navbar on specified paths
    }

    const handleNav = () => {
        setNav(!nav);
    };

    const logoutUser = async () => {
        dispatch(logout());
        navigate("/")
    }

    return (
        <div className='flex justify-between items-center h-24 max-w-[1280px] mx-auto px-4'>
            <h1 className='w-full text-2xl font-bold'> FORM BUILDER </h1>      
            <ul className='hidden md:flex'>
                <li className='p-4 border-b border-gray-600 cursor-pointer' onClick={() => navigate("/")}> Home </li>
                <li className='p-4 border-b border-gray-600 cursor-pointer' onClick={() => navigate("/create")}> Create </li>
                {
                    user && isLoggedIn
                    ? <li className='p-4 border-b border-gray-600 cursor-pointer'> {`You(${userName})`} </li>
                    : null
                }
                <li className='p-5 border-b border-gray-600 cursor-pointer'  onClick={() => dispatch(setMode())}> <RiMoonFill/> </li>
                {
                    user && isLoggedIn
                    ? <li className='p-5 border-b border-gray-600 cursor-pointer'  onClick={logoutUser}> <MdLogout/> </li>
                    : <li className='p-5 border-b border-gray-600 cursor-pointer'  onClick={() => navigate("/login")}> Login </li>
                }                
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? null : <AiOutlineMenu className='cursor-pointer' size={30} />}
            </div>
            <ul className={nav ? 'fixed left-0 top-0 w-[200px] h-full border-r text-white text-center border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                <li className='p-4 cursor-pointer' onClick={handleNav}> <AiOutlineClose size={32}/> </li>
                <li className='p-4 cursor-pointer' onClick={() => navigate("/")}> Home </li>
                <li className='p-4 cursor-pointer' onClick={() => navigate("/create")}> Create </li>
                {
                    user && isLoggedIn
                    ? <li className='p-5 border-b border-gray-600 cursor-pointer'  onClick={logoutUser}> <MdLogout/> </li>
                    : <li className='p-5 border-b border-gray-600 cursor-pointer'  onClick={() => navigate("/login")}> Login </li>
                }  
            </ul>
        </div>
    );
};

export default Navbar;
