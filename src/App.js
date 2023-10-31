import React, { useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './tailwind.css';
import { themeSettings } from './redux/theme/themeSettings';
import ProtectedRoute from './components/protected';
import Navbar from './components/navbar';
import Home from './pages/home/home';
import Login from './pages/auth/login';
import Signup from './pages/auth/signup';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { CreateForm } from './pages/form/createForm';
import { PreviewForm } from './pages/form/viewForm';
import { GoogleOAuthProvider } from "@react-oauth/google";
import { getUser } from './redux/auth/authActions';

axios.defaults.withCredentials = true;

function App() {
  const dispatch = useDispatch();
  const { user, isLoggedIn} = useSelector((state) => state.auth);
  const mode = useSelector((state) => state.theme.mode);
  const theme = useMemo(() => themeSettings(mode), [mode]);

  useEffect(()=>{
    if (isLoggedIn && user === null) {
      dispatch(getUser());
    } 
  }, [isLoggedIn, user])

  return (
    <div className={theme}>
      <BrowserRouter>
        <ToastContainer 
          position='top-right'
          autoClose={2000}
          newestOnTop
          pauseOnHover
          closeOnClick
          theme="dark"
          limit={2}
        />
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
          <Navbar/>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>} /> 
            <Route element={<ProtectedRoute/>}>     
              <Route path="/" element={<Home/>}/>
              <Route path="/create" element={<CreateForm/>}/>
              <Route path="/form/:id" element={<PreviewForm/>}/>
            </Route>
          </Routes>   
        </GoogleOAuthProvider>    
      </BrowserRouter>
    </div>
  );
}

export default App;
