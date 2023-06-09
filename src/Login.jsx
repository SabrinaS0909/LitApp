import React, { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "./context/AuthProvider";
import front from './img/frontOfBook.png';

import axios from './routes/api/axios';
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
                <img src={front} className="frontOfBook" alt="The Front of Your Book" class="fobImage" />

                <p ref={errRef} aria-live="assertive">{errMsg}</p>

                <form onSubmit={handleSubmit} class="fobForm">
                    <div>
                        <label htmlFor="user" class="fobBlockElements username">
                            <b>Username</b>
                        </label>
                        <input 
                            value={user} 
                            type="text" 
                            placeholder="Enter Username" 
                            name="user"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            required
                            class="fobBlockElements"
                        >
                        </input>
                        <label htmlFor="pass" class="fobBlockElements password">
                            <b>Password</b>
                        </label>
                        <input 
                            value={pass} 
                            type="password" 
                            placeholder="Enter Password" 
                            name="pass"
                            onChange={(e) => setPass(e.target.value)}
                            required
                            class="fobBlockElements"
                        >
                        </input>

                        <button type="submit" class="fobBlockElements login"><b>LOGIN</b></button>

                        <label class="fobInlineElements">
                            <input type="checkbox" checked="checked" name="remember"></input> 
                            <p>Remember me</p>
                        </label>
                    </div>

                    <div>
                        <button id="cancel">Cancel</button>
                        <span className="pass"><a href="#" class="fobBlockElements">Forgot password?</a></span>
                        <p>Not a member yet? <button class="fobBlockElements" onClick={() => props.onFormSwitch('register')}>Sign up!!</button></p>
                    </div>
                </form>
            </div>
        )}
        </>
    )
}