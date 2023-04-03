import React, { useState } from "react";
import front from './frontOfBook.png';

export const Login = (props) => {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    }
    return (
        <div>
             <img src={front} className="frontOfBook" alt="The Front of Your Book" width="1334px" height="750px" />

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="uname">
                        <b>Username</b>
                    </label>
                    <input value={user} type="text" placeholder="Enter Username" name="uname" required></input>

                    <label htmlFor="psw">
                        <b>Password</b>
                    </label>
                    <input value={pass} type="password" placeholder="Enter Password" name="psw" required></input>

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
    )
}