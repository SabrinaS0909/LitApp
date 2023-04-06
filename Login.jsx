import React, { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "./context/AuthProvider";
import front from './frontOfBook.png';

import axios from './api/axios';
const LOGIN_URL = '/auth';

export const Login = (props) => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pass])

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post(LOGIN_URL, 
                JSON.stringify({user, pass}),
                {
                    headers: { 'Content-Type': 'application/json'},
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            console.log(JSON.stringify(response))
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, pass, roles, accessToken });
            setUser('');
            setPass('');
            setSuccess(true);
        } catch (err) {
                if (!err?.response) {
                    setErrMsg('No Server Response');
                } else if (err.response?.status === 400) {
                    setErrMsg('Missing Username or Password')
                } else if (err.response?.status === 401) {
                    setErrMsg('Unauthorized');
                } else {
                    setErrMsg('Login Failed');
                }
                errRef.current.focus();
        }
    }
    
    return (
        <>
        {success ? (
            <section>
                <h1>You are logged in!</h1>
                <br />
                <p>
                    <a href='#'>Go to Home</a>
                </p>
            </section>
        ) : (
            <div>
                <img src={front} className="frontOfBook" alt="The Front of Your Book" width="1334px" height="750px" />

                <p ref={errRef} aria-live="assertive">{errMsg}</p>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="uname">
                            <b>Username</b>
                        </label>
                        <input 
                            value={user} 
                            type="text" 
                            placeholder="Enter Username" 
                            name="uname"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            required
                        >
                        </input>

                        <label htmlFor="psw">
                            <b>Password</b>
                        </label>
                        <input 
                            value={pass} 
                            type="password" 
                            placeholder="Enter Password" 
                            name="psw"
                            onChange={(e) => setPass(e.target.value)}
                            required
                        >
                        </input>

                        <button type="submit">Login</button>

                        <label>
                            <input type="checkbox" checked="checked" name="remember"></input> 
                            <p>Remember me</p>
                        </label>
                    </div>

                    <div>
                        <button id="cancel">Cancel</button>
                        <span className="psw"><a href="#">Forgot password?</a></span>
                        <p>Not a member yet? <button onClick={() => props.onFormSwitch('register')}>Sign up!!</button></p>
                    </div>
                </form>
            </div>
        )}
        </>
    )
}