
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "./register.css";

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

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);

  const handleRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(`User ${user.email} created.`);
      console.log(user);

      // Redirect to the signin page after successful registration
      navigate("/");
    } catch (error) {
      // Handle registration errors
      setError(error.message);
    }
  };

  return (
    <div>
      <form>
        <fieldset>
          <legend><h2>Register</h2></legend>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

          <label>Username</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

          {error && <p style={{ color: 'red' }}>{error}</p>}

          <button type="button" onClick={handleRegister}>Register</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
