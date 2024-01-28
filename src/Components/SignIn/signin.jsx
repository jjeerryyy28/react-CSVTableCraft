import React, { useState } from "react";
import "./signin.css";
import { useNavigate } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import Frame2 from '../../images/frame-2.svg';
import Vector7 from "../../images/vector-7.svg";
import GoogleIcon from "../../images/google-icon-1.svg";
import AppleLogo from "../../images/apple-1.svg"

const firebaseConfig = {
    apiKey: "AIzaSyC83VDZO3LvflIoOvRhPIn6aL-CeLuEJ0A",
    authDomain: "react-opening-app.firebaseapp.com",
    projectId: "react-opening-app",
    storageBucket: "react-opening-app.appspot.com",
    messagingSenderId: "797330954134",
    appId: "1:797330954134:web:d684b974282bf4d7a4efb7",
    measurementId: "G-H5D173L07F"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const SignIn = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log(user);
            navigate("/upload");
        } catch (error) {
            console.error(error);
        }
    };

    const handleEmailPasswordSignIn = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            const user = result.user;
            console.log(user);
            navigate("/upload");
        } catch (error) {
            setError("Invalid email or password. Please try again.");
            console.error(error.message);

            // Show alert with the error message
            window.alert("Invalid email or password. Please try again.");
        }
    };

    return (
        <div className="sign-in">
            <div className="overlap">
                <div className="overlap-group">
                    <div className="text-wrapper">BASE</div>
                    <img className="frame" alt="Frame" src={Frame2} />
                    <div className="div">
                        <div className="ellipse" />
                        <img className="vector" alt="Vector" src={Vector7} />
                    </div>
                </div>
                <div className="login-form">
                    <form action="" className="form">
                        <label htmlFor="email" className="email">Email address</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="email-input" />
                        <br /><br />
                        <label htmlFor="password" className="password">Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} maxLength={12} className="password-input" />
                        <br />
                        <a href="" style={{ color: "#6a92df" }} className="forgot">Forgot Password?</a>
                        <br />
                        <button onClick={(e) => handleEmailPasswordSignIn(e)} className="email-sign-in">
                            Sign In
                        </button>

                        <br /><br />
                    </form>
                    <div className="register-link">
                        <span>Don't have an account? <Link to="/register">Register here.</Link></span>
                    </div>
                </div>
                <div className="google-sign-in">
                    <div className="overlap-4">
                        <img src={GoogleIcon} alt="" srcset="" />
                        <button onClick={handleGoogleSignIn} className="google" style={{color: "#000"}}>
                            Sign In with Google
                        </button>
                    </div>
                </div>
                <div className="apple-sign-in">
                    <div className="overlap-4">
                        <div className="text-wrapper-10">Sign in with Apple</div>
                        <img className="apple" alt="Apple" src={AppleLogo} />
                    </div>
                </div>

                <div className="text-wrapper-11">Sign In</div>
                <p className="p">Sign in to your account</p>
            </div>
            <img className="subtract" alt="Subtract" src="subtract.svg" />
        </div>
    );
};

export default SignIn;